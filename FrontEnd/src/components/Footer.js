import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{ height: "17rem", backgroundColor: "silver" }}>
      <div className="footerContainer">
        <div className="topfooter">
          <button>
            <span>Vietnam</span>
            <span>English en</span>
            <span id="fixed">$ USD</span>
          </button>
          <div className="iconfooter">
            <div><a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Facebook_circle_pictogram.svg/1200px-Facebook_circle_pictogram.svg.png" style={{ width: "2rem" }}></img></a></div>
            <div><a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Skype-for-Business.svg/1024px-Skype-for-Business.svg.png" style={{ width: "2rem" }}></img></a></div>
            <div><a href="/"><img src="https://i.pinimg.com/originals/b4/14/76/b414768e7af1948afcbafb9bd4b0fd12.png" style={{ width: "2rem" }}></img></a></div>
            <div><a href="/"><img src="https://images.vexels.com/media/users/3/137425/isolated/preview/f2ea1ded4d037633f687ee389a571086-youtube-icon-logo-by-vexels.png" style={{ width: "2rem" }}></img></a></div>
          </div>
          <div id="phonefooter">
            <div><a href="/"><img src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/apple-512.png" style={{ width: "2rem" }}></img></a></div>
            <div><a href="/"><img src="https://i.pinimg.com/originals/bf/21/3c/bf213c055e91878b3ce99fbcef7d8c36.png" style={{ width: "2rem" }}></img></a></div>
          </div>
          <div id="airjordandior">
            <div><a href="https://www.youtube.com/watch?v=3Lf3bbYcNd4&ab_channel=ChristianDior">New Air Jordan x Dior</a></div>
          </div>
        </div>
        <div className="underfooter">
          <div className="leftunder">
            <div className="top">
              <div id="helpfixed"><a href="/">HELP</a></div> 
              <div><a href="/">HOW IT WORKS</a></div>
              <div><a href="/">REVIEWS</a></div>
              <div><a href="/">PRIVACY</a></div>
              <div><a href="/">TERMS</a></div>
              <div><a href="/">JOBS</a></div>
              <div><a href="/">CONTACT</a></div>
              <div><a href="/">PRODUCT SUGGESTION</a></div>
              <div><a href="/">PRESS</a></div>
              <div><a href="/">ACCESSIBILITY STATEMENT</a></div>
            </div>
            <div className="bottom">
              <div><a href="/">IT</a></div>
              <div><a href="/">DE</a></div>
              <div><a href='/'>FR</a></div>
              <div><a href='/'>ZH</a></div>
              <div><a href="/">JA</a></div>
            </div>
          </div>
          <div className="rightunder">
            <div>©2020 StockX. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
