import React from 'react';
import './Filter.css'

export class Filter extends React.Component{
  handleFilterChange = (event) =>{
    const { onFilterChange } = this.props;
    const filterValue = event.target.value;
    onFilterChange(filterValue);
  }
  render(){
    const filterList = ['createdBy','upvoteCount']
    return(
      <div className="filter">
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