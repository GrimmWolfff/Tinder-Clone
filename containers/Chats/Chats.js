import React from 'react'

import Header from '../Header/Header';
import Chat from './Chat/Chat';

export default function Chats() {
    return (
        <div>
            <Header backButton="/" />
            <Chat 
                username="Tako"
                img="https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-1/c0.120.720.720a/p720x720/248007805_1977015495809605_6904236899400048947_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=SgbN8b7V-vUAX9e35Pp&_nc_ht=scontent.fkut1-1.fna&oh=301382b32457a7f5f17b13069a22de8b&oe=61B04AB9"
                msg="hey!"
                time="1 min ago"
            />
            <Chat 
                username="Gigi"
                img=""
                msg="FUCK YOU"
                time="2 min ago"
            />
            <Chat 
                username="Lasha"
                img=""
                msg="YEA"
                time="1 day ago"
            />
        </div>
    )
}
