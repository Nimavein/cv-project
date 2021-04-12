import React from "react";

const EducationSection = (props) => {
    return (
        <div className = "form-section">
        <input className = "form-input" onChange = { props.handleChange } placeholder ="School Name" value = {props.schoolName} name = "schoolName"></input>
        <input className = "form-input" onChange = { props.handleChange } placeholder ="Title Of Study" value = {props.titleOfStudy} name = "titleOfStudy"></input>
        <input className = "form-input" onChange = { props.handleChange } placeholder ="Study From Date" value = {props.studyFromDate} name = "studyFromDate"></input>
        <input className = "form-input" onChange = { props.handleChange } placeholder ="Study To Date" value = {props.studyToDate} name = "studyToDate"></input>
      </div>
    )
}

export default EducationSection;