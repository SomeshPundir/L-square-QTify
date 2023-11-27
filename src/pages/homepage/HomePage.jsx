import React from "react";
import {useOutletContext} from 'react-router-dom'
import Hero from "../../components/heroImage/heroimage";
import Section from "../../components/section/section";
import styles from "./HomePage.css"

export default function HomePage(props){
    const {data}=useOutletContext();
   const {topAlbums,newAlbums}= data;

   return <>
   {/* {   console.log(data)} */}
   <Hero/>
   <div className={styles.wrapper}>
    <Section title="Top Albums" data={topAlbums}
    type="album" />
    <Section title="New Albums" data={newAlbums}
    type="songs"/>

   </div>      
    </>
}