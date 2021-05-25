import React from 'react'

import {ChallengeCard } from './ChallengeCard';

export class ChallengeCardList extends React.Component{
  renderChallengerCardList = (challengeDetail) =>{
    return <ChallengeCard key={challengeDetail.id} challengeDetail={challengeDetail} {...this.props}/>
  }
  render(){
    const {challengeList}= this.props;
    return challengeList.map(this.renderChallengerCardList)
  }
}