import Link from 'next/link'
import { Navigation } from '@/components/Navigation'

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
          <ul className="nav nav-pills ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <Navigation href="/">INICIO</Navigation>
            </li>
            <li className="nav-item me-4">
              <Navigation href="/projects">PROYECTOS</Navigation>
            </li>
            <li className="nav-item">
              <Navigation href="/about">ACERCA DE</Navigation>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
