import React from "react";

import RegNumsForm from "./RegNumsForm.jsx";
import Errors from './ErrorMessage.jsx'

function Header({onSubmit,error}) {
    
    return (
        <div>
            <div style={{ backgroundColor: "rgb(199, 212, 255)", padding: "2rem 0rem 2rem 0rem", marginBottom: "2rem" }} className="row justify-content-center">
                <div className="col-12 col-md-7">
                    <center>
                        <span>
                            <h1 id="title"> ~ Registration Numbers ~</h1>
                        </span>
                      
                        { error && <Errors error={error} />} 
                        <br />
                        <RegNumsForm onSubmit={onSubmit} />
                    </center>
                </div>
            </div>
        </div>
    );
}

export default Header;
