import React from "react";
import DropdownFilter from './DropdownFilter.jsx'
import EmptyList from "./EmptyList.jsx";



function RegNumber({regNums , filterNums}) {
   console.log(regNums)
    return (
        <div>
            <div style={{ height: "500px", overflowY: "scroll" }}>
                <div className="container" style={{ borderRight: "1px rgb(177, 177, 177) solid" }}>
                    <DropdownFilter filterNums={filterNums} />
                    <hr />

                    {regNums.map(function (item, index) {
                        return (
                            <div key={index} className="reg-nums-list">
                                <li>
                                    <div>{item}</div>
                                </li>
                            </div>
                        );
                    })}
                    <center>
                        { regNums == false && < EmptyList /> }
                    </center>
                   
                </div>
            </div>
        </div>
    );
}

export default RegNumber;
