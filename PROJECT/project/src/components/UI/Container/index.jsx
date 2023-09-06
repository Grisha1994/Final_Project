import React from 'react'
import s from './style.module.css'
// import { motion } from "framer-motion"
// import { useContext } from 'react';
// import context from '../../../store/context/context';

export default function Container({children, className}) {

  // const {isActiveMenu} = useContext(context);

  return (
    // <motion.div
    // initial={isActiveMenu ?  { x: 0, opacity: 0 }: { x: 1000, opacity: 0 }}
    // animate={isActiveMenu ? { x: 0, opacity: 1} : { x: 0, opacity: 1}}
    // transition={isActiveMenu ? {duration: 0 } : {duration: 0.8 }}
    // exit={isActiveMenu ?  { x: 0, opacity: 0 } : { x: -1000, opacity: 0 }}
    // >
    //   <div className={[s.container, className].join(' ')}>
    //     {children}  
    //   </div>
    // </motion.div>

    <div className={[s.container, className].join(' ')}>
      {children}  
    </div>
  )
}
