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

    function handleSubmit(regNum) {
        let duplicateError = document.querySelector("#duplicate-error");
        let emptyInputError = document.querySelector("#empty-input-error");
        let formatError = document.querySelector("#format-error");

        if (regNum != "") {
            const newReg = [regNum, ...regNumList];
            setRegNumList(newReg);
            setFiltered(newReg);
            localStorage.setItem("items", JSON.stringify(newReg));
            // if (regFactory.regFormatCheck(regInput.value.replace(/\s/g, ""))) {
            //     if (regFactory.handleDuplicates(regInput.value.toUpperCase().replace(/\s/g, ""))) {
            //         const listItem = document.createElement("li");

            //         regFactory.addRegNum(regInput.value.toUpperCase().replace(/\s/g, ""));

            //         listItem.textContent = registrationNumbers[registrationNumbers.length - 1];
            //         regNumList.appendChild(listItem);

            //         regNumList.insertBefore(listItem, regNumList.childNodes[0]);

            //         localStorage["regNumbersList"] = regFactory.getRegistrations();

            //         townCounters();
            //     } else {
            //         duplicateError.style.display = "block";
            //         setTimeout(function () {
            //             duplicateError.style.display = "none";
            //         }, 3000);
            //     }
            // } else {
            //     formatError.style.display = "block";
            //     setTimeout(function () {
            //         formatError.style.display = "none";
            //     }, 3000);
            // }
        } else {
            emptyInputError.style.display = "block";
            setTimeout(function () {
                emptyInputError.style.display = "none";
            }, 3000);
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
        // return filteredArray
    }

    return (
        <div style={{ marginTop: "3rem" }} className="container">
            <Header onSubmit={handleSubmit} />

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
