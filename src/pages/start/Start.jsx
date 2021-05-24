import React from 'react';

import { ChallengeCardList } from '../../component/challengeCardList/ChallengeCardList'
import './Start.css';

export class Start extends React.Component{cchan
  state={
    challengeList:[{
     title:'Sample1',
     description:'asdfadf asdfadsf asdfadsfdd asdfasdfasdfasdf adsfasdfadsf',
     tags:['feature,machine-learning'],
     count:0,
   },
   {
    title:'Sample1',
    description:'asdfadf asdfadsf asdfadsfdd asdfasdfasdfasdf adsfasdfadsf',
    tags:['feature,machine-learning'],
    count:0,
   },{
    title:'Sample1',
    description:'asdfadf asdfadsf asdfadsfdd asdfasdfasdfasdf adsfasdfadsf',
    tags:['feature,machine-learning'],
    count:0,
   },{
    title:'Sample1',
    description:'asdfadf asdfadsf asdfadsfdd asdfasdfasdfasdf adsfasdfadsf',
    tags:['feature,machine-learning'],
    count:0,
   }
  ]
  }

  render(){
    const { challengeList} = this.state;
    return(
      <div>
        <h2>Hackthons,Programming challenges</h2>
        <div className="challenge-container">
         <ChallengeCardList challengeList={challengeList}/>
        </div>
      </div>
    )
  }
}