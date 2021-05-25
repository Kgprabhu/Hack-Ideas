import React from 'react';

import { ChallengeCardList } from '../../component/challengeCardList/ChallengeCardList'
import './Challenge.css';

export class Challenge extends React.Component{cchan
  state={
    challengeList:[{
     id:0,
     title:'Sample1',
     description:'asdfadf asdfadsf asdfadsfdd asdfasdfasdfasdf adsfasdfadsf',
     tags:['feature,machine-learning'],
     count:0,
   },
   {
    id:1,
    title:'Sample1',
    description:'asdfadf asdfadsf asdfadsfdd asdfasdfasdfasdf adsfasdfadsf',
    tags:['feature,machine-learning'],
    count:0,
   },{
    id:2,
    title:'Sample1',
    description:'asdfadf asdfadsf asdfadsfdd asdfasdfasdfasdf adsfasdfadsf',
    tags:['feature,machine-learning'],
    count:0,
   },{
    id:3,
    title:'Sample1',
    description:'asdfadf asdfadsf asdfadsfdd asdfasdfasdfasdf adsfasdfadsf',
    tags:['feature,machine-learning'],
    count:0,
   }
  ]
  }

  handleUpVote = (id) =>{
    const {challengeList} = this.state;
    const challengeListClone = [...challengeList]
    challengeListClone.forEach((challenge)=>{
      if(challenge.id === id){
        challenge.count++;
      }
    });
    this.setState({
      challengeList:challengeListClone,
    });
  }

  render(){
    const { challengeList} = this.state;
    return(
      <div>
        <h2>Hackthons,Programming challenges</h2>
        <div className="challenge-container">
         <ChallengeCardList onUpVoteClick={this.handleUpVote} challengeList={challengeList}/>
        </div>
      </div>
    )
  }
}