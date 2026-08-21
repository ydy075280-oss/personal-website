export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        © {new Date().getFullYear()} 创造试验室 Creative Laboratory. All rights reserved.
      </div>
      <div className="footer-right">
        <a href="#" className="footer-link">GitHub</a>
        <a href="#" className="footer-link">Twitter</a>
        <a href="#" className="footer-link">LinkedIn</a>
      </div>
    </footer>
  )
}
