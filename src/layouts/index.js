import React from "react"
import { HelmetProvider } from "react-helmet-async"
import { Link } from "gatsby"

import "../global.css"

const Layout = ({ children }) => {
  return (
    <>
      <HelmetProvider>
        <Link to="/" className="text-4xl">
          this
        </Link>
        {children}
      </HelmetProvider>
    </>
  )
}

export default Layout
