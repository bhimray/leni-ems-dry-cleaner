import * as React from 'react';
import '../styles/header.css'
import {motion, Variants, useAnimation} from "framer-motion"
import menuUnfold from '../images/menu-unfold.svg'
import Nav from './nav';
import About from './about';
import FAQ from './faq';
import Footer from './footer';
import Headlines from './headlines';
import Pricing from './pricing';
import Review from './review';
import Whyus from './why-us';
  

const itemVariants={
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { 
    opacity: 0, 
    y: 0,
    transition: { duration: 1 } 
  }
};


const myRef1 = React.createRef();
const myRef2 = React.createRef();
const myRef3 = React.createRef();
const myRef4 = React.createRef();
const myRef5 = React.createRef();
const myRef6 = React.createRef();
const myRef7 = React.createRef();
const myRef8 = React.createRef();

 const scrollSmooth=(scroll)=>{
 if (scroll === "about") {
   myRef1.current.scrollIntoView({
     behavior: "smooth",
     block: "start"
   });
 } else if (scroll == "pricing") {
   myRef2.current.scrollIntoView({
     behavior: "smooth",
     block: "start"
   });
 } else if (scroll == "whyus") {
   myRef3.current.scrollIntoView({
     behavior: "smooth",
     block: "start"
   });
 } else if (scroll == "faq") {
   myRef4.current.scrollIntoView({
     behavior: "smooth",
   });
 }else if (scroll === "headlines") {
   myRef5.current.scrollIntoView({
     behavior: "smooth",
     block: "start"
   });
 }else if (scroll === "header") {
   myRef6.current.scrollIntoView({
     behavior: "smooth",
     block: "start"
   });
 }else if (scroll === "review") {
   myRef7.current.scrollIntoView({
     behavior: "smooth",
     block: "start"
   });
 }else if (scroll === "footer") {
   myRef8.current.scrollIntoView({
     behavior: "smooth",
     block: "start"
   });
 }
}

export default function Header () {
  
  const [scrolled, setScrolled] = React.useState(false)
  const [menu, setMenu] = React.useState(true)
  React.useEffect(()=>{
    if (menu==false){
      document.body.style.position='fixed'
    }else{
      document.body.style.position='relative'
    }
    console.log('useEffect menu', menu)
  }, [menu])

  // const seizeBody=()=>{
  //   if (menu){
  //     document.body.style.position='fixed'
  //   }
  // }

  const changeScrollState=(event)=>{
    // console.log(event.currentTarget.scrollY)
    if (window.scrollY>0 && menu==true){
      // console.log('menu', menu)
      // console.log("header SCROLLY",window.scrollY);
      setScrolled(true);
    }
    else if (window.scrollY<=0){
      // console.log('menufalse', menu)
      setScrolled(false);
    }
  }
  window.addEventListener("scroll", changeScrollState)

  const moveLogo = useAnimation()
  React.useEffect(() => {
  moveLogo.start({
    x:2,
    y:-2,
    transition: { type: "spring", stiffness: 300, duration: 0.5 },
  })
  }, [scrolled])

  const moveShadow = useAnimation()
  React.useEffect(() => {
  moveShadow.start({
    x:-2,
    y:2,
    transition: { type: "spring", stiffness: 300, duration: 0.5 },
  })
  }, [scrolled])

  return (
    <>
      <div className={scrolled? "us-nav scrolled":"us-nav"}>
        <div className="logo-wrapper">
          <motion.h1 animate={moveLogo} className='logo'>Leni Em's Dry Cleaner</motion.h1>
          <motion.div  animate={moveShadow}className='logo-shadow'></motion.div>
          {menu ? <Nav onClick = {()=>{setMenu(!menu); console.log(menu,'inline menu true position')}}/> :<img src={menuUnfold} onClick = {()=>{setMenu(!menu); console.log(menu,'inline menu false position')}} className='menu'/>}
        </div>
        <motion.nav 
        initial={false}
        animate={menu? 'closed':'open'}
        className='nav'>
          <motion.ul 
          variants={{
            open:{
              y:100,
              transition:{
                type: "spring",
                bounce: 0.1,
                duration: 1,
                delayChildren: 0.5,
                staggerChildren: 0.1
              }
            },
            closed:{
              y:-100,
              transition:{
                type: "spring",
                bounce: 0.2,
                duration: 1
              }
            }
          }}
          className={menu? "no-drop-down":"drop-down"}>
            <motion.li variants={itemVariants}  onClick={()=> {
              scrollSmooth('about')
              setMenu(!menu)
            }
            }>About</motion.li>
            <motion.li variants={itemVariants}  onClick={()=> {
              scrollSmooth('pricing')
              setMenu(!menu)
            }}>Pricing</motion.li>
            <motion.li variants={itemVariants}   onClick={()=> {
              scrollSmooth('whyus')
              setMenu(!menu)
            }}>Why Us?</motion.li>
            <motion.li variants={itemVariants}   onClick={()=> {
              scrollSmooth('faq')
              setMenu(!menu)
            }}>FAQ</motion.li>
          </motion.ul>
        </motion.nav> 
      </div>
      <Headlines/>
      <Review/>
      <About ref={myRef1}/>
      <Pricing ref={myRef2}/>
      <Whyus ref={myRef3}/>
      <FAQ ref={myRef4}/>
      <Footer/>
    </>
  );
}
