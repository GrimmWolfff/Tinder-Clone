//TODO: Edit Profile Page
//TODO: ADD IMAGES
//TODO: Buttons functionality
//TODO: Chat Pages

import React from 'react';
import Link from 'next/link';
import { getSession, useSession } from 'next-auth/react';
import { connectToDatabase } from '../utils/mongodb.js';
import TinderCard from 'react-tinder-card';
import SwipeButtons from '../containers/SwipeButtons';

import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function Home({ users }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/home');
    }
  });

  return (
    <div>
      <div className="inline-flex">
        <Link href={`/profile/${users.filter(user => user.email == session.user.email)[0]._id}`}>
          <a>
            <IconButton> <PersonIcon fontSize="large" /> </IconButton>
          </a>
        </Link>
          <img src="https://cdn.discordapp.com/attachments/915311317311684608/917077570116255764/263442897_1100252117401647_5236937027213155481_n.jpg" 
          alt="Image not found" style={{"width":"150px"}}/>
          <Link href="/chat">
            <IconButton>
              <ForumIcon />
            </IconButton>
          </Link>
      </div>

      <div className="flex">
        {users.map((user, idx) => (
          <TinderCard
          className="swipe"
          key={idx}
          preventSwipe={['up', 'down']} >
              <div style={{ "backgroundImage": `url('${user.image}')` }} className="card">
                  <h3> { user.name } </h3>
              </div>
          </TinderCard>
          
        ))}
      </div>
      <SwipeButtons />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const users = await db.collection("users").find().toArray();
  const session = await getSession(context);
  if(!session) {
      return {
          permanent: false,
          destination: '/home'
      }
  }
  return { props: {
      session,
      users: users.map((user) => ({
          _id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image
      })),
  } }
}