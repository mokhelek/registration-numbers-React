import React from "react";
import { useState, useEffect } from "react";

function RegNumsForm({onSubmit}) {

    const [regNum, setRegNum] = useState(""); 
   
    function handleSubmit() {
        onSubmit(regNum)
        setRegNum('')
    }

    function updateState(e) {
        setRegNum(e.target.value);
    }

    return (
        <div>
            <div className="d-flex">
                <input value={regNum} onChange={updateState} className="form-control reg-num-input" style={{ height: "40px", border: "2px rgb(96, 146, 255) solid" }} placeholder="registration number" />

                <span>
                    <button onClick={handleSubmit} style={{ marginLeft: "1rem", width: "80px", height: "40px" }} id="add-btn" className="btn btn-primary ">
                        Add
                    </button>
                </span>
            </div>
        </div>
    );
}

export default RegNumsForm;
