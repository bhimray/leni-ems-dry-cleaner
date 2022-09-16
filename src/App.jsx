import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/about';
import FAQ from './components/faq';
import Footer from './components/footer';
import Header from './components/header';
import Headlines from './components/headlines';
import Pricing from './components/pricing';
import Review from './components/review';
import Whyus from './components/why-us';
  

// class Scroll extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myRef1 = React.createRef();
//     this.myRef2 = React.createRef();
//     this.myRef3 = React.createRef();
//     this.myRef4 = React.createRef();
//   }
//   scrollSmooth(e, scroll) {
//     if (scroll === "sec1") {
//       this.myRef1.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     } else if (scroll === "sec2") {
//       this.myRef2.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     } else if (scroll === "sec3") {
//       this.myRef3.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     } else if (scroll === "sec4") {
//       this.myRef4.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     }
//   }
//   render() {
//     return (
//       <div className="container">
//         <ul className="list-group">
//           <li className="list" onClick={e => this.scrollSmooth(e, "sec1")}>
//             section1
//           </li>
//           <li className="list" onClick={e => this.scrollSmooth(e, "sec2")}>
//             section2
//           </li>
//           <li className="list" onClick={e => this.scrollSmooth(e, "sec3")}>
//             section3
//           </li>
//           <li className="list" onClick={e => this.scrollSmooth(e, "sec4")}>
//             section4
//           </li>
//         </ul>
//         <div className="row">
//           <div className="section1" ref={this.myRef1}>
//             <p>Section 1</p>
//           </div>
//           <div className="section2" ref={this.myRef2}>
//             <p>Section 2</p>
//           </div>
//           <div className="section3" ref={this.myRef3}>
//             <p>Section 3</p>
//           </div>
//           <div className="section4" ref={this.myRef4}>
//             <p>Section 4</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Scroll;



 const myRef1 = React.createRef();
 const myRef2 = React.createRef();
 const myRef3 = React.createRef();
 const myRef4 = React.createRef();

  scrollSmooth(e, scroll) {
  if (scroll === "header") {
    myRef1.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } else if (scroll === "headlines") {
    myRef2.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } else if (scroll === "review") {
    myRef3.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } else if (scroll === "about") {
    myRef4.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }else if (scroll === "pricing") {
    myRef4.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function App() {

  const [underline, setUnderline] = React.useState(false)

  React.useEffect(()=>{
    if (window.innerWidth<=600){
      // console.log(window.innerWidth)
      setUnderline(true);
    } else{
      setUnderline(false);
    }
  },[])
  console.log("app underline", underline)

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Header onClick={e => scrollSmooth(e, "header")}/>}/>
        <Route path="/headlines" element={ <Headlines nClick={e => scrollSmooth(e, "headlines")}/>}/>
        <Route path="/review" element={<Review onClick={e => scrollSmooth(e, "review")}/>}/>
        <Route path="/about" element={<About onClick={e => scrollSmooth(e, "about")}/>}/>
        <Route path="/pricing" element={<Pricing onClick={e => scrollSmooth(e, "pricing")}/>}/>
        <Route path="/whyus" element={<Whyus onClick={e => scrollSmooth(e, "whyus")}/>}/>
        <Route path="/faq" element={<FAQ onClick={e =>scrollSmooth(e, "faq")}/>}/>
        <Route path="/footer" element={<Footer onClick={e => scrollSmooth(e, "footer")}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
