import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import CSVReader from "react-csv-reader";
import ReactDOM from "react-dom";
import uploadImg from "../images/uploadImg.png";
import formFmImg from "../images/financialModelImg.png";
import backIcon from "../images/backIcon.png";
import "../styles/financialModel.css";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Menu from "../components/menu";
import Dashboard from "./dashboard";
import { Navigate } from "react-router-dom/dist";
import LoadingScreen from "../components/loading";

const fakeResponse = {
  data: [
    { id: 1, name: "Item 1", date: "11/11/2022" },
    { id: 2, name: "Item 2", date: "12/11/2022" },
    { id: 3, name: "Item 3", date: "13/11/2022" },
  ],
};

export const DataContext = createContext([]);

const Fm = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [datasetName, setDatasetName] = useState("");

  const handleInputChange = (event) => {
    setDatasetName(event.target.value);
  };


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const selectedValue = document.querySelector(
      'input[name="fillMissValues"]:checked'
    ).value;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fillMissValues", selectedValue);
    formData.append("datasetName", datasetName);

    console.log(formData.selectedValue)
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:8000/api/financial_model/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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

  function CheckBox({ label, isChecked, onChange }) {
    return (
      <label>
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        {label}
      </label>
    );
  }

  const [isChecked, setIsChecked] = useState(false);

  const [params, setParams] = useState({
    file: "",
    fillMissValues: "",
  });

  const handleCheckChange = (event) => {
    setIsChecked(event.target.checked);
    setParams((prevParams) => ({
      ...prevParams,
      finetune: event.target.checked,
    }));
  };

  const [selectedValue, setSelectedValue] = React.useState("choose");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setParams((prevParams) => ({
      ...prevParams,
      paramsChoice: event.target.value,
    }));
  };

  const handleChangeclean = (event) => {
    setSelectedValueb(event.target.value);
    setParams((prevParams) => ({
      ...prevParams,
      fillMissValues: event.target.value,
    }));
  };

  const [selectedValueb, setSelectedValueb] = React.useState("d");

  function handleFileLoaded(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const csvData = event.target.result;
      setParams((prevParams) => ({ ...prevParams, dataset: csvData }));
    };
    reader.readAsText(file);
  }

  function fetchSomeData() {
    return new Promise((resolve) => {
      const fakeResponse = {
        chartData: {
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
              label: "Sales",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgba(75,192,192,1)",
            },
          ],
        },
        otherData: {
          foo: "bar",
          baz: 123,
          qux: true,
        },
      };
      setTimeout(() => {
        resolve(fakeResponse);
      }, 1000);
    });
  }

  const handleChangeopt = (event) => {
    const { optimizer, value } = event.target;
    setParams((prevState) => ({
      ...prevState,
      optimizer: value,
    }));
  };



  return (
    <div className="fmJustifier">
      <Menu />

      <div className="bigTitleFm">
        <Navbar />
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <div className="titleback">
              <div>
                <Link to="/home">
                  <img src={backIcon} id="backIcon"></img>
                </Link>
              </div>
              <div>Financial Model Training</div>
            </div>
            <div className="allFinancial">
              <div className="leftFmForm">
                <img src={formFmImg} id="formFmImg"></img>
              </div>

              <form className="formFm" onSubmit={handleSubmit}>
                <div className="financialjust">
                  <div className="titleFm">Financial Model training</div>
                  <div className="datasetFm">
                    <div>Upload your dataset: </div>
                    <label htmlFor="fileUpload">
                      <img src={uploadImg} id="uploadImg" />
                    </label>
                    <input
                      id="fileUpload"
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </div>


                  <div className="missingFm">
                    <div>Missing Data:</div>

                    <Radio
                      checked={selectedValueb === "drop"}
                      onChange={handleChangeclean}
                      value="drop"
                      name="fillMissValues"
                      inputProps={{ "aria-label": "C" }}
                    //disabled={selectedValue == 'default'}
                    />
                    <label>Delete</label>

                    <Radio
                      checked={selectedValueb === "avg"}
                      onChange={handleChangeclean}
                      value="avg"
                      name="fillMissValues"
                      inputProps={{ "aria-label": "D" }}
                    //disabled={selectedValue == 'default'}
                    />
                    <label>Average</label>

                  </div>
                  <div className="datasetNameDiv"><input type="text" placeholder="Dataset name"  id="datasetName"
                  value={datasetName}
                  onChange={handleInputChange}></input> </div>


                  <div className="trainhome">
                    <button onSubmit={handleSubmit}>Train your Model</button>
                  </div>
                </div>
              </form>

            </div>
          </>)}
      </div>

    </div>
  );
};

export default Fm;
