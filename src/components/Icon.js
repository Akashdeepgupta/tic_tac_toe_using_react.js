import React from 'react'
import {FaTimes,FaPen,FaRegCircle, FaAccessibleIcon, FaAccusoft, FaAcquisitionsIncorporated, FaAd} from 'react-icons/fa'

const Icon =({name})=>{
  switch (name) {
      case 'circle':
          return <FaRegCircle className="icons"/>
      case 'cross':
            return <FaTimes className="icons"/>
       default:
           return <FaPen/>
         
  }  
};
export default Icon;