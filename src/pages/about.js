import React from 'react'
import styles from './about.module.css'
import Container from '../components/container'
import Layout from "../components/layout"
// import PG from "../../content/assets/PG2015.jpeg"
// import TootooTable from "../../content/assets/TootooTable.jpeg"
import deck from "../../content/assets/deck.jpeg"
import SEO from "../components/seo"

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
        <Layout>
            <SEO title="Jen Lindner | About" />
            <Container>
                <h1 style={{ color: `navy` }}>About Me</h1>
                <br></br>                
                <h2 className={styles.greeting}>Hi, I'm Jen Lindner!</h2>            
                <br></br>                
                <br></br>                
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
                <h2 style={{ color: `navy`}}>My Technical Skills</h2>
                <div style={{ color: `navy`, textAlign: `left` }}>
                    <li> JavaScript </li>
                    <li> React </li>
                    <li> Redux </li>
                    <li> Ruby on Rails </li>
                    <li> HTML </li>
                    <li> CSS </li>
                    <ul> ...and I'm currently learning Python!</ul>
                    </div>
                    <div style={{ color: `navy`, textAlign: `center`, fontWeight: `bold`, textDecoration: `none` }}>
                    <a href="https://www.linkedin.com/in/jen-lindner13/" target="_blank" rel="noopener noreferrer"><h4> Let's connect! </h4></a>
                </div>
            </Container>
        </Layout>
    )
}