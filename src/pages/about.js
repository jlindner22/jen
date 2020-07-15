import React from 'react';
import styles from './about.module.css';
import Container from '../components/container';
import deck from "../../content/assets/deck.jpeg";
import SEO from "../components/seo";
import { Helmet } from 'react-helmet';

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
        <Container>
            <SEO title="Jen Lindner | Home" />
                {/* <h1 style={{ color: `#007ACC` }}>About Me</h1> */}
                <h1 className={styles.greeting}>Hi, I'm Jen Lindner!</h1>  
                <div style={{ paddingTop: `1.1rem`, marginLeft: `80px`}}>
                <svg id="linkedin" width="180" height="60" fill="#0072b1" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" stroke-miterlimit="1.414">
                    <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero">
                    </path>
                    <a href="https://www.linkedin.com/in/jen-lindner13/" target="_blank" rel="noopener noreferrer">
                        <text x="22" y="14" fill="dodgerblue" fontSize="17">Jennifer Lindner</text>
                    </a>
                </svg> 
                <svg id="github" width="180" height="60" fill="#211F1F" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                    <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8">
                    </path>
                    <a href="https://github.com/jlindner22" target="_blank" rel="noopener noreferrer">
                        <text x="22" y="14" fill="dodgerblue" fontSize="17" >Jlindner22</text>
                    </a>
                </svg> 
                </div>       
                <br></br>                
                <User 
                excerpt="I'm an enthusiastic jigsaw puzzle solver, chocolate consumer, standup comedy fan, shower singer, and aspiring software engineer.
                After graduating from Colgate University with a BA in Psychology and working in Human Resources, I realized that I wanted to focus on a more technology-based career. I completed Flatiron School's Immersive Software Engineering program in New York City, where I learned how to build projects in Ruby on Rails, JavaScript, React, and Redux.
                "
                avatar={deck}
                />
                <br></br>                
                <p style={{ color: `navy`, textAlign: `justify`, marginRight: `-20px`}}>I'm currently studying up on algorithms and Python, and I'm starting to build my first project in Python!
                I also have a maltipoo named Tootoo who loves to code with me (or step on my keyboard, either works) - try to tell us apart!</p>
                <br></br>
                <h2 style={{ color: `#007ACC`}}>My Technical Skills</h2>
                <div style={{ color: `navy`, textAlign: `left` }}>
                    <li> JavaScript </li>
                    <li> React </li>
                    <li> Redux </li>
                    <li> Ruby on Rails </li>
                    <li> Python </li>
                    <li> HTML </li>
                    <li> CSS </li>
                    </div>
                    <br></br>
                    <div style={{ color: `navy`, textAlign: `center`, fontWeight: `bold`, textDecoration: `none` }}>
                    <a href="https://www.linkedin.com/in/jen-lindner13/" target="_blank" rel="noopener noreferrer"><h3 style={{ color: `#007ACC`}}> Let's connect! </h3></a>
                </div>
            </Container>
        </div>
    )
}