import React from 'react'

const UserRepoComponent = ({rep, loading}) => {
    if(loading){
        if (loading) {
        return <h2>Loading...</h2>;
    }
    }
    return (
        <div className='user-rep'>
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
        </div>
    );
}

export default UserRepoComponent;