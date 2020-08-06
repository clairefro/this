import React from "react"
import { HelmetProvider } from "react-helmet-async"
import { Link } from "gatsby"

import "../global.css"

const Layout = ({ children }) => {
  return (
    <>
      <HelmetProvider>
        <Link
          to="/"
          className="text-4xl fixed left-0 top-0"
          style={{ background: "rgba(255, 198, 92, 0.8)" }}
        >
          this
        </Link>
        <div className="mt-24">{children}</div>
      </HelmetProvider>
    </>
  )
}

export default Layout
