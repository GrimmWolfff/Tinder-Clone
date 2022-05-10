import { connectToDatabase } from '../utils/mongodb';
import React from 'react'

import TinderCard from 'react-tinder-card';
import Header from './Header';

import SwipeButtons from './SwipeButtons';

function TinderCards({ people }) {
    console.log(people)
    return (
        <>
            <Header />
            <div className="flex">
                {/* {
                    people.map((person, idx) => (
                        <TinderCard
                        className={styles.swipe}
                        key={person.name}
                        preventSwipe={['up', 'down']} >
                            <div style={{ "backgroundImage": `url(${person.url})` }} className={styles.card}>
                                <h3> { person.name } </h3>
                            </div>
                        </TinderCard>
                    ))
                } */}
                <SwipeButtons className="SwipeButtons" />
            </div>            
        </>
    )
}

export default TinderCards;

