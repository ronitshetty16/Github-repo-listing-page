//import axios from 'axios';
import React, {useState} from 'react'
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
        <div>
            <div>
                <input className='user-search' type='text' value={searchinput} onChange={SearchChange} placeholder='Username' ></input>
                <button onClick={handleChange}>Search</button>
            </div>
            <div>
                <UserDetailsComponent user = {user} rep = {rep}/>
            </div>
        </div>
    )
}
   

  




export default Searchbar;