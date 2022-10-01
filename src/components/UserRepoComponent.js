import React from 'react'

const UserRepoComponent = ({rep}) => {
    
    return (
        <div className='user-rep'>
            {rep.map(repo => (
                <div className="repo" key={repo.name}>
                    <div className="item" onClick={repo.html_url} target={repo.html_url}>
                        <div className="content">
                            <a href={repo.html_url} target={repo.html_url} className="header" >
                            {repo.name}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserRepoComponent;


