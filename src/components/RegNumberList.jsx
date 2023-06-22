import React from "react";
import DropdownFilter from './DropdownFilter.jsx'


function RegNumber({regNums , filterNums}) {
   
    return (
        <div>
            <div style={{ height: "600px", overflowY: "scroll" }}>
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
                </div>
            </div>
        </div>
    );
}

export default RegNumber;
