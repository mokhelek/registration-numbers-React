import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import RegNumberList from "./components/RegNumberList.jsx";

function App() {
    const [regNumList, setRegNumList] = useState([]);

    let storedRegNums = JSON.parse(localStorage.getItem("items"));

    if (!storedRegNums) {
        storedRegNums = [];
    }
    useEffect(() => {
        setRegNumList(storedRegNums);
    }, []);

    // * takes the reg num as parameter and adds it to the local storage
    function handleSubmit(regNum) {
        const newReg = [regNum, ...regNumList];
        setRegNumList(newReg);
        localStorage.setItem("items", JSON.stringify(newReg));
    }

    function filterRegNumbers(town) {
        let filteredArray = [];
        if(town == "ALL"){
            filteredArray = regNumList ;
        }else{
            regNumList.filter(function (regNum) {
                if (regNum.startsWith(town)) {
                    filteredArray.push(regNum);
                }
            });
        }
        setRegNumList(filteredArray)
    }


    return (
        <div style={{ marginTop: "3rem" }} className="container">
            <Header onSubmit={handleSubmit} />

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <RegNumberList regNums={regNumList} filterNums={filterRegNumbers} />
                    </div>
                    <div className="col-lg-7"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
