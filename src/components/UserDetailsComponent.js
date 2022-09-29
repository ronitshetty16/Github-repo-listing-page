
import React from 'react'

const UserDetailsComponent = ({user}) => {
  return(
    <div className='user-content'>
      <div className='user-upper'>
        <div className='user-info'>
          <div className='dp'>
            <img className='user-img' src={user.avatar_url} alt={user.avatar_url} />
          </div>
          <a href={user.html_url}>{user.html_url}</a>
        </div>
        <div className='user-profile'>
          <h1 className='user-name'>{user.name}</h1>
          {(() => {
            const bio = [];
            if(user.bio){
              bio.push(<p>{user.bio}</p>)
            }
            return bio;
          })()}
          {(() => {
            const loc=[]
            if(user.location){
              loc.push(<p className='user-loc'>{user.location}</p>)
            }
            return loc;
          })()}
          {(() => {
            const twitter = []
            if(user.twitter_username){
              twitter.push(<p>Twitter : <a href={`https://twitter.com/${user.twitter_username}`}>https://twitter.com/{user.twitter_username}</a></p>)
            }
            return twitter
          })()}
        </div>
      </div>
      {/* <div className='user-rep'>
        {rep.map(repo => (
              <div className="repo" key={repo.name}>
                <div className="item">
                  <div className="content">
                    <a href={repo.html_url} className="header" >
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
      </div> */}
    </div>
  )
}
export default UserDetailsComponent;


