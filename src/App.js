import React, { Component } from 'react';
import Personal from './components/PersonalInfo'
import Practical from './components/PracticalExp'
import Educational from './components/EduExp'

class App extends Component {
  constructor() {
    super();
    this.state = { 
      name : "",
      surname : "",
      email : "",
      phoneNumber: "",
      schoolName: "",
      titleOfStudy: "",
      studyFromDate: "",
      studyToDate: "",
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      workFromDate: "",
      workToDate: "",
     }
  }
  
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    })
    console.log(this.state)
  }
  
  render() { 
    const { name, surname, email, phoneNumber, schoolName, 
      titleOfStudy, studyFromDate, studyToDate, companyName,
    positionTitle, mainTasks, workFromDate, workToDate} = this.state;
    
    return ( 
      <div>
        <h1>Personal Information</h1>
          <form>
            <input onChange = { this.handleChange } placeholder ="Name" value = {name} name = "name"></input>
            <input onChange = { this.handleChange } placeholder ="Surname" value = {surname} name = "surname"></input>
            <input onChange = { this.handleChange } placeholder ="E-Mail" value = {email} name = "email"></input>
            <input onChange = { this.handleChange } placeholder ="Phone Number" value = {phoneNumber} name = "phoneNumber"></input>
            <h1>Experience</h1>
            <input onChange = { this.handleChange } placeholder ="Company Name" value = {companyName} name = "companyName"></input>
            <input onChange = { this.handleChange } placeholder ="Position Title" value = {positionTitle} name = "positionTitle"></input>
            <input onChange = { this.handleChange } placeholder ="Main Tasks" value = {mainTasks} name = "mainTasks"></input>
            <input onChange = { this.handleChange } placeholder ="Work From Date" value = {workFromDate} name = "workFromDate"></input>
            <input onChange = { this.handleChange } placeholder ="Work To Date" value = {workToDate} name = "workToDate"></input>
            <h1>Education</h1>
            <input onChange = { this.handleChange } placeholder ="School Name" value = {schoolName} name = "schoolName"></input>
            <input onChange = { this.handleChange } placeholder ="Title Of Study" value = {titleOfStudy} name = "titleOfStudy"></input>
            <input onChange = { this.handleChange } placeholder ="Study From Date" value = {studyFromDate} name = "studyFromDate"></input>
            <input onChange = { this.handleChange } placeholder ="Study To Date" value = {studyToDate} name = "studyToDate"></input>
          </form>

        <h1>Preview</h1>
        <p>Personal information</p>
        <Personal name = { name } surname = { surname } email = { email } phoneNumber = { phoneNumber } />
        <p>Experience</p>
        <Practical companyName = { companyName } positionTitle = { positionTitle } mainTasks = { mainTasks } workFromDate = { workFromDate } workToDate = {workToDate} />
        <p>Education</p>
        <Educational schoolName = { schoolName } titleOfStudy = { titleOfStudy } studyFromDate = { studyFromDate } studyToDate = { studyToDate } />
      </div> );
      
  }
}
 
export default App;
