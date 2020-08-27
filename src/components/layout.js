import React from "react";
import { Link } from "gatsby";
import styles from './layout.module.css';
import { rhythm, scale } from "../utils/typography";
import icon from "../../content/assets/letter-j-icon-png-26.png";
import { Icon, InlineIcon } from '@iconify/react';
import netlifyIcon from '@iconify/icons-logos/netlify';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header = (
    <h1
      style={{
        fontFamily: `Montserrat, sans-serif`,
        ...scale(1.2),
        // marginBottom: rhythm(1.5),
        marginTop: 0,
        padding: 0,
        boxShadow: `none`,
        color: `inherit`,
        }}
       >
         Welcome to Jen's World!
    </h1>
  )
  
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
   <header style={{ marginBottom: `1.5rem`}}>
        <Link to="/">
          <img src={icon} className={styles.homeButton}></img>
        </Link>
        <ul className={styles.rightLinks}>
          <ListLink to="/portfolio">Portfolio</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      <main style={{ margin: 0, padding: 0}}>{children}</main>
      <br></br>
      <footer style={{ color: `navy`, textAlign: `center`}}>
       Copyright © {new Date().getFullYear()} Jennifer Lindner. All rights reserved.
       <p> Built with <a href="https://www.gatsbyjs.org">Gatsby</a> and hosted on Netlify <Icon icon={netlifyIcon} />
       </p>
      </footer>
    </div>
  )
}

export default Layout
