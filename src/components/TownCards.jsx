import React from "react";

function TownCards({ townStats }) {
    return (
        <div>
            <div className="row">
                {Object.entries(townStats).map(([key, value]) => {
                    return (
                        <div key={key} className="col-sm-4">
                            <div align="center" id="malmesbury-card" className="card card-body place-card">
                                <h2 id="malmesbury_counter" className="town-count">
                                    <p style={{fontSize:"2.2rem", fontWeight:"500", marginBottom:"0"}}>{value}</p>
                                </h2>
                                <p id="town">{key}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TownCards;
