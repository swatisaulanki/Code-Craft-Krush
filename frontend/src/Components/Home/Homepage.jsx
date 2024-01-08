import React from 'react'
import styles from "./Homepage.module.css";
import fimg from "./fimg.PNG";
import simg from "./simg.PNG";
import timg from "./timg3.PNG";
const Homepage = () => {
  return (
    <>
    <div>
    <div className={styles.Mainhead}>
      <div className={styles.homecontainer}>
        <div className={styles.firsthead}>
            <h2>Empower Your Code</h2>
            <br></br>
            <h2>Engage with Our Vibrant Programming Community</h2>

        </div>

        
      </div>
      <div className={styles.btn}>
            <button>Explore</button>
        </div>
      </div>
      <div className={styles.secondcomponents}>
        <div className={styles.fmaindive}>
          1
        </div>
        <div className={styles.smaindive}>

          <img src={fimg} alt='fimg'/>
          <img src={simg} alt='simg'/>
          <img src={timg} alt='timg'/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Homepage

