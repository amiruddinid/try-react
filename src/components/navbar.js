import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-light fixed-top bg-hero">
          <div className="container">
            <Link className="navbar-brand" to="">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#ourservice"
                  >
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#whyus">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-success" href="register.html">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
  )
}
