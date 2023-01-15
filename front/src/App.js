import "./styles.css";
import Box from "./components/Box/Box";
import Nav from "./components/Nav/Nav";
import { Homepage } from "./components/homepage/Homepage";
import { useEffect, useRef, useState } from "react";

function App() {
  const infoRef = useRef(null);

  const [posData, setPosData] = useState({
    PositiveList: [],
  });

  const [negData, setNegData] = useState({
    NegativeList: [],
  });

  useEffect(() => {
    async function loadTable() {
      let posArr = [];
      let negArr = [];

      await fetch("/data").then((res) =>
        res.json().then((data) => {
          console.log(data);
          for (let i = 0; i < data.PositiveList.length; i++) {
            let dataObjPos = {};
            let dataObjNeg = {};
            dataObjPos["name"] = data.PositiveList[i][0];
            dataObjPos["count"] = data.PositiveList[i][1];
            posArr.push(dataObjPos);

            dataObjNeg["name"] = data.NegativeList[i][0];
            dataObjNeg["count"] = data.NegativeList[i][1];
            negArr.push(dataObjNeg);
          }
          setPosData(posArr);
          setNegData(negArr);
        })
      );
    }

    const btn = document.getElementById("launch");
    btn.addEventListener("click", loadTable);
  });

  return (
    <div>
      <div id="home-container" className="h-screen bg-darkBg">
        <Homepage />
      </div>
      <div ref={infoRef} id="info-page" className="hidden">
        <Nav />
        <div className="flex justify-center items-center">
          <div className="main flex flex-row items-center">
            <Box title="Positive">
              <p>Hi</p>
            </Box>
            <Box id="b2" title="Negative">
              <p>Bye</p>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
