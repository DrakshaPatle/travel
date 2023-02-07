import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'
import Footer from './Footer'
import './Home.css'

function Home(props) {
    const user = {
        name: "draksha",
        email: "drakshapatle15@gmail.com",
    };
    // const user = props.auth.user;
    const [journeys, setJourneys] = useState(
        [
            {
                "title": "title",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem necessitatibus velit officia, alias, repellendus consectetur eaque ea at facilis dolore aut laboriosam corrupti maxime nesciunt reprehenderit hic animi id earum aliquam fuga. Ad officiis modi explicabo iusto obcaecati dignissimos accusamus. Voluptas ullam consequatur beatae dolorem quod provident impedit quia laborum!",
                "image": "https://source.unsplash.com/random/journey",
                "date": "29 January 2023",
            },
            {
                "title": "title 2",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem necessitatibus velit officia, alias, repellendus consectetur eaque ea at facilis dolore aut laboriosam corrupti maxime nesciunt reprehenderit hic animi id earum aliquam fuga. Ad officiis modi explicabo iusto obcaecati dignissimos accusamus. Voluptas ullam consequatur beatae dolorem quod provident impedit quia laborum!",
                "image": "https://source.unsplash.com/random/trees",
                "date": "29 January 2023",
            },
            {
                "title": "title 2",
                "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem necessitatibus velit officia, alias, repellendus consectetur eaque ea at facilis dolore aut laboriosam corrupti maxime nesciunt reprehenderit hic animi id earum aliquam fuga. Ad officiis modi explicabo iusto obcaecati dignissimos accusamus. Voluptas ullam consequatur beatae dolorem quod provident impedit quia laborum!",
                "image": "https://source.unsplash.com/random/city",
                "date": "29 January 2023",
            },
        ]
    );

    return (
        <>
            <Nav />
{/* 
            <h1>
                Hello {user.name}
            </h1> */}

            {journeys.map((journey) => (
                <div className="image-card" >
                    <div className="image-container">
                        <div className="title">
                            {journey.title}
                        </div>
                        <img src={journey.image} alt="" />
                    </div>
                    <div className="date">{journey.date}</div>
                    <div className="description">
                        {journey.description}
                    </div>
                </div>
            ))}
            <Footer />
        </>
    )
}


export default Home;
