import React from 'react'

export default function Navigation() {
  return (
    <div className='flex justify-around'>
        <div className="logo">
            Connect
        </div>
        <div className="searchbar">
            <input type="search" />
        </div>
        <div className="new-post">
            New Post
        </div>
        <div className="home">
            Home
        </div>
        <div className="quizes">
            Quizes
        </div>
        <div className="peers">
            Peers
        </div>
        <div className="library">
           Library
        </div>
        <div className="message">
            Message
        </div>
        <div className="notification">
            Notification
        </div>
        <div className="me">
            Me
        </div>
        
    </div>

  )
}
