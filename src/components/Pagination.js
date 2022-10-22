import React from 'react';

const Pagination = ({ postPerPage, totalPost, paginate }) => {
    const pageNumber = [];
    console.log(totalPost / postPerPage);

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumber.push(i);

    }
    return (
        <nav style={{ marginTop: "20px" }}>
            <ul style={{ display: "flex" }}>
                {
                    pageNumber.map(number => (
                        <li key={number} style={{ background: "white", marginRight: "10px", padding: "15px", listStyle: "none", borderRadius: "10px", cursor: "pointer",border:"1px solid darkcyan" }}>
                            <a
                                onClick={() => paginate(number)}
                                href="#"
                                style={{ textDecoration: "none", color: " darkcyan",fontWeight:"600" }}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Pagination;