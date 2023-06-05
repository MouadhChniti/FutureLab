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

const DashboardSocial = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const data = location.state;
  console.log("data:", data);
  // const subjectsWithCommas = data.tomorrow_subjects.join(', ');

  const predictedData = data.predicted_values;
  const actualData = data.actual_values;

  const canvasRef = useRef(null);

  useEffect(() => {
    console.log("inside use effect", data);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const predictedData = data.predicted_values;
    const actualData = data.actual_values;

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
    numberOfReactions: "",
    shares: "",
    comments: "",
    followers: "",
    posts: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("numberOfReactions", inputValues.numberOfReactions);
    formData.append("shares", inputValues.shares);
    formData.append("comments", inputValues.comments);
    formData.append("followers", inputValues.followers);
    formData.append("posts", inputValues.posts);
    formData.append("data_id", data.data_id);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/social/new_social_model/",
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

      navigate("/dashboardSocial", { state: response.data });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="homeJustifier">
      <Menu />
      {/*{isLoading ? (
          <LoadingScreen />
        ) : (
          <> */}
      <div className="allHomeJust">
        <div className="allHomee">
          <Navbar />
          <div className="dashboardTitleJust">
            <div className="dashboardTitle">Social Model Dashboard</div>
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
                  <div className="tomorrowPredTitle">
                    Tomorrow's posts number prediction
                  </div>
                  <div className="tomorrowVal">
                    <div>
                      {" "}
                      {data.tomorrow_posts_lower} or {data.tomorrow_posts_upper}{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='thirdDashboard'>

                                <div className='tomorrowPredictBox'>
                                    <div className='tomorrowPredTitle'>Tomorrow's posts Subjects prediction</div>
                                    <div className='tomorrowVal'>

                                        <div className='subjectsFont' > {data.tomorrow_subjects.join(', ')} </div>

                                    </div>
                                </div>



                            </div> */}
              <div className="statsTableJust">
                <div className="statsTable">
                  <div className="statsTitle">Execution stats</div>

                  <div className='statDiv'> <div>Execution Duration :</div> <div className='statsValues'> {data.execution_time} s</div></div>

                  <div className='statDiv'><div>Prediction Duration :</div> <div className='statsValues'>{data.prediction_time} s</div></div>

                  {/* <div className='statDiv'><div>Subjects Model Train Duration : </div> <div className='statsValues'>{data.subjects_train_duration} s</div></div> */}

                  {/* <div className='statDiv'><div>Posts prediction Duration : </div> <div className='statsValues'>{data.prediction_duration_posts} s</div></div> */}

                  {/* <div className='statDiv'><div>Subjects prediction Duration : </div><div className='statsValues'>{data.prediction_duration_subject} s</div></div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="predictNewDayJust">
            <div className="predictNewDay">New prediction</div>
          </div>
          <div className="predictTomorrowForm">
            <div className="predictTomorrowFormJust">
              {/* <div> <input type='text' placeholder='Date'></input></div> */}
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Number of reactions"
                    name="numberOfReactions"
                    value={inputValues.numberOfReactions}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Shares"
                    name="shares"
                    value={inputValues.shares}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Comments"
                    name="comments"
                    value={inputValues.comments}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Followers"
                    name="followers"
                    value={inputValues.followers}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Posts"
                    name="posts"
                    value={inputValues.posts}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="predictButtonDash">
                  Predict
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSocial;
