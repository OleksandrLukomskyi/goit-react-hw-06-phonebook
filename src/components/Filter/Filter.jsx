import React from "react";

const Filter = ({filter, onFilterChange}) => ( 
<input type='text' placeholder='Search by name' value={filter}
onChange={(e) => onFilterChange(e.currentTarget.value)}/> );



export default Filter;