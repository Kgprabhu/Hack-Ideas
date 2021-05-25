import React from 'react';

export class Filter extends React.Component{
  handleFilterChange = (event) =>{
    console.log('eve',event.target.value);
  }
  render(){
    const filterList = ['reset','createdBy','upvoteCount']
    return(
      <div>
        <label>SortBy</label>
        <select name="sortBy" id="soryBy" onChange={this.handleFilterChange}>
          {filterList.map((filter)=>{
            return <option value={filter}>{filter}</option>
          })}
        </select>
      </div>
    )
  }
}