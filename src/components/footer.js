import * as React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteAuthor, twitterLink }) => (
  <footer
    style={{
      marginTop: `1rem`,
      background: `#202f55`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <p
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        © {new Date().getFullYear()} Created By {siteAuthor}{" "}
        <a
          style={{
            color: `white`,
            textDecoration: `underLine`,
          }}
          href={twitterLink}
          target="_blank"
          rel="nofollow noreferrer"
        >
          @twitter
        </a>
      </p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string,
  twitterLink: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: ``,
  twitterLink: ``,
}

export default Footer
