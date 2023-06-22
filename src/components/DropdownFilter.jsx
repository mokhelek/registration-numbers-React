import React from "react";
import ClearBtn from './ClearBtn.jsx';


function DropdownFilter({filterNums}) {

  function handleFilter(event){
     filterNums(event.target.value)
   }

    return (
        <div>
            <div className="d-flex justify-content-end">
                <select onChange={handleFilter} id="dropDown">
                    <option value="ALL"> All Towns </option>
                    <option value="CA"> Cape Town </option>
                    <option value="CL"> Stellenbosch </option>
                    <option value="CF"> Kuils River </option>
                    <option value="CK"> Malmesbury </option>
                    <option value="CJ"> Paarl </option>
                    <option value="CY"> Bellville</option>
                </select>
                <ClearBtn />
            </div>
        </div>
    );
}

export default DropdownFilter;
