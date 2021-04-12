import React, { Component } from 'react';
import Personal from './components/PersonalInfo';
import Practical from './components/PracticalExp';
import Educational from './components/EduExp';
import PracticalSection from './components/PracticalExpSection'
import EducationSection from './components/EduExpSection'
import PersonalInfoSection from './components/PersonalInfoSection'
import './Background.css';
import './Form.css'


class App extends Component {
  constructor() {
    super();
    this.state = { 
      name : "",
      surname : "",
      email : "",
      phoneNumber: "",
      title: "",
      photo: "",
      address: "",
      description: "",
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

  handleReset = (e) => {
    e.reset();
  }

  addSection = () => {

  }
  
  render() { 
    const { name, surname, email, phoneNumber, photo, address, description, schoolName, 
      titleOfStudy, studyFromDate, studyToDate, companyName,
    positionTitle, mainTasks, workFromDate, workToDate} = this.state;
    
    return ( 
      <div id = "outer-div">
          <form id = "the-form" onSubmit = "return false">
          <h1>Personal Information</h1>
          <PersonalInfoSection handleChange = {this.handleChange}/>
          <h1>Experience</h1>
          <PracticalSection handleChange = {this.handleChange}/>
          <button className = "form-button">Add</button>
          <h1>Education</h1>
          <EducationSection handleChange = {this.handleChange}/>
          <button className = "form-button">Add</button>
          <button className = "form-button" onClick = { this.handleReset }>Reset Form</button>
          </form>
        
        <h1>Preview</h1>
        <p>Personal information</p>
        <Personal name = { name } surname = { surname } email = { email } phoneNumber = { phoneNumber } photo = {photo} address = { address } description = { description } />
        <p>Experience</p>
        <Practical companyName = { companyName } positionTitle = { positionTitle } mainTasks = { mainTasks } workFromDate = { workFromDate } workToDate = {workToDate} />
        <p>Education</p>
        <Educational schoolName = { schoolName } titleOfStudy = { titleOfStudy } studyFromDate = { studyFromDate } studyToDate = { studyToDate } />
      </div> );
      
  }
}
 
export default App;
