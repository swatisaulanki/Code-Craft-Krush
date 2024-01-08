import React from 'react'
import styles from "./Courses.module.css";
import learnshm from "../Courses/learnhm.PNG";
import learnc from "../Courses/learnc.jpg";
import fullstack from "../Courses/fullstack.jpg";
import dsa from "../Courses/dsa.jpg"
const Courses = () => {
  return (
    <>
    <div className={styles.container}>
    <div>
        <h1>Our Courses</h1>
    </div>
   
    <div className={styles.mainc}>
    
      <div className={styles.firstdiv}>
      <img src={learnshm} alt='Lern'/>
        <p>HTML</p>
      </div>
      <div className={styles.firstdiv}>
      <img src={learnc} alt='Lern'/>

        <p>CSS</p>
      </div>      
      <div className={styles.firstdiv}>
      <img src={fullstack} alt='Lern'/>

        <p>Fullstack Developer</p>
      </div>      
      <div className={styles.firstdiv}>
      <img src={dsa} alt='Lern'/>

        <p>Data Structure & Algorithm</p>
      </div>     

    </div>
    </div>
    </>
  )
}
export default Courses
