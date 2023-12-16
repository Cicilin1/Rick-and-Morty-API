import { Container } from "./style";
import { useState } from "react";

export const Pagination = ({pagination, fecthNextPage, fecthPreiousPage}) => {
    const [currentPage, setCurrentePage] = useState(1)

    const previousPage = pagination?.prev ? currentPage - 1 : null;
    const nextPage = currentPage !== pagination?.pages ? currentPage + 1 : null

    const previousDisabledButton = currentPage === 1 ;
    const nextDisabledButton = currentPage === pagination?.pages;


    const handPreviousPage = () => {
        setCurrentePage((prevState) => prevState - 1)
        fecthPreiousPage(pagination?.prev)
    };

    const handNextPage = () => {
        setCurrentePage((prevState) => prevState + 1)
        fecthNextPage(pagination?.next)
    };  

    return (
        <Container>
            <button onClick={handPreviousPage} disabled={previousDisabledButton}>&lt;</button>
            <div className="Container-page">
                <p className="page">{previousPage}</p>
                <p className="current-page">{currentPage}</p>
                <p className="page">{nextPage}</p>
            </div>

            <button onClick={handNextPage}  disabled={nextDisabledButton}>&gt;</button>
        </Container>
    )
} 