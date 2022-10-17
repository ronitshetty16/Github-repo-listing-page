//import axios from 'axios';
import React, { useState } from 'react'
import '../App.css'
import UserDetailsComponent from './UserDetailsComponent'
import UserRepoComponent from './UserRepoComponent'
import PaginationComponent from './PaginationComponent'

const Searchbar = () => {

    const [searchinput, setSearch] = useState('');
    const [user, showUser] = useState({})
    const [loading, setLoading] = useState(false);
    const [rep, setRepositories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [repPerPage] = useState(6);

    const SearchChange = (e) => {
        setSearch(e.target.value);
    }


    const handleChange = async e => {
        e.preventDefault();
        console.log(searchinput);

        const res = await fetch(`https://api.github.com/users/${searchinput}`)
        setLoading(true);


        const resj = await res.json();
        console.log(user);

        const repositories = await fetch(resj.repos_url);
        const repoJson = await repositories.json();

        if (resj) {
            showUser(resj);
            setRepositories(repoJson);

        }
    };

    //get current rep
    const indexOfLastRep = currentPage * repPerPage;
    const indexOfFirstRep = indexOfLastRep - repPerPage;
    const currentReps = rep.slice(indexOfFirstRep, indexOfLastRep);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='user-top'>
            <nav className='user-search'>
                <h1>Github Profile</h1>
                <div className='username'>
                    <input className='user-input' type='text' value={searchinput} onChange={SearchChange} placeholder='Username' ></input>

                    <button className='user-button' onClick={handleChange}>Search</button>
                </div>
            </nav>
            <br />
            <div className='user-details'>
                <UserDetailsComponent user={user} />
                <UserRepoComponent rep={currentReps} />
                <PaginationComponent repPerPage={repPerPage} totalrep={rep.length} paginate={paginate} />
            </div>
        </div>
    )
}







export default Searchbar;