import React from 'react';

import { ChallengeCardList } from '../../component/challengeCardList/ChallengeCardList';
import { Popup } from '../../component/popup/Popup';
import { Filter } from '../../component/filter/Filter';
import { withStoreState } from '../../hocs/withStoreState';
import { withStoreActions } from '../../hocs/withStoreAction';
import { NewChallenge } from './NewChallenge';
import './Challenge.css';
import { asendingSort } from '../../utils';

export class Challenge extends React.Component{

  state={
    isPopVisible:false,
  }

  componentDidMount() {
    this.filterSort('createdBy');
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

  filterSort = (filterValue) =>{
    const {storeState,storeActions}= this.props;
    const challengeList = storeState.challenge?.data?.challengeList || [];
    let sortedList;
    if(filterValue === 'createdBy'){
      sortedList = asendingSort([...challengeList],'date');
    }else{
      sortedList = asendingSort([...challengeList],'count');
    }
    const data ={
      challengeList:sortedList,
    }
    storeActions.addNewChallenge({
      data
    });
  }

  handleFilterChange = (filterValue) =>{
    this.filterSort(filterValue);
  }

  renderFilterContainer = () => {
    return(
      <Filter onFilterChange={this.handleFilterChange}/>
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
        <div className="filter-section">
          {this.renderFilterContainer()}
          <button onClick={this.handlePopupToggle}>Create New Challenge</button>
        </div>
        <div className="card-wrapper">
         <ChallengeCardList storeState={storeState} storeActions={storeActions} onUpVoteClick={this.handleUpVote} challengeList={challengeList}/>
         { isPopVisible && 
         <Popup onClose={this.handlePopupToggle}>
           <NewChallenge storeActions={storeActions} storeState={storeState} onPopupToggle={this.handlePopupToggle}/>
          </Popup>}
        </div>
      </div>
    )
  }
}

export const ChallengeView = withStoreState(withStoreActions(Challenge))