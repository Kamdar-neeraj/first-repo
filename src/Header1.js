import { Link } from "react-router-dom";
export default function Header1() {
  return (
    <>
      i am header1
      <Link to="Page3" className="dropdown-item">
        Our Project
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
    </>
  );
}
