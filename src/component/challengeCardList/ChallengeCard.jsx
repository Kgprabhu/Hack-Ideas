import React from 'react';

export class ChallengeCard extends React.Component{
  renderTag = (tag) => {
    return( 
     <div>
       {tag}
     </div>
     )
   }
   renderTags = (tags) =>{
      return tags.length>0 && tags.map(this.renderTag);
   }
  render(){
    const {challengeDetail} = this.props;
    return (
      <div className="challenge-card-container">
        {this.renderTags(challengeDetail.tags)}
        <h2>{challengeDetail.title}</h2>
        <p>{challengeDetail.description}</p>
        <button className="start-button">Start</button>
        <div><span></span>{challengeDetail.count}</div>
    </div>
    );
  }
}