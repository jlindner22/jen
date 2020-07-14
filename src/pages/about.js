import React from 'react'
import styles from './about.module.css'
import Container from '../components/container'
import deck from "../../content/assets/deck.jpeg"
import SEO from "../components/seo"
import { Helmet } from 'react-helmet'

const User = props => (
    <div className={styles.user}>
        <div>
        <img src={props.avatar} className={styles.avatar} alt="Jen and Tootoo" />
        </div>
        <br></br>
        <div>
        <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default function About() {
    return (
        <div>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Helmet>
        {/* <svg width="200" height="200">
            <circle 
            cx="100" cy="100" 
            r="40" stroke="green" stroke-width="8" fill="yellow" />
        </svg> */}
        <Container>
            <SEO title="Jen Lindner | Home" />
        {/* <svg width="400" height="180">
            <rect x="50" y="20" width="150" height="150" fill="blue" stroke="pink" stroke-width="5" fillOpacity="0.1" strokeOpacity="0.4" />
        </svg> */}
        {/* rounded corners use rx and ry */}
        {/* <svg width="400" height="180">
            <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
            style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
        </svg> */}
                {/* <h1 style={{ color: `#007ACC` }}>About Me</h1> */}
                <h1 className={styles.greeting}>Hi, I'm Jen Lindner!</h1>   
                <br></br>
                <svg id="github" width="400" height="100" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                    <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8">
                    </path>
                    <text x="22" y="15" fill="navy" fontSize="15"><a href="https://github.com/jlindner22" target="_blank" rel="noopener noreferrer">jlindner22</a></text>
                </svg>         
                <br></br>                
                <User 
                excerpt="I'm an enthusiastic jigsaw puzzle solver, chocolate consumer, standup comedy fan, shower singer, and aspiring software engineer.
                After graduating from Colgate University with a BA in Psychology and working in Human Resources, I realized that I wanted to focus on a more technology-based career. I completed Flatiron School's Immersive Software Engineering program in New York City, where I learned how to build projects in Ruby on Rails, JavaScript, React, and Redux.
                "
                avatar={deck}
                />
                <br></br>                
                <p style={{ color: `navy`, textAlign: `justify`, marginRight: `-20px`}}>I'm currently studying up on algorithms and Python, and I'm looking forward to building my first project in Python!
                I also have a maltipoo named Tootoo who loves to code with me (or step on my keyboard, either works) - try to tell us apart!</p>
                <br></br>
                <h2 style={{ color: `navy`}}>My Technical Skills</h2>
                <div style={{ color: `navy`, textAlign: `left` }}>
                    <li> JavaScript </li>
                    <li> React </li>
                    <li> Redux </li>
                    <li> Ruby on Rails </li>
                    <li> Python </li>
                    <li> HTML </li>
                    <li> CSS </li>
                    {/* <ul> ...and I'm currently learning Python!</ul> */}
                    </div>
                    <br></br>
                    {/* <svg height="30" width="200" >
                            <text x="0" y="15" fill="red">I love SVG!</text>
                    </svg>

                    <svg height="120" width="120">
                        <defs>
                            <filter id="f1" x="0" y="0" width="200%" height="200%">
                            <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
                            <feBlend in="SourceGraphic" in2="offOut" mode="normal" />
                            </filter>
                        </defs>
                        <rect width="90" height="90" stroke="green" strokeWidth="3"
                        fill="yellow" filter="url(#f1)" />
                    </svg>
                    <svg height="150" width="400">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgb(255,255,0)" stopOpacity="1" />
                            <stop offset="100%" stopColor="rgb(255,0,0)" stopOpacity="1" />
                            </linearGradient>
                        </defs>

                        <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
                        <text x="150" y="75" fill="white" fontSize="24" fontWeight="bold">I love SVG!</text>

                    </svg> */}

                    <div style={{ color: `navy`, textAlign: `center`, fontWeight: `bold`, textDecoration: `none` }}>
                    <a href="https://www.linkedin.com/in/jen-lindner13/" target="_blank" rel="noopener noreferrer"><h3 style={{ color: `#007ACC`}}> Let's connect! </h3></a>
                </div>
            </Container>
        </div>
    )
}