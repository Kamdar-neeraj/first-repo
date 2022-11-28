import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer container-fluid position-relative bg-dark bg-light-radial text-white-50 py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-6 pe-lg-5">
            <Link to="index.html" className="navbar-brand">
              <h1 className="m-0 display-4 text-uppercase text-white">
                <i className="bi bi-building text-primary me-2"></i>WEBUILD
              </h1>
            </Link>
            <p>
              Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem
              nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna
              erat dolore sed stet justo et dolor.
            </p>
            <p>
              <i className="fa fa-map-marker-alt me-2"></i>123 Street, New York,
              USA
            </p>
            <p>
              <i className="fa fa-phone-alt me-2"></i>+012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope me-2"></i>info@example.com
            </p>
            <div className="d-flex justify-content-start mt-4">
              <Link
                className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
                to="#"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
                to="#"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                className="btn btn-lg btn-primary btn-lg-square rounded-0 me-2"
                to="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                className="btn btn-lg btn-primary btn-lg-square rounded-0"
                to="#"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className="row g-5">
              <div className="col-sm-6">
                <h4 className="text-white text-uppercase mb-4">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-white-50 mb-2" to="#">
                    <i className="fa fa-angle-right me-2"></i>Home
                  </Link>
                  <Link className="text-white-50 mb-2" to="#">
                    <i className="fa fa-angle-right me-2"></i>About Us
                  </Link>
                  <Link className="text-white-50 mb-2" to="#">
                    <i className="fa fa-angle-right me-2"></i>Our Services
                  </Link>
                  <Link className="text-white-50 mb-2" to="#">
                    <i className="fa fa-angle-right me-2"></i>Meet The Team
                  </Link>
                  <Link className="text-white-50" to="#">
                    <i className="fa fa-angle-right me-2"></i>Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-sm-6">
                <h4 className="text-white text-uppercase mb-4">
                  Popular Links
                </h4>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-white-50 mb-2" to="#">
                    <i className="fa fa-angle-right me-2"></i>Home
                  </Link>
                  <Link className="text-white-50 mb-2" to="#">
                    <i className="fa fa-angle-right me-2"></i>About Us
                  </Link>
                  <Link className="text-white-50 mb-2" to="#">
                    <i className="fa fa-angle-right me-2"></i>Our Services
                  </Link>
                  <Link className="text-white-50 mb-2" to="#">
                    <i className="fa fa-angle-right me-2"></i>Meet The Team
                  </Link>
                  <Link className="text-white-50" to="#">
                    <i className="fa fa-angle-right me-2"></i>Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-sm-12">
                <h4 className="text-white text-uppercase mb-4">Newsletter</h4>
                <div className="w-100">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-light"
                      style={{ padding: "20px 30px" }}
                      placeholder="Your Email Address"
                    />
                    <button className="btn btn-primary px-4">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark bg-light-radial text-white border-top border-primary px-0">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="py-4 px-5 text-center text-md-start">
            <p className="mb-0">
              &copy;{" "}
              <Link className="text-primary" to="#">
                We build
              </Link>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <Link to="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up">Back to top</i>
      </Link>
    </>
  );
}
