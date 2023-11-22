// import React from "react";
// import "./heroimage.css";
// import Heroimage from "../assets/vibrating-headphone 1.png"
// export default function heroimage(){
//     //i need to make div
//     // 1st a sub div for hero heading
//     //2nd subdiv for hero image;
//     return (
//         <>
//             <div>
//                 <div className="heroPara">
//   <h3>100 Thousand Songs, ad-free 
// Over thousand podcast episodes</h3>
//                 </div>
//                     <div className="heroImg">
//                         <img src={heroimage} alt="" srcset="" />
//                     </div>
//             </div>
//         </>
//     ) 
// }
import React from 'react';
import './heroimage.css';
import heroimage from '../assets/vibrating-headphone 1.png';

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroPara">
        <h3>100 Thousand Songs, ad-free Over a thousand podcast episodes</h3>
      </div>
      <div className="heroImg">
        <img src={heroimage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
