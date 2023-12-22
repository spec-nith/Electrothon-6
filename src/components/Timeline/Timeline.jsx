
import '../../App.css';
// import {ReactComponent as RegisterIcon} from "../../assets/images/register.svg";
// import {ReactComponent as PeopleIcon} from "../../assets/images/people.svg";
// import {ReactComponent as ResultIcon} from "../../assets/images/result.svg";
// import {ReactComponent as WorkIcon} from "../../assets/images/work.svg";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import { motion } from "framer-motion";

import timelineElements from './timelineElements';

import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';

import "react-vertical-timeline-component/style.min.css";
import { bg3, people, register, result, work } from '../../assets/images';
 



function Timeline() {

  let RegisterIconStyles = {background : "#0dffa0"}
  let PeopleIconStyles = {background : "#0dffff"}
  let ResultIconStyles = {background : "#f467e1"}
  let ElectrothonIconStyles = {background : "#ff650d"}
  let WorkIconStyles = {background : "#a6aba7"}
  return (
    <div>
      <div className="flex justify-center text-4xl lg:text-7xl font-bold text-white my-4 lg:my-6 font-[Oswald] "
      id= "schedule">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          title={
            <>
              <div className="looked text-6xl lg:text-7xl font-extrabold text-white my-4 lg:my-6 font-[Oswald]">
              Timeline
               </div>
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
              </div>
      {/* <h1 className='title'>Timeline</h1> */}
      <VerticalTimeline>
        {
          timelineElements.map( element=> {
            let isRegisterIcon = element.icon === "register";
            let isPeopleIcon = element.icon === "people";
            let isResultIcon = element.icon === "result";
            let isElectrothonIcon = element.icon === "electrothon";
            // let isWorkIcon = element.icon === "work";
            let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !=="";
            return(
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName='date'
                contentStyle={{ background: 'rgba(255, 255, 255, 0.104)', color: '#fff',opacity:'0.7' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.514)' }}

                iconStyle={isRegisterIcon ? RegisterIconStyles : isPeopleIcon ? PeopleIconStyles : isResultIcon ? ResultIconStyles: isElectrothonIcon? ElectrothonIconStyles: WorkIconStyles }

                icon = {isRegisterIcon ? <img src={register}/> : isPeopleIcon ?  <img src={people}/> : isResultIcon ?  <img src={result}/> : <img src={work}/> }
              >
                <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                
                <p id="description">{element.description}</p>

                {showButton && (<a className={`button ${isRegisterIcon ? "registerButton" : isPeopleIcon ? "peopleButton": isResultIcon ? "resultButton" : isElectrothonIcon? "electrothonButton" :"workButton"}`} href='/'>{element.buttonText}</a>)}
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    
    </div>
    
  );
}

export default Timeline;
