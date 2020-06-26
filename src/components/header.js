import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '97rem',
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <h3>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <div style = {{
                      display: 'flex',
                      marginLeft: 'auto'}}>
        <h3 style = {{padding: '0 1rem'}}>
          <a href="https://drive.google.com/file/d/1yddVj5bxMoCcS40f4uoNhK_YJJx737un/view" target="_blank" rel="noopener norefferer">
            resume
          </a>
        </h3>
          
        <h3 style = {{padding: '0 1rem'}}>
          <a href="https://www.linkedin.com/in/nurinfazil/" target="_blank" rel="noopener norefferer">
            linkedin
          </a>
        </h3>

        <h3 style = {{padding: '0 1rem'}}>
          <a href="https://github.com/nurinfazil" target="_blank" rel="noopener norefferer">
            github
          </a>
        </h3>

        <h3 style = {{padding: '0 0 0 1rem'}}>
          <a href="mailto:nurinfazil@hotmail.com" target="_blank" rel="noopener norefferer">
            email
          </a>
        </h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
