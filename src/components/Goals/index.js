import React from "react";

// Components
import { Wrapper } from "./Goals.styles";
import Goal from "../Goal";
import News from "../News";

// Images
import no_image from "../../images/no_image.jpg";
import goal1 from "../../images/goal1.png";
import goal2 from "../../images/goal2.png";
import goal3 from "../../images/goal3.png";
import goal4 from "../../images/goal4.png";
import goal5 from "../../images/goal5.png";
import goal6 from "../../images/goal6.png";
import goal7 from "../../images/goal7.png";
import goal8 from "../../images/goal8.png";
import goal9 from "../../images/goal9.png";
import goal10 from "../../images/goal10.png";
import goal11 from "../../images/goal11.png";
import goal12 from "../../images/goal12.png";
import goal13 from "../../images/goal13.png";
import goal14 from "../../images/goal14.png";
import goal15 from "../../images/goal15.png";
import goal16 from "../../images/goal16.png";
import goal17 from "../../images/goal17.png";


const array = [goal1, goal2, goal3, goal4, goal5, goal6, goal7, goal8, goal9, goal10, goal11, goal12, goal13, goal14, goal15, goal16, goal17];


const Goals = () => {
  return (
    <Goal>
      {array.map((item, index) => {
        return (
          <Wrapper key={index}>
            <section>
              <img src={item}/>
            </section>
        </Wrapper>
        )
      })}
    </Goal>
  );
}
  

export default Goals;
