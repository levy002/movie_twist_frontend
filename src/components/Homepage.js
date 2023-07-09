import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchMovies } from '../redux/slices/moviesSlice';
import MoviesList from './movies/MoviesList';
import { Pagination } from './shared/Pagination';
import { useWindowSize } from './hooks/UseWindowSIze';

const Homepage = () => {
    const movies = useSelector((state) => state.movies.movies);
    const dispatch = useDispatch();

    const [entriesPerPage, setEntriesPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffSet] = useState(0);
    const [limit, setLimit] = useState(entriesPerPage);
    const [totalEntries, setTotalEntries] = useState(movies.length)
    const windowWidth = useWindowSize();

    useEffect(() => {
        if (windowWidth >= 1000) {
            setEntriesPerPage(24)
        } else {
            setEntriesPerPage(12);
        }
    }, [setEntriesPerPage, windowWidth])

    useEffect(() => {
        const newOffset = (currentPage - 1) * entriesPerPage;
        const newLimit = newOffset + entriesPerPage;

        setLimit(newLimit);
        setOffSet(newOffset);

        setTotalEntries(movies.length)
        setDisplayedMovies(movies.slice(newOffset, newLimit));
    }, [currentPage, setCurrentPage, entriesPerPage, setEntriesPerPage, movies]);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    const [displayedMovies, setDisplayedMovies] = useState(movies.slice(offset, limit));

    return (
        <HomepageContainer>
            <MainTitle>MOVIE TWIST</MainTitle>
            {
                movies.length === 0 ? (
                    <Loading>Loading....</Loading>
                ) : (
                    <>
                        <MoviesList movies={displayedMovies} />
                    </>
                )
            }
            <Pagination
                totalEntries={totalEntries}
                entriesPerPage={entriesPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </HomepageContainer>
    )
}

const HomepageContainer = styled.div`
`

const MainTitle = styled.h1`
color: #fff;
text-align: center;
margin-bottom: 50px;
`

const Loading = styled.h1`
color: #fff;
text-align: center;
height: 90vh;
`

export default Homepage;
