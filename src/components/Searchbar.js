//import axios from 'axios';
import React, {useState} from 'react'
import '../App.css'
import UserDetailsComponent from './UserDetailsComponent'

const Searchbar = () => {

    const [searchinput,setSearch] = useState('');
    const [user,showUser] = useState({})
    const [rep, setRepositories] = useState([]);

    const SearchChange = (e)=>{
        setSearch(e.target.value);
    }
    
    const handleChange =async e=> {
        e.preventDefault();
        console.log(searchinput);
        
        const res= await fetch(`https://api.github.com/users/${searchinput}`)
        const resj = await res.json();
        console.log(user);

        const repositories = await fetch(resj.repos_url);
        const repoJson = await repositories.json();

        if (resj) {
            showUser(resj);
            setRepositories(repoJson);
        }

        
        
        
    };

    

    return (
        <div className='user-top'>
            <nav className='user-search'>
                <h1>Github Profile</h1>
                <div className='username'>
                    <input className='user-input' type='text' value={searchinput} onChange={SearchChange} placeholder='Username' ></input>
                
                    <button className='user-button' onClick={handleChange}>Search</button>
                </div>
            </nav>
            <br/>
            <div className='user-details'>
                <UserDetailsComponent user = {user} rep = {rep}/>
            </div>
        </div>
    )
}
   

  




export default Searchbar;