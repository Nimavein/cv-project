import React from "react";

const PracticalSection = (props) => {
    return (
        <div className = "form-section">
            <input className = "form-input" onChange = { props.handleChange } placeholder ="Company Name" value = {props.companyName} name = "companyName"></input>
            <input className = "form-input" onChange = { props.handleChange } placeholder ="Position Title" value = {props.positionTitle} name = "positionTitle"></input>
            <input className = "form-input" onChange = { props.handleChange } placeholder ="Main Tasks" value = {props.mainTasks} name = "mainTasks"></input>
            <input className = "form-input" onChange = { props.handleChange } placeholder ="Work From Date" value = {props.workFromDate} name = "workFromDate"></input>
            <input className = "form-input" onChange = { props.handleChange } placeholder ="Work To Date" value = {props.workToDate} name = "workToDate"></input>
        </div>
    )
}

export default PracticalSection;