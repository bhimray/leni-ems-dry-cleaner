import * as React from 'react';
import '../styles/header.css'
import {motion, Variants, useAnimation} from "framer-motion"
import menuUnfold from '../images/menu-unfold.svg'
import Nav from './nav';
import {NavLink} from 'react-router-dom'

const itemVariants: Variants = {
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


export interface header {
 
}

export default function Header (props: header) {
  
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
  const seizeBody=()=>{
    if (menu){
      document.body.style.position='fixed'
    }
  }
  const changeScrollState=(event:any)=>{
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
          <motion.li variants={itemVariants}>About</motion.li>
          <motion.li variants={itemVariants}>Pricing</motion.li>
          <motion.li variants={itemVariants}>Why Us?</motion.li>
          <motion.li variants={itemVariants}>FAQ</motion.li>
        </motion.ul>
      </motion.nav> 
    </div>
  );
}
