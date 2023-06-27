import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import RegNumberList from "./components/RegNumberList.jsx";
import TownCards from "./components/TownCards.jsx";

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
    const [errorText, setErrorText] = useState("");

    function handleSubmit(regNum) {
        let registrationFormat = /^[a-zA-Z]{0,3}\s*\d{3}(?:[-\s]?\d{0,3})$/;

        if (regNum != "") {
            if (registrationFormat.test(regNum)) {
                if (!regNumList.includes(regNum)) {
                    let newRegNum = regNum.toUpperCase() ;
                    if (newRegNum.startsWith("CA") || newRegNum.startsWith("CL") || newRegNum.startsWith("CJ") || newRegNum.startsWith("CK") || newRegNum.startsWith("CF") || newRegNum.startsWith("CY")) {
                        const newReg = [regNum, ...regNumList];
                        setRegNumList(newReg);
                        setFiltered(newReg);
                        localStorage.setItem("items", JSON.stringify(newReg));
                        handleTownCount(regNum);
                    } else {
                        setErrorText("Unknown location Registration");
                        setTimeout(function () {
                            setErrorText("");
                        }, 3000);
                    }
                } else {
                    setErrorText("Registration number has already been added");
                    setTimeout(function () {
                        setErrorText("");
                    }, 3000);
                }
            } else {
                setErrorText("invalid registration number format");
                setTimeout(function () {
                    setErrorText("");
                }, 3000);
            }
        } else {
            setErrorText("Input box cannot be empty");
            setTimeout(function () {
                setErrorText("");
            }, 3000);
        }
    }

    let storedTownCount = {
        "Cape Town": 0,
        Stellenbosch: 0,
        Bellville: 0,
        Paarl: 0,
        "Kuils River": 0,
        Malmesbury: 0,
    };

    if (localStorage["townCountStored"]) {
        storedTownCount = JSON.parse(localStorage["townCountStored"]);
    }

    const [townCount, setTownCount] = useState(storedTownCount);
    useEffect(() => {
        setTownCount(storedTownCount);
    }, []);

    function handleTownCount(regNum) {
        let currentCount = { ...townCount }; // ? Copy of the state.

        let currentItem = regNum.toUpperCase();

        if (currentItem.startsWith("CA")) {
            currentCount["Cape Town"]++;
        } else if (currentItem.startsWith("CK")) {
            currentCount["Malmesbury"]++;
        } else if (currentItem.startsWith("CL")) {
            currentCount["Stellenbosch"]++;
        } else if (currentItem.startsWith("CF")) {
            currentCount["Kuils River"]++;
        } else if (currentItem.startsWith("CJ")) {
            currentCount["Paarl"]++;
        } else if (currentItem.startsWith("CY")) {
            currentCount["Bellville"]++;
        }

        setTownCount(currentCount);
        localStorage["townCountStored"] = JSON.stringify(currentCount);
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
        <div style={{ marginTop: "0rem" }} className="">
            <Header onSubmit={handleSubmit} error={errorText} />

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <RegNumberList regNums={filtered} filterNums={filterRegNumbers} />
                    </div>
                    <div className="col-lg-7">
                        <TownCards townStats={townCount} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
