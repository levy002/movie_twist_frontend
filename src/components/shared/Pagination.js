import { useState, useMemo } from 'react';
import { styled } from 'styled-components';
import { BiChevronsRight, BiChevronsLeft, BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export const Pagination = (props) => {
    const { totalEntries, entriesPerPage, setCurrentPage, currentPage } = props;
    const [pages, setPages] = useState({
        startIndex: 0,
        endIndex: 5
    });
    const numberOfPages = useMemo(() => Math.ceil(totalEntries / entriesPerPage), [entriesPerPage, totalEntries]);

    const referenceArray = new Array(numberOfPages).fill('page');
    const pagesArray = [...referenceArray.keys()];

    const handlePrevClick = () => {
        setCurrentPage(currentPage - 1);

        if (currentPage === pages.startIndex + 1) {
            setPages({
                startIndex: pages.startIndex - 3,
                endIndex: pages.endIndex - 3
            });
        }
    }

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage === pages.endIndex) {
            setPages({
                startIndex: pages.startIndex + 3,
                endIndex: pages.endIndex + 3
            });
        }
    }


    const handeFistPageClick = () => {
        setCurrentPage(1);
        setPages({
            startIndex: 0,
            endIndex: 5
        });
    }

    const handeLastPageClick = () => {
        setCurrentPage(pagesArray[pagesArray.slice(-1)] + 1);
        setPages({
            startIndex: pagesArray[pagesArray.slice(-1)] - 4,
            endIndex: pagesArray[pagesArray.slice(-1)] + 1
        });
    }

    return (
        <PaginationContainer>
            {
                currentPage !== 1 ? (<FirstPage onClick={handeFistPageClick} />) : null
            }
            {
                currentPage !== 1 ? (<PreviousIcon onClick={handlePrevClick} />) : null
            }
            {
                pagesArray.slice(pages.startIndex, pages.endIndex).map((entry, index) => currentPage === entry + 1 ? <ActivePage className='active-page' onClick={() => setCurrentPage(entry + 1)} key={index}>{entry + 1}</ActivePage> : <Page onClick={() => setCurrentPage(entry + 1)} key={index}>{entry + 1}</Page>)
            }

            {
                currentPage !== referenceArray.length ? (<NextIcon onClick={handleNextClick} />) : null
            }


            {
                currentPage !== referenceArray.length ? (<LastPage onClick={handeLastPageClick} />) : null
            }
        </PaginationContainer>
    );
}

const PaginationContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
bottom: 10px;
right: 10%;
display: flex;
gap: 3px;
margin: 20px 0;
`;

const commonPageStyles = `
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    opacity: 0.9;
`
const commonInactivePageStyles = `
   ${commonPageStyles};
    border: solid 1px #0f0f0f;
    background-color: #292929;
    &:hover {
        background-color: #00acc1;
        font-weight: bold;
       };
`

const commonActivePageStyles = `
   ${commonPageStyles};
    border: solid 1px #00acc1;
    background-color: #00acc1;
    font-weight: bold;
`
const Page = styled.p`
    ${commonInactivePageStyles};
`;

const ActivePage = styled.p`
${commonActivePageStyles}
    
`
const NextIcon = styled(BiChevronRight)`
${commonInactivePageStyles}
size: 5px;
`

const PreviousIcon = styled(BiChevronLeft)`
${commonInactivePageStyles}
`

const FirstPage = styled(BiChevronsLeft)`
${commonInactivePageStyles}
`;

const LastPage = styled(BiChevronsRight)`
${commonInactivePageStyles}
`;