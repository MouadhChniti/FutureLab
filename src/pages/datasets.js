
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/datasets.css'
import socialLogo from '../images/socialLogo.png'
import financialLogo from '../images/financialLogo.png'
import timeSeriesLogo from '../images/timeSeriesLogo.png'
import Navbar from '../components/navbar'
import Menu from '../components/menu'
import { useContext } from 'react';
import { DataContext } from '../pages/financialModel';
import Search from '../images/Search.png'
import TableRow from '../components/rowTable';
import { useNavigate } from "react-router-dom/dist";
import LoadingScreen from '../components/loading';

import "aos/dist/aos.css";



const Datasets = (props) => {
  const navigate = useNavigate();

  const [response, setResponse] = useState(null);

  useEffect(() => {
    const customEvent = {
      preventDefault: () => {
        // Your custom code here to handle the prevention of default behavior
      },
    };

    const handleGetData = async (event) => {
      try {
        // customEvent.preventDefault();
        const token = localStorage.getItem('token');

        const response = await axios.post(
          'http://localhost:8000/api/get_financial_data/', {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setResponse(response.data);
        console.log(response.data.financial_data)


        // Store the data_id in local storage

      } catch (error) {
        console.error('Error:', error);
      }
    };

    handleGetData();
  }, []);



  const handleClick = () => {
    const cleaned_data_id = localStorage.getItem("data_id");
    const model_name = localStorage.getItem("model_name");
    if (model_name == "financial model") {
      axios.get('http://localhost:8000/api/get_financial_data_byid/', {
        params: {
          cleaned_data_id: cleaned_data_id,
        },
      })
        .then(response => {
          console.log(response.data);

          navigate("/dashboard", { state: response.data });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    if (model_name == "social model") {
      axios.get('http://localhost:8000/api/social/get_social_data_byid/', {
        params: {
          cleaned_data_id: cleaned_data_id,
        },
      })
        .then(response => {
          console.log(response.data);
          navigate("/dashboardSocial", { state: response.data });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }


  const handleDelete = () => {
    // const checkedIds = localStorage.getItem("checkedIds");
    const cleaned_data_id = localStorage.getItem("data_id");
    const model_name = localStorage.getItem("model_name");

    if (model_name == "financial model") {
      axios.post('http://localhost:8000/api/delete_cleaned_data/', { cleaned_data_id: cleaned_data_id })
        .then((response) => {
          console.log(response.data.message); // Success message received from the Django view
        })
        .catch((error) => {
          console.error('Error deleting cleaned data:', error);
        });
    }
    if (model_name == "social model") {
      axios.post('http://localhost:8000/api/social/delete_cleaned_data_social/', { cleaned_data_id: cleaned_data_id })
        .then((response) => {
          console.log(response.data.message); // Success message received from the Django view
        })
        .catch((error) => {
          console.error('Error deleting cleaned data:', error);
        });
    }
  
};

const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the data is loaded
    }, 3000);
  }, []);








return (
  <div className='homeJustifier'>
    <Menu />
    <div className='allHomeJust'>
      <div className='allHomee'>
        <Navbar />
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
        <div className='datasetsTitleJust'>
          <div className='datasetsTitle'>
            Files
          </div>
        </div>
        <div className='datasetsContainer'>
          <div className='datasetsTable'>
            <div className='datasetsHeaderJust'>
              <div className='datasetsHeader'>
                <div className='searchData'>
                  <div className='searchIconContainer'><img src={Search} id='searchIcon'></img></div>
                  <input type='text' placeholder='Search Users by Name, Email or Date' id='searchInput' name='searchInput'></input> </div>
                <div className='datasetButtons'>
                  <button className='openButton' onClick={handleClick}>Open</button>
                  <div className='dataEditButton'>Edit</div>
                  <div className='deleteButton' onClick={handleDelete}>Delete</div>
                </div>
              </div>
            </div>

            <div className='rowTitles'>
              <div className='idTitle'>ID</div>
              <div className='fileNameTitle'>Files Name</div>
              <div className='dateCreationTitle'>Date of creation</div>
              <div className='modelTitle'>Model</div>
            </div>

            {response &&
              response.financial_data &&
              response.financial_data.map((item) => {
                return <TableRow key={item.cleaned_data_id} data={item} />;
              })}



          </div>


        </div>


        </> )}
      </div>
    </div>

  </div>


);
};



export default Datasets;