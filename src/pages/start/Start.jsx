import React from 'react';
import { withStoreState } from '../../hocs/withStoreState';
import { withStoreActions } from '../../hocs/withStoreAction';
import './Start.css';

export class Start extends React.Component{
  
  handleChange = (event) =>{
    const employeeId = event.target.value;
    this.employeeId = employeeId;
  }
  renderEmployeeDetails = () =>{
    return (
      <div className="employee-details">    
        <label className="employee-id-lable">Enter Employee ID</label>
        <input type="text" className="employee-id-textbox" onChange={this.handleChange}/>
       </div>
    )
  }
  handleClick = async() =>{
    const {employeeId}= this;
    const { history,storeActions} = this.props;
    const employeeDetail = {
      employeeId,
    }
    if(employeeId){
      await storeActions.addEmployeeDetails({data:employeeDetail})
      history && history.push('/challenges');
    }
    
  }
  render(){
    return(
      <div className="employee-detail-container">
        <h2>GET STARTED</h2>
        {this.renderEmployeeDetails()}
        <button className="employee-detail-submit" onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

export const StartView = withStoreState(withStoreActions(Start));