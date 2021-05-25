import React from 'react';

import { ChallengeCardList } from '../../component/challengeCardList/ChallengeCardList';
import { Popup } from '../../component/popup/Popup';
import { Filter } from '../../component/filter/Filter';
import { withStoreState } from '../../hocs/withStoreState';
import { withStoreActions } from '../../hocs/withStoreAction';
import './Challenge.css';

export class Challenge extends React.Component{

  state={
    isPopVisible:false,
  }

  handleUpVote = (id) =>{
    const {storeState,storeActions}= this.props
    const challengeList = storeState.challenge?.data?.challengeList || [];
    const challengeListClone = [...challengeList];
    challengeListClone.forEach((challenge)=>{
      if(challenge.id === id){
        challenge.count++;
      }
    });
    const data ={
      challengeList:challengeListClone,
    }
    storeActions.addNewChallenge({
      data
    });
  }
  asendingSort = (list,property) =>{
    return list.sort((first,second)=> first[property] - second[property])
  }
  renderFilterContainer = () => {
    const {storeState,storeActions}= this.props
    const challengeList = storeState.challenge?.data?.challengeList || [];
    const dateSort = () => {
      const sortedList = this.asendingSort([...challengeList],'date');
      const data ={
        challengeList:sortedList,
      }
      storeActions.addNewChallenge({
        data
      });
    }
    const upvoteSort = () => {
      const sortedList = this.asendingSort([...challengeList],'count');
      const data ={
        challengeList:sortedList,
      }
      storeActions.addNewChallenge({
        data
      });
    }
    return(
      <Filter/>
    )
  }

  renderNewChallenge = () =>{
    return(
      <div className="new-challenge-container">
        <h2>Add New Challenge</h2>
        <div className="new-challenge-wrapper">
          <div>
          <lable>Title</lable>
          <input type="text" id="title"/>
          </div>
          <div>
          <label>Description</label>
          <textarea id="w3review" name="w3review" rows="4" cols="50"/>
          </div>
          <button>Submit</button>
        </div>
      </div>
    )
  }

  handlePopupToggle = () =>{
    const {isPopVisible} = this.state;
    this.setState({
      isPopVisible:!isPopVisible,
    })
  }

  render(){
    const {storeState,storeActions}= this.props;
    const { isPopVisible } = this.state;
    const challengeList = storeState.challenge?.data?.challengeList || [];
    return(
      <div>
        <h2>Hackthons,Programming challenges</h2>
        <button onClick={this.handlePopupToggle}>Create New Challenge</button>
        {this.renderFilterContainer()}
        <div className="challenge-container">
         <ChallengeCardList storeState={storeState} storeActions={storeActions} onUpVoteClick={this.handleUpVote} challengeList={challengeList}/>
         { isPopVisible && <Popup onClose={this.handlePopupToggle}>{this.renderNewChallenge()}</Popup>}
        </div>
      </div>
    )
  }
}

export const ChallengeView = withStoreState(withStoreActions(Challenge))