import React, {useState} from 'react'

const Searchbar = () => {

    const [search,setSearch] = useState('');

    const SearchChange = (e)=>{
        setSearch(e.target.value);
    }




    return (
        <div>
            <form>
                <input className='user-search' type='text' onChange={SearchChange} placeholder='Username' ></input>
            </form>
        </div>
    )
}


export default Searchbar;