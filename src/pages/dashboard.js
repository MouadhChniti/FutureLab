import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as React from "react";
import "../styles/dashboard.css";
import socialLogo from "../images/socialLogo.png";
import financialLogo from "../images/financialLogo.png";
import timeSeriesLogo from "../images/timeSeriesLogo.png";
import Navbar from "../components/navbar";
import Menu from "../components/menu";
import { useContext } from "react";
import { DataContext } from "../pages/financialModel";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import LoadingScreen from "../components/loading";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const data = location.state;
  // console.log("dataaa:", data);

  const predictedData = data.y_pred.map(([value]) => value);
  const actualData = data.y_test.map(([value]) => value);

  const canvasRef = useRef(null);

  useEffect(() => {
    console.log("inside use effect", data);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const actualData = data.y_test.map(([value]) => value);
    const predictedData = data.y_pred.map(([value]) => value);

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Actual Data",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: actualData,
          },
          {
            label: "Predicted Data",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(192,75,75,0.4)",
            borderColor: "rgba(192,75,75,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(192,75,75,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(192,75,75,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: predictedData,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [inputValues, setInputValues] = useState({
    open: "",
    high: "",
    low: "",
    close: "",
    volume: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true);
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("open", inputValues.open);
    formData.append("high", inputValues.high);
    formData.append("low", inputValues.low);
    formData.append("close", inputValues.close);
    formData.append("volume", inputValues.volume);
    formData.append("data_id", data.data_id);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/new_financial_model/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Add this header for form data
          },
        }
      );
      setResponse(response.data);
      //console.log(response.data);

      // Store the data_id in local storage
      localStorage.setItem("data_id", response.data.data_id);

      navigate("/dashboard", { state: response.data });
    } catch (error) {
      console.error("Error:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="homeJustifier">
      <Menu />
      <div className="allHomeJust">
        <div className="allHomee">
          <Navbar />
          
          <div className="dashboardTitleJust">
            <div className="dashboardTitle">Financial Model Dashboard</div>
          </div>

          <div className="dashboradPage">
            <div className="secondDashboard">
              <div className="chartPred">
                <div className="chartTitle">Predicted values chart</div>
                <div className="chartPredAct">
                  <canvas ref={canvasRef}></canvas>
                </div>
              </div>
            </div>
            <div className="firstDashboard">
              <div className="thirdDashboard">
                <div className="tomorrowPredictBox">
                  <div className="tomorrowPredTitle">Tomorrow's prediction</div>
                  <div className="tomorrowVal">
                    <div> {data.last_prediction}</div>
                  </div>
                </div>
              </div>
              <div className="statsTableJust">
                <div className="statsTableFm">
                  <div className="statsTitle">Execution stats</div>

                  <div className="statDiv">
                    {" "}
                    <div> Train Duration :</div>{" "}
                    <div> {data.execution_time} s </div>
                  </div>

                  <div className="statDiv">
                    <div>Prediction Duration :</div> <div>{data.prediction_time} s</div>
                  </div>

                  {/* <div className="statDiv">
                    <div>Finetune Duration : </div> m
                  </div>

                  <div className="statDiv">
                    <div>Finetune Duration : </div> m
                  </div>

                  <div className="statDiv">
                    <div>Finetune Duration : </div>m
                  </div>

                  <div className="statDiv">
                    <div>Finetune Duration : </div> m
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="predictNewDayJust">
            <div className="predictNewDay">New prediction</div>
          </div>
          <div className="predictTomorrowForm">
            <div className="predictTomorrowFormJust">
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Open"
                    name="open"
                    value={inputValues.open}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="High"
                    name="high"
                    value={inputValues.high}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Low"
                    name="low"
                    value={inputValues.low}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Close"
                    name="close"
                    value={inputValues.close}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Volume"
                    name="volume"
                    value={inputValues.volume}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="predictButtonDash">
                  Predict
                </button>
              </form>
            </div>

            {/* <div className="predictTomorrowFormJust">
              <div>
                {" "}
                <input type="text" placeholder="Open"></input>
              </div>
              <div>
                {" "}
                <input type="text" placeholder="High"></input>
              </div>
              <div>
                {" "}
                <input type="text" placeholder="Low"></input>
              </div>
              <div>
                {" "}
                <input type="text" placeholder="Close"></input>
              </div>
              <div>
                {" "}
                <input type="text" placeholder="Volume"></input>
              </div>
              <button className="predictButtonDash">Predict</button>
            </div> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
