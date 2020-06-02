import React from "react"
import containerStyles from "./portfolioContainer.module.css"

export default function PortfolioContainer({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}