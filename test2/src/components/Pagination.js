import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ totalProducts, ProductsPerPage, currentPage }) => {
    const totalPages = Math.ceil(totalProducts / ProductsPerPage);

    return (
        <div>
            {Array.from({ length: totalPages }, (id, index) =>(
                <Link key={index} to={`/page/${index + 1}`}>
                    {index + 1}
                </Link>
            ))}
        </div>
    );
}

export default Pagination;