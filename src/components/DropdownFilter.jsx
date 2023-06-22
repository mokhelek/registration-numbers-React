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
                    <option value="CA"> Cape Town (CA) </option>
                    <option value="CL"> Stellenbosch (CL) </option>
                    <option value="CF"> Kuils River (CF) </option>
                    <option value="CK"> Malmesbury (CK) </option>
                    <option value="CJ"> Paarl (CJ)</option>
                    <option value="CY"> Bellville (CY) </option>
                </select>
                <ClearBtn />
            </div>
        </div>
    );
}

export default DropdownFilter;
