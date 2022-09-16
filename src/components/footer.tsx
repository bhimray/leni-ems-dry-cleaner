
import "../styles/footer.css"

import Logo from "../images/logo.svg";

export default function Container5(){
  return(
    <footer className="pageFooter">
      <div className="lock">
        <div className="pageFooter--wrapper">
          <div className="pageFooter--left">
            <a className="pageFooter--left-logo" href="/">
              <span className="pageFooter--branding-logo">Leni Em's</span>
            </a>
          </div>
          <div className="pageFooter--right">
            <div className="pageFooter--right-topLine" onClick={()=> window.scrollTo({top:0,behavior:'smooth'})}>
                <a href="/"className="return">
                  <span className="full">Return to top</span>
                </a>
            </div>
            <hr/>
            <div className="pageFooter--right-links">
              <div>
                <ul className="wrapper" role="presentation">
                  <li className="list-li">
                    <div className="title">About</div>
                    <ul className="section" role="presentation">
                      <li>
                          <a href="/privacy_policy" role="listitem">Contact us</a>
                      </li>
                      <li>
                          <a role="listitem">Location</a>
                      </li>
                      <li>
                          <a role="listitem">Our Services</a>
                      </li>
                    </ul>
                  </li>
                  <hr/>
                  <li className="list-li">
                    <div className="title">Our Company</div>
                    <ul className="section" role="presentation">
                      <li>
                          <a href="/privacy_policy" role="listitem">Customer Reviews</a>
                      </li>
                      <li>
                          <a role="listitem">Careers</a>
                      </li>
                      <li>
                          <a role="listitem">Student Discounts</a>
                      </li>
                    </ul>
                  </li>  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pageFooter--branding-log">
          <span className="pageFooter--branding-copyright"> @ copyright to Leni Em's Dry Cleaner</span>
        </div>
      </div>
    </footer>
  )
}
