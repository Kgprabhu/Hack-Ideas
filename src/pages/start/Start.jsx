import React from 'react';

import './Start.css';

export class Start extends React.Component{
  state={
    employeeId:'',
  }
  handleChange = (event) =>{
    const employeeId = event.target.value;
    this.setState({
      employeeId,
    });
  }
  renderEmployeeDetails = () =>{
    return (
      <div className="employee-details">    
        <label className="employee-id-lable">Enter Employee ID</label>
        <input type="text" className="employee-id-textbox" onChange={this.handleChange}/>
       </div>
    )
  }
  handleClick =() =>{
    const {employeeId}= this.state;
    const { history} = this.props;
    console.log('employeeId');
    if(employeeId){
      history && history.push('/challenges');
    }
    
  }
  render(){
    return(
      <div className="employee-detail-container">
        {this.renderEmployeeDetails()}
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}