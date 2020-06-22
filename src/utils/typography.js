// import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"

import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'
moragaTheme.headerWeight = '400'


const typography = new Typography(moragaTheme)
// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//   }
// }

// delete Wordpress2016.googleFonts

// const typography = new Typography(Wordpress2016)

// const typography = new Typography({
//   baseFontSize: '18px',
//   baseLineHeight: 1.666,
//   headerFontFamily: ['Lora', 'Domine', 'Helvetica Neue', 'Segoe UI', 'Arial', 'sans-serif'],
//   bodyFontFamily: ['Bree Serif', 'Droid Serif'],
// })

// Output CSS as string.
// typography.toString()

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
