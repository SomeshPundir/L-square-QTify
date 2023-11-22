import React from "react";
import "./cardbutton.css"
export default function cardbutton({followers}){
    return (
        <>
            <div className="blackbtn">
                <p>{followers}followers</p>
            </div>
        </>
    )
}