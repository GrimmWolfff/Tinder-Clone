import React, { useState } from 'react';

import { IconButton, Avatar, Input, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            username: 'tako',
            image: '...',
            message: 'Hey!'
        },
        {
            message: 'Where you at?'
        }
    ])
    return (
        <div className="chatScreen">
            <IconButton onClick={() => navigate('/chat')}> <ArrowBackIosIcon fontSize="large" /> </IconButton>
            <p className="time">YOU MATCHED WITH TAKO ON 01/01/2021</p>
            
            {messages.map(msg => (
                msg.username ? 
                (<div className="chatScreen_msg">
                    <Avatar 
                        className="chatScreen_img"
                        src={msg.image}
                        alt=""
                    />
                    <p className="chatScreen_text">{msg.message}</p>
                </div>) :
                (
                    <div className="chatScreen_msg">
                        <p className="chatScreen_textUser">{msg.message}</p>
                    </div>
                )
            ))}
            <form className="userForm">
                <Input placeholder="Type a message" className="text_input" />
                <Button>Send</Button>
            </form>
        </div>
    )
}
