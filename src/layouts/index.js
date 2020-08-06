import React from "react"
import { HelmetProvider } from "react-helmet-async"
import { Link } from "gatsby"

import "../global.css"

const Layout = ({ children }) => {
  return (
    <>
      <HelmetProvider>
        <Link to="/">this</Link>
        {children}
      </HelmetProvider>
    </>
  )
}

export default Layout
