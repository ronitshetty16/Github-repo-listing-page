
import React from 'react'

const UserDetailsComponent = ({ user, rep}) => {
  return(
    <div className='user-content'>
      <div className='user-info'>
        <img className='user-img' src={user.avatar_url} alt={user.avatar_url} />
        <h1 className='user-name'>{user.name}</h1>
        
      </div>
    </div>
  )
}
export default UserDetailsComponent;


