import React from 'react';
export class NewChallenge extends React.Component{

  handleTitleChange = (event) =>{
    this.title = event.target.value;
  }
  handleDescriptionChange = (event) =>{
    this.description = event.target.value;
  }
  handleSubmit=()=>{
    if(this.title&&this.description){
      const {storeState,storeActions,onPopupToggle}= this.props;
      const challengeList = storeState.challenge?.data?.challengeList || [];
      const newChallenge = {
        'id':challengeList.length,
        'title': this.title,
        'description':this.description,
        'tags':['test','test'],
        'count': 0,
        'date': new Date(),
      }
      const newList = [...challengeList,newChallenge]
      const data ={
        challengeList:newList,
      }
      onPopupToggle();
      storeActions.addNewChallenge({
        data,
      });
    }
  }
  render(){
    return(
        <div className="new-challenge-container">
          <h2>Add New Challenge</h2>
          <div className="new-challenge-wrapper">
            <div className="field-section">
            <label>Title</label>
            <input type="text" id="title" onChange={this.handleTitleChange}/>
            </div>
            <div className="field-section">
            <label>Description</label>
            <textarea  rows="4" cols="50" onChange={this.handleDescriptionChange}/>
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
    )
  }
}