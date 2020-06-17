import React from "react";
import Chirp from "./Chirp";

const ChirpBox = (props) => {
    return props.chirps.map((chirp, index) => {
        return(
            <>
            <Chirp key={index} user={{ name: chirp.name, text: chirp.message }} />
            </>
        )
    })
}

export default ChirpBox;
