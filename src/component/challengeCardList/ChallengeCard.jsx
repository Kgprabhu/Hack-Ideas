import React from 'react';

export class ChallengeCard extends React.Component{
  renderTag = (tag,index) => {
    return( 
     <div key={index}>
       {tag}
     </div>
     )
   }
   renderTags = (tags) =>{
      return tags.length>0 && tags.map(this.renderTag);
   }
   handleupVote=()=>{
      const {onUpVoteClick,challengeDetail} = this.props;
      onUpVoteClick && onUpVoteClick(challengeDetail.id)
   }
  render(){
    const {challengeDetail} = this.props;
    return (
      <div className="challenge-card-container" key={challengeDetail.id}>
        {this.renderTags(challengeDetail.tags)}
        <h2>{challengeDetail.title}</h2>
        <p>{challengeDetail.description}</p>
        <button className="start-button" onClick={this.handleupVote}>Upvote</button>
        <div><span></span>{challengeDetail.count}</div>
    </div>
    );
  }
}