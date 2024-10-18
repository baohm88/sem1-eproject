import classes from "./Pagination.module.css";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

export default function Pagination({ currentPage, totalPages, paginate }) {
    return (
        <div className={classes["pagination"]}>
            <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <IoChevronBackOutline />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={currentPage === i + 1 ? classes.active : ""}
                >
                    {i + 1}
                </button>
            ))}
            <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <IoChevronForward />
            </button>
        </div>
    );
}
