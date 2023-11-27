import React from "react";
import {useOutletContext} from 'react-router-dom'
import Hero from "../../components/heroImage/heroimage";
import Section from "../../components/section/section";
import styles from "./HomePage.css"
import AccordianComp from '../../components/accordian/Accordian'
export default function HomePage(props){
    const {data}=useOutletContext();
   const {topAlbums,newAlbums}= data;

   return <>
   {/* {console.log("homepage_data")}
   {   console.log(data)} */}
   <Hero/>
   <div className={styles.wrapper}>
    <Section title="Top Albums" data={topAlbums}
    type="album" />
    <Section title="New Albums" data={newAlbums}
    type="songs"/>

   </div>  
<AccordianComp/>
    </>
}