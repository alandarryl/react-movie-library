
// import "./pagination.css";
// import { useState } from "react";

// function pagination(){
//     const [currentPage, setCurrentPage] = useState(1);

//     return(
//         <div className="pagination-container" >
//             <div className="pagination-buttons" >
//                 <button onClick={()=>setCurrentPage(currentPage - 1)} disabled={currentPage === 1} >Previous { currentPage >1 ? currentPage - 1 : " no more "} </button>
//                 <span>Page {currentPage}</span>
//                 <button onClick={()=>setCurrentPage(currentPage + 1)} >Next {currentPage + 1} </button>
//             </div>
//         </div>
//     )
// }

// export default pagination;


// import "./pagination.css";

// function pagination({currentPage}){

//     let pageNow;

//     function pageUp(){
//         pageNow = currentPage + 1;
//     }

//     function pageDown(){
//         pageNow = currentPage - 1;
//     }


//     return(
//         <div className="pagination-container" >
//             <div className="pagination-buttons" >
//                 <button onClick={pageDown} disabled={pageNow === 1} >Previous { pageNow > 1 ? pageNow - 1 : " no more "} </button>
//                 <span>Page {pageNow}</span>
//                 <button onClick={pageUp} >Next {pageNow + 1} </button>
//             </div>
//         </div>
//     )
// }

// export default pagination;



import "./pagination.css";

function Pagination({ currentPage, setCurrentPage }) {

  function pageUp() {
    setCurrentPage(currentPage + 1);
  }

  function pageDown() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="pagination-container">
      <div className="pagination-buttons">
        <button onClick={pageDown} disabled={currentPage === 1}>
          Previous
        </button>

        <span>Page {currentPage}</span>

        <button onClick={pageUp}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;



