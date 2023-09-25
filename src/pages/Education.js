import React from 'react';
 import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import "../styles/education.css"


const Education = () => {
  return (
    <div className='education'>
      <VerticalTimeline lineColor="#555e57">
      <VerticalTimelineElement className='vertical-timeline-element--education ' 
      date="2011-2014"
      iconStyle={{background:"#555e57",color:"white"}}
      icon={<SchoolIcon/>}>
      <h3 className='vertical-timeline-element-title'>Sri chaitanya school,Rajahmundry,Andhrapradesh</h3>
      <p>High School Diploma</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className='vertical-timeline-element--education ' 
      date="2014-2016"
      iconStyle={{background:"#555e57",color:"white"}}
      icon={<SchoolIcon/>}>
      <h3 className='vertical-timeline-element-title'>Sri chaitanya junior college,Vijayawada,Andhrapradesh</h3>
      <p>Intermediate</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className='vertical-timeline-element--education ' 
      date="2016-2020"
      iconStyle={{background:"#555e57",color:"white"}}
      icon={<SchoolIcon/>}>
      <h3 className='vertical-timeline-element-title'>Prasad v.potluri siddhartha institute of technology,Vijayawada,Andhrapradesh</h3>
      <p>Mechanical Engineering,Bachelor's Degree</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className='vertical-timeline-element--education ' 
      date="2022-2023"
      iconStyle={{background:"#555e57",color:"white"}}
      icon={<SchoolIcon/>}>
      <h3 className='vertical-timeline-element-title'>Acciojob</h3>
      <p>Front-End development course</p>
      <a href="https://drive.google.com/file/d/1P0CSS-GGQbf9j_TvB0cgwNx5ahUQL8Ow/view?usp=drive_link">View certificate</a>
      </VerticalTimelineElement>
      </VerticalTimeline>
      <VerticalTimeline  lineColor="#555e57">
      </VerticalTimeline>
    </div>
  )
}

export default Education;