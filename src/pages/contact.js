import React from "react";
import Header from "../components/header";
import Container from "../components/container";
import Layout from "../components/layout";
import TootooLaptop from "../../content/assets/Tootoo_Asleep_Laptop.jpeg";
import { rhythm } from "../utils/typography";
import SEO from "../components/seo";
import { Icon, InlineIcon } from '@iconify/react';
import linkedinIcon from '@iconify/icons-cib/linkedin';
import mailIcon from '@iconify/icons-feather/mail';
import wavingHandMediumLightSkinTone from '@iconify/icons-emojione/waving-hand-medium-light-skin-tone';

export default function Contact(props) {
    
  return (
      <Layout location={props.location} title={props.siteTitle}>
      <SEO title="Jen Lindner"/>
      <Container>
      <div style={{ color: `navy` }}>
      <Header headerText="Contact" />
      <SEO title="Jen Lindner | Contact" />
      <p>I'd love to hear from you! <InlineIcon icon={wavingHandMediumLightSkinTone} height="24px"/></p>
        {/* <span>👋🏻</span></p> */}
      <p><InlineIcon icon={mailIcon} height="24px"/> <a href="mailto:jenlindner22@gmail.com"> Jenlindner22@gmail.com</a> | {` `}
      <InlineIcon icon={linkedinIcon} color="#0072b1" height="20px"/> <a href="https://www.linkedin.com/in/jen-lindner13/" target="_blank" rel="noopener noreferrer">Jennifer Lindner</a>
    {` `} </p>  
      <img src={TootooLaptop} alt="Tootoo" style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 20,
          minWidth: 10,
        }}/>
      <p> I'll get back to you as soon as Tootoo gets off my laptop! </p>
    </div>
    </Container>
    </Layout>
  )
}