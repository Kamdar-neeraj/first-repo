import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="container-fluid px-5 d-none d-lg-block">
        <div className="row gx-5">
          <div className="col-lg-4 text-center py-3">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase fw-bold">Our Office</h6>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center border-start border-end py-3">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase fw-bold">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center py-3">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase fw-bold">Call Us</h6>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
        <nav className="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
          <Link to="Home" className="navbar-brand">
            <h1 className="m-0 display-4 text-uppercase text-white">
              <i className="bi bi-building text-primary me-2"></i>WEBUILD
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="Home" className="nav-item nav-link ">
                Home
              </Link>
              <Link to="Axios" className="nav-item nav-link">
                Axios
              </Link>
              <Link to="Aside" className="nav-item nav-link">
                Aside
              </Link>
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="Page2" className="dropdown-item">
                    Service
                  </Link>
                  <Link to="Contact" className="dropdown-item">
                    Contact
                  </Link>
                  <Link to="Page3" className="dropdown-item">
                    Blog Post
                  </Link>
                  <Link to="Page4" className="dropdown-item">
                    The Team
                  </Link>
                  <Link to="Page5" className="dropdown-item">
                    Testimonial
                  </Link>
                  <Link to="Page6" className="dropdown-item">
                    Blog Grid
                  </Link>
                  <Link to="Page7" className="dropdown-item">
                    Blog Detail
                  </Link>
                </div>
              </div>

              <Link
                to="Quote"
                className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block"
              >
                Get A Quote <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
