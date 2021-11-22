import React from 'react';
import { Wrapper } from "./background.styles"

// Images
import mainBkg from "../../images/mainbkg.jpg";

const Background = () => {
    return (
        <Wrapper>
            <img src={mainBkg} />
        </Wrapper>
    )
}

export default Background;