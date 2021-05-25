import React from 'react';
import like  from '../../assets/icons/like.svg';
import blackLike  from '../../assets/icons/blackLike.svg';
import './styles.css';
export class ChallengeCard extends React.Component{
  state={
    upVoteLogo:like,
  }
  componentDidUpdate(prevProps,prevState){
    const {storeActions,storeState,challengeDetail}= this.props; 
    const {upVoteLogo} = this.state;
    if(prevState.upVoteLogo !== upVoteLogo){
      const challengeList = storeState.challenge?.data?.challengeList || [];
      const challengeListClone = [...challengeList];
      challengeListClone.forEach((challenge)=>{
        if(challenge.id ===  challengeDetail.id){
          upVoteLogo === blackLike ? challenge.count++ : challenge.count--;
        }
      });
      const data ={
        challengeList:challengeListClone,
      }
      console.log('storeActions',storeActions);
      storeActions.addNewChallenge({
        data
      });
    }
  }
  renderTag = (tag,index) => {
    return( 
      <span key={index} className="badge">{tag}</span>
     )
   }
   renderTags = (tags) =>{
      return tags.length>0 && tags.map(this.renderTag);
   }
   handleupVote=()=>{
      const {onUpVoteClick,challengeDetail} = this.props;
      onUpVoteClick && onUpVoteClick(challengeDetail.id)
   }
   renderDate = () => {
     const {challengeDetail} = this.props;
     const date = new Date(challengeDetail.date);
     const day = date.getDate();
     const month = date.getMonth();
     const year = date.getFullYear();
     return `${day}-${month}-${year}`;
   }
   handleUpvoteClick =()=>{
    const {upVoteLogo} = this.state;
    const logo = upVoteLogo === like ? blackLike : like;
    this.setState({
      upVoteLogo:logo
    });
   }
  render(){
    const {challengeDetail} = this.props;
    const {upVoteLogo} = this.state;
    return(
      <div className='card'>
        <div className='date'>
            <span className='created-on'>Created on : </span>
            <span>{this.renderDate()}</span>
        </div>
      <h2 className='title'>{challengeDetail.title}</h2>
      <div className='description'>{challengeDetail.description}</div>
      <div className="badge-wrapper">
        {this.renderTags(challengeDetail.tags)}
      </div>
      <div className="upvote-wrapper" onClick={this.handleUpvoteClick}>
        <span className="upvote-count">{`(${challengeDetail.count})`}</span>
        <img src={upVoteLogo} className="upvote-logo" alt="logo" />
      </div>
    </div>
    )
  }
}