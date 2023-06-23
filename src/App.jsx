import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import RegNumberList from "./components/RegNumberList.jsx";

function App() {
    let storedRegNums = JSON.parse(localStorage.getItem("items"));
    if (!storedRegNums) {
        storedRegNums = [];
    }
    
    const [regNumList, setRegNumList] = useState([]);

    useEffect(() => {
        setRegNumList(storedRegNums);
    }, []);

    const [filtered, setFiltered] = useState(storedRegNums);
    const [errorText, setErrorText]= useState("")


    function handleSubmit(regNum) {

        if (regNum != "") {
            const newReg = [regNum, ...regNumList];
            setRegNumList(newReg);
            setFiltered(newReg);
            localStorage.setItem("items", JSON.stringify(newReg));
         

        } else {

            setErrorText("Input box cannot be empty") ;
            setTimeout(function(){
                setErrorText("") ;
            },3000)
             
        }
    }

    function filterRegNumbers(town) {
        let filteredArray = [];
        if (town == "ALL") {
            filteredArray = [...regNumList];
        } else {
            regNumList.filter(function (item) {
                let currentItem = item.toUpperCase();
                if (currentItem.startsWith(town)) {
                    filteredArray.push(item);
                }
            });
        }
        setFiltered(filteredArray);
    }

    return (
        <div style={{ marginTop: "3rem" }} className="container">
            <Header onSubmit={handleSubmit} error={errorText} />

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <RegNumberList regNums={filtered} filterNums={filterRegNumbers} />
                    </div>
                    <div className="col-lg-7"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
