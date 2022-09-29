import React from 'react'

const PaginationComponent = ({repPerPage,totalrep,paginate}) => {
    
    const pageNumbers =[];

    for (let i = 1; i <= Math.ceil(totalrep / repPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <div>
                        <li key={0} className='page-item'>
                            <a onClick={() => paginate(number-1)} href='!#' className='page-link'>
                                Prev
                            </a>
                        </li>
                        <li key={number} className='page-item'>
                            <a onClick={() => paginate(number)} href='!#' className='page-link'>
                                {number}
                            </a>
                        </li>
                    </div>
                ))}
            </ul>
        </nav>
    )
}

export default PaginationComponent;