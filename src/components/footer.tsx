
import "../styles/footer.css"

import Logo from "../images/logo.svg";

export default function Container5(){
  return(
    <footer className="pageFooter">
      <div className="pageFooter--wrapper">
        <div className="pageFooter--left">
          <a className="pageFooter--left-logo" href="/" style={{textDecoration:"none", textTransform:"uppercase"}}>
            <span className="">Leni Em's</span>
          </a>
        </div>
        <div className="pageFooter--right">
          <div className="pageFooter--right-topLine" onClick={()=> window.scrollTo({top:0,behavior:'smooth'})}>
              <a href="/"className="return" style={{textDecoration:"none", textTransform:"uppercase"}}>
                <span className="full btn2">Return to top</span>
              </a>
          </div>
          
          <div className="pageFooter--right-section">
            <div className="wrapper" role="presentation">
              <li className="list-li">
                <div className="title">Call Us</div>
                <ul className="section" role="presentation">
                  <li>
                    <div role="listitem">(817) 292-6861</div>
                  </li>
                </ul>
              </li>
              
              <li className="list-li">
                <div className="title">Address</div>
                <ul className="section" role="presentation">
                  <li>
                    <div role="listitem">3324</div>
                  </li>
                  <li>
                    <div role="listitem">2020 Altamesa Blvd Ste A,</div>
                  </li>
                  <li>
                    <div role="listitem">Fort Worth, TX 76134,</div>
                  </li>
                  <li>
                    <div role="listitem">United States</div>
                  </li>
                </ul>
              </li> 
              <li className="list-li">
                <div className="title">Map</div>
                <ul className="section" role="presentation">
                  <li>
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=leni%20em's%20dry%20cleaner&t=&z=17&ie=UTF8&iwloc=&output=embed">
                    </iframe>
                  </li>
                </ul>
              </li>  
            </div>
          </div>
        </div>
      </div>
      <div className="pageFooter--branding-logo">
        <span className="pageFooter--branding-copyright"> @ copyright to Leni Em's Dry Cleaner</span>
      </div>
    </footer>
  )
}
