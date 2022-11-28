import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

function Items({ currentItems }) {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {currentItems.map((card) => (
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={card.url} className="card-img-top" alt="image" />
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

export default function Fetchf() {
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
      <Items currentItems={currentItems} />
      <div className="d-flex">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}
