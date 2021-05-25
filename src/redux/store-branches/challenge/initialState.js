
const defaultList = [{
  id:0,
  title:'Sample1',
  description:'asdfadf asdfadsf asdfadsfdd asdfasdfasdfasdf adsfasdfadsf',
  tags:['newfeature','python'],
  count:5,
  date: new Date('12-10-2019'),
},
{
 id:1,
 title:'Sample1',
 description:'asdfadf asdfadsf asdfadsfdd asdfasdfasdfasdf adsfasdfadsf',
 tags:['newfeature','java'],
 count:0,
 date: new Date('12-11-2018'),
},{
 id:2,
 title:'Sample1',
 description:'asdfadf asdfadsf asdfadsfdd asdfasdfasdfasdf adsfasdfadsf',
 tags:['newfeature','machine-learning'],
 count:2,
 date: new Date('02-09-2020'),
},{
 id:3,
 title:'Sample1',
 description:'asdfadf asdfadsf asdfadsfdd asdfasdfasdfasdf adsfasdfadsf',
 tags:['newfeature','front-end'],
 count:8,
 date: new Date('11-08-2021'),
}
];
 
export const addChallengeInitialState = {
  data: {
    challengeList:defaultList,
  },
};
