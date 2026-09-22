/**
 * 作品数据读取与更新通知。
 *
 * works.json 是静态资源，浏览器（以及某些代理）会缓存它，
 * 导致后台改动后前台仍读到旧数据。这里统一处理：
 * 1. 读取时禁用缓存并附带时间戳，确保每次都拿到最新内容
 * 2. 后台改动后广播变更，已打开的前台页面自动重新拉取
 */

/**
 * 作品首页图（封面）：
 * 优先用 image 字段，没有时退回图库第一张，保证卡片永远不会空着。
 */
export function getWorkCover(work) {
  if (!work) return ''
  return work.image || work.images?.[0] || ''
}

export function fetchWorks() {
  return fetch(`/works/works.json?t=${Date.now()}`, { cache: 'no-store' })
    .then((r) => {
      if (!r.ok) throw new Error(`读取作品集失败（HTTP ${r.status}）`)
      return r.json()
    })
    .then((data) => (Array.isArray(data) ? data : []))
}

// 后台改动作品后调用，通知所有已打开的前台页面刷新
export function markWorksUpdated() {
  try {
    localStorage.setItem('worksUpdatedAt', String(Date.now()))
  } catch {
    // 隐私模式下 localStorage 不可用，忽略即可
  }
  window.dispatchEvent(new Event('works-updated'))
}

// 前台订阅作品变更：同一标签页事件、跨标签页 storage、切回页面三种情况都会触发
export function subscribeWorksUpdate(cb) {
  const onSameTab = () => cb()
  const onStorage = (e) => {
    if (e.key === 'worksUpdatedAt') cb()
  }
  const onVisible = () => {
    if (document.visibilityState === 'visible') cb()
  }

  window.addEventListener('works-updated', onSameTab)
  window.addEventListener('storage', onStorage)
  document.addEventListener('visibilitychange', onVisible)

  return () => {
    window.removeEventListener('works-updated', onSameTab)
    window.removeEventListener('storage', onStorage)
    document.removeEventListener('visibilitychange', onVisible)
  }
}
