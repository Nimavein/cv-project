import React from "react";

const PersonalInfoSection = (props) => {
    return (
    <div className = "form-section">
        <input className = "form-input" onChange = { props.handleChange } placeholder ="Name" value = {props.name} name = "name"></input>
        <input className = "form-input" onChange = { props.handleChange } placeholder ="Surname" value = {props.surname} name = "surname"></input>
        <input className = "form-input" onChange = { props.handleChange } placeholder ="E-Mail" value = {props.email} name = "email"></input>
        <input className = "form-input" onChange = { props.handleChange } placeholder ="Phone Number" value = {props.phoneNumber} name = "phoneNumber"></input>
        <input className = "form-input" onChange = { props.handleChange } placeholder ="Photo" value = {props.photo} name = "photo"></input>
        <input className = "form-input" onChange = { props.handleChange } placeholder ="Address" value = {props.address} name = "address"></input>
        <input className = "form-input" onChange = { props.handleChange } placeholder ="Desciption" value = {props.description} name = "description"></input>
    </div>
    )
}

export default PersonalInfoSection;