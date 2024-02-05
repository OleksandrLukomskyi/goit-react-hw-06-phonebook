import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterAction } from "store/filter/sliceFilter";

const Filter = () => {  
   const dispatch = useDispatch();
   const filter = useSelector((state) => state.filter.filter);
 
   const handleFilterChange = (e) =>  {
      dispatch(updateFilterAction(e.target.value));
   }

return(
<input type='text' placeholder='Search by name' value={filter}
onChange={handleFilterChange}/> )};



export default Filter;