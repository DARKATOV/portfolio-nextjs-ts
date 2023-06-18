import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mb-3">
      <div className="container">
        <Link className="navbar-brand" href="/">PORTAFOLIO</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">INICIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/projects">PROYECTOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">ACERCA DE</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
