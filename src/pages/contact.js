import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Layout from "../components/layout"
import TootooLaptop from "../../content/assets/Tootoo_Asleep_Laptop.jpeg"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"

export default function Contact(props) {
    
  return (
      <Layout location={props.location} title={props.siteTitle}>
      <SEO title="Jen Lindner" />
      <Container>

      {/* {props.title} */}
      <div style={{ color: `navy` }}>
      <Header headerText="Contact" />
      <SEO title="Jen Lindner | Contact" />
      <p>I'd love to hear from you! <span>👋🏻</span></p>
      <p>Email: <a href="mailto:jenlindner22@gmail.com">Jenlindner22@gmail.com</a> | {` `}
      {/* <p>LinkedIn: <a href="https://www.linkedin.com/in/jen-lindner13/" target="_blank" rel="noopener noreferrer">Jennifer Lindner </a> {` `} </p> */}
      LinkedIn: <a href="https://www.linkedin.com/in/jen-lindner13/" target="_blank" rel="noopener noreferrer">Jennifer Lindner </a> {` `} </p> 
      <img src={TootooLaptop} alt="Tootoo" style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 20,
          // maxWidth: `65%`,
          minWidth: 10,
          // borderStyle: `inset`,
          // borderRadius: `30%`,
        }}/>
      <p> I'll get back to you as soon as Tootoo gets off my laptop... </p>
    </div>
    </Container>
    </Layout>
  )
}