import React from 'react'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';

export default function Chat({ username, img, msg, time }) {
    return (
        <Link to={`/chat/${username}`}>
            <div className="Chat">
                <Avatar className="chatImg" src={img} alt="" />
                <div className="chatDetails">
                    <h2>{username}</h2>
                    <p>{msg}</p>
                </div>
                <p className="lastSeen">{time}</p>
            </div>
        </Link>
    )
}
