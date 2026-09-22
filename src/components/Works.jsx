import { useEffect, useRef, useState, useCallback } from 'react'
import { fetchWorks, subscribeWorksUpdate, getWorkCover } from '../lib/works'
import WorkModal from './WorkModal'

export default function Works() {
  const [works, setWorks] = useState([])
  const [selected, setSelected] = useState(null)
  const [activeTitle, setActiveTitle] = useState('')
  const containerRef = useRef(null)
  const trackRef = useRef(null)

  // 轮播状态
  const stateRef = useRef({
    current: 0,      // 当前索引（可带小数，实现平滑过渡）
    target: 0,       // 目标索引
    isDragging: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    velocity: 0,
    lastTime: 0,
    moved: false,    // 是否为「拖动」（区分点击与拖拽）
    downTarget: null,
    rafId: null,
  })

  // 读取作品配置；后台改动后会自动重新拉取（不重置轮播位置）
  useEffect(() => {
    let alive = true
    const load = async () => {
      try {
        const list = await fetchWorks()
        if (alive) setWorks(list)
      } catch {
        if (alive) setWorks([])
      }
    }
    load()
    return subscribeWorksUpdate(load)
  }, [])

  // 动画循环
  const animate = useCallback(() => {
    const state = stateRef.current
    const track = trackRef.current
    if (!track || works.length === 0) return

    // 物理：速度衰减 + 向目标吸附
    const k = 0.16        // 弹簧系数
    const damping = 0.62  // 速度衰减（增大 = 衰减稍慢，保留一点回弹）

    const diff = state.target - state.current
    state.velocity += diff * k
    state.velocity *= damping
    state.current += state.velocity

    // 应用变换（无限循环：current 对作品数量取模）
    const items = track.children
    const containerWidth = track.parentElement.clientWidth
    const centerX = containerWidth / 2
    const n = works.length

    // 循环索引：让 current 无限延伸，计算最近的真实索引用于标题
    const loopedCurrent = ((state.current % n) + n) % n
    let nearestIdx = Math.round(loopedCurrent)
    nearestIdx = ((nearestIdx % n) + n) % n
    const newTitle = works[nearestIdx]?.title || ''
    if (newTitle !== activeTitle) setActiveTitle(newTitle)

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      // 计算循环距离：找到最短路径（考虑绕圈）
      let dist = i - loopedCurrent
      if (dist > n / 2) dist -= n
      if (dist < -n / 2) dist += n
      const absDist = Math.abs(dist)

      // 位置：中心放大，两侧按曲线排列
      // 间距按「中心卡视觉半宽 + 相邻卡半宽 + 固定间隙」计算，保证卡片之间始终留有空隙
      const cardHalf = (items[0]?.offsetWidth || 440) / 2
      const spacing = cardHalf * 2.6
      const x = dist * spacing

      // 缩放：中心 1.3，相邻为 1，向外继续递减
      let scale = 1.3 - absDist * 0.3
      scale = Math.max(0.5, scale)

      // 透明度
      let opacity = 1 - absDist * 0.16
      opacity = Math.max(0.35, opacity)

      // Z轴层级
      const zIndex = 100 - Math.round(absDist * 10)

      item.style.transform = `translateX(${centerX + x - cardHalf}px) translateY(-50%) scale(${scale})`
      item.style.opacity = opacity
      item.style.zIndex = zIndex
    }

    state.rafId = requestAnimationFrame(animate)
  }, [works.length])

  // 启动动画
  useEffect(() => {
    if (works.length === 0) return
    const state = stateRef.current
    state.rafId = requestAnimationFrame(animate)
    return () => {
      if (state.rafId) cancelAnimationFrame(state.rafId)
    }
  }, [works.length, animate])

  // 滚轮控制
  useEffect(() => {
    const container = containerRef.current
    if (!container || works.length === 0) return

    const onWheel = (e) => {
      if (window.innerWidth <= 900) return
      e.preventDefault()
      const state = stateRef.current
      state.target += e.deltaY * 0.008
    }

    container.addEventListener('wheel', onWheel, { passive: false })
    return () => container.removeEventListener('wheel', onWheel)
  }, [works.length])

  // 拖拽控制
  useEffect(() => {
    const container = containerRef.current
    if (!container || works.length === 0) return
    const state = stateRef.current

    const onPointerDown = (e) => {
      state.isDragging = true
      state.startX = e.clientX
      state.startY = e.clientY
      state.lastX = e.clientX
      state.lastTime = Date.now()
      state.velocity = 0
      state.moved = false
      // pointer capture 之后 event.target 会变成容器，先记下真正点到的元素
      state.downTarget = e.target
      container.setPointerCapture(e.pointerId)
      container.style.cursor = 'grabbing'
    }

    const onPointerMove = (e) => {
      if (!state.isDragging) return
      const dx = e.clientX - state.lastX
      const dt = Date.now() - state.lastTime
      state.lastX = e.clientX
      state.lastTime = Date.now()

      // 位移超过阈值就标记为「拖动」，避免松手时误触发点击
      if (Math.abs(e.clientX - state.startX) > 6 || Math.abs(e.clientY - state.startY) > 6) {
        state.moved = true
      }

      // 直接移动目标
      state.target -= dx * 0.006

      // 计算速度用于惯性
      if (dt > 0) {
        state.velocity = -dx / dt * 0.015
      }
    }

    const onPointerUp = () => {
      if (!state.isDragging) return
      state.isDragging = false
      container.style.cursor = 'grab'

      // 没有拖动 → 视为点击，打开对应作品的详情
      if (!state.moved) {
        const card = state.downTarget?.closest?.('.work-carousel-card')
        const idx = card ? Number(card.dataset.index) : NaN
        if (!Number.isNaN(idx) && works[idx]) setSelected(works[idx])
      }

      // 惯性滑动
      const inertia = () => {
        if (state.isDragging) return
        state.velocity *= 0.55
        if (Math.abs(state.velocity) < 0.001) return
        state.target += state.velocity
        requestAnimationFrame(inertia)
      }
      inertia()
    }

    container.addEventListener('pointerdown', onPointerDown)
    container.addEventListener('pointermove', onPointerMove)
    container.addEventListener('pointerup', onPointerUp)
    container.addEventListener('pointerleave', onPointerUp)

    return () => {
      container.removeEventListener('pointerdown', onPointerDown)
      container.removeEventListener('pointermove', onPointerMove)
      container.removeEventListener('pointerup', onPointerUp)
      container.removeEventListener('pointerleave', onPointerUp)
    }
  }, [works])

  return (
    <div className="home-works" id="home-works">
      <div className="section-header">
        <div className="section-header-row">
          <div>
            <h2>精选作品</h2>
            <p>从概念到落地的完整设计实践。在此区域滚动鼠标横向浏览。</p>
          </div>
          <a className="section-more" href="#/works">更多 →</a>
        </div>
      </div>

      <div className="works-active-title">
        {activeTitle}
      </div>

      <div className="works-carousel" ref={containerRef}>
        <div className="works-carousel-track" ref={trackRef}>
          {works.map((work, i) => (
            <div
              className="work-carousel-card"
              key={work.id}
              data-index={i}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelected(work) }}
            >
              <div className="work-carousel-img-wrap">
                {getWorkCover(work) ? (
                  <img src={getWorkCover(work)} alt={work.title} />
                ) : (
                  <div className="work-carousel-placeholder">{work.title[0]}</div>
                )}
              </div>
              <div className="work-carousel-info">
                <h3>{work.title}</h3>
                <div className="work-carousel-meta">
                  {work.meta?.[0] && <span>{work.meta[0]}</span>}
                  {work.meta?.[1] && <span>{work.meta[1]}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 作品完整详情：封面大图 + 全部图片长栏 */}
      {selected && <WorkModal work={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
