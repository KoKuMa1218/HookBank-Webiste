import React from 'react'
import styles from '../style'
import { arrowUp, pdf } from '../assets'

const GetStarted = () => (
  <a href={pdf} target='_blank'>
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">เข้าชม</span>
          </p>
          <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Catalog</span>
        </p>
      </div>
    </div>
  </a>
)


export default GetStarted