import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function Items({ currentItems }) {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {currentItems.map((card) => (
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={card.url} className="card-img-top" alt="card image1" />
              <div className="card-body">
                <h5 className="card-title">card {card.id}</h5>
                <p className="card-text">{card.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Page1() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts/1/photos")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   console.log(user);
  let itemsPerPage = 20;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = user.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(user.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % user.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="container-fluid py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <h1 className="display-5 text-uppercase mb-4">
              We are <span className="text-primary">the Leader</span> in
              Construction Industry
            </h1>
            <h4 className="text-uppercase mb-3 text-body">
              Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum
              tempor sit diam amet diam et eos labore
            </h4>
            <p>
              Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
              dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam
              diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor
            </p>
            <div className="row gx-5 py-2">
              <div className="col-sm-6 mb-2">
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3"></i>Perfect
                  Planning
                </p>
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3"></i>Professional
                  Workers
                </p>
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3"></i>First Working
                  Process
                </p>
              </div>
              <div className="col-sm-6 mb-2">
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3"></i>Perfect
                  Planning
                </p>
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3"></i>Professional
                  Workers
                </p>
                <p className="fw-bold mb-2">
                  <i className="fa fa-check text-primary me-3"></i>First Working
                  Process
                </p>
              </div>
            </div>
            <p className="mb-4">
              Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
              dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam
              diam amet diam et eos labore
            </p>
            <img src="img/signature.jpg" alt="card img1" />
          </div>
          <div className="col-lg-5 pb-5" style={{ minHeight: "400px" }}>
            <div className="position-relative bg-dark-radial h-100 ms-5">
              <img
                className="position-absolute w-100 h-100 mt-5 ms-n5"
                src="img/about.jpg"
                style={{ objectFit: "cover" }}
                alt="card img1"
              />
            </div>
          </div>
        </div>
      </div>
      <Items currentItems={currentItems} />
      <center>
        <div className="nav navbar-nav list-inline mt-4 mb-3 ">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            breakClassName="list-inline-item"
            pageClassName="list-inline-item"
            previousClassName="list-inline-item"
            nextClassName="list-inline-item"
          />
        </div>
      </center>
    </>
  );
}
