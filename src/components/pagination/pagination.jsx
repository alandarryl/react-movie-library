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



