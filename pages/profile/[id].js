import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Alert }from '@mui/material';

export default function Profile() {
    const router = useRouter();
    const { data: session } = useSession();
    const [CurrentName, setCurrentName] = useState('');
    const [SaveButton, showSaveButton] = useState(false);
    const [Success, ShowSuccess] = useState(false);
    function handleUsernameChange(e) {
        if(e.target.value) {
            setCurrentName(e.target.value);
            showSaveButton(true);
        }else {
            showSaveButton(false);
        }
    }
    async function handleSubmit() {
        const response = await fetch(`/api/users/${router.query.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: CurrentName
            })
        })
        ShowSuccess(true);
    }
    return (
        <div>
            <Alert severity="success" style={{ "display" : `${Success ? '' : 'none'}` }}>Your username has successfully been changed</Alert>
            <p>Logged in as {session?.user?.name}</p>
            
            <input placeholder='Username...' defaultValue={CurrentName} 
            onChange={e => handleUsernameChange(e)} />
            <button onClick={() => handleSubmit()} style={ {"display": `${SaveButton ? '' : 'none'}`} }>Save</button>
        </div>
    )
}
