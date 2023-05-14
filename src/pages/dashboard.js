
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import * as React from 'react';
import '../styles/dashboard.css'
import socialLogo from '../images/socialLogo.png'
import financialLogo from '../images/financialLogo.png'
import timeSeriesLogo from '../images/timeSeriesLogo.png'
import Navbar from '../components/navbar'
import Menu from '../components/menu'
import { useContext } from 'react';
import { DataContext } from '../pages/financialModel';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import "aos/dist/aos.css";



const Dashboard = (props) => {



  const { state } = useLocation();
  const { data } = state;
  console.log(data)





  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const actualData = [65, 59, 80, 81, 56, 55, 40];
    const predictedData = [50, 70, 65, 82, 60, 50, 30];

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Actual Data',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: actualData,
          },
          {
            label: 'Predicted Data',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(192,75,75,0.4)',
            borderColor: 'rgba(192,75,75,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(192,75,75,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(192,75,75,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
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
  }, []);


  return (
    <div className='homeJustifier'>
      <Menu />
      <div className='allHomeJust'>
        <div className='allHomee'>
          <Navbar />
          <div className='dashboardTitleJust'>
            <div className='dashboardTitle'>Dashboard</div>
          </div>

          <div className='dashboradPage'>



            <div className='secondDashboard'>
              <div className='chartPred'>
                <div className='chartTitle'>Predicted values chart</div>
                <div className='chartPredAct'>
                  <canvas ref={canvasRef}></canvas>
                </div>



              </div>
            </div>
            <div className='firstDashboard'>
              <div className='thirdDashboard'>

                <div className='tomorrowPredictBox'>
                  <div className='tomorrowPredTitle'>Tomorrow's prediction</div>
                  <div className='tomorrowVal'>
                    {data && data.map((item) => (
                      <div key={item.id}> {item.tomorrowPredict}</div>
                    ))}
                  </div>
                </div>


              </div>
              <div className='statsTableJust'>
                <div className='statsTable'>
                  <div className='statsTitle'>Execution stats</div>
                  {data && data.map((item) => (
                    <div key={item.id} className='statDiv'> <div> Train Duration :</div> <div>{item.trainDuration} s </div></div>

                  ))}
                  {data && data.map((item) => (

                    <div key={item.id} className='statDiv'><div>Prediction Duration :</div> <div>{item.predictDuration} s</div></div>
                  ))}
                  {data && data.map((item) => (

                    <div key={item.id} className='statDiv'><div>Finetune Duration : </div>{item.fineTuneDuration} m</div>
                  ))}
                  {data && data.map((item) => (

                    <div key={item.id} className='statDiv'><div>Finetune Duration : </div>{item.fineTuneDuration} m</div>
                  ))}
                  {data && data.map((item) => (

                    <div key={item.id} className='statDiv'><div>Finetune Duration : </div>{item.fineTuneDuration} m</div>
                  ))}
                  {data && data.map((item) => (

                    <div key={item.id} className='statDiv'><div>Finetune Duration : </div>{item.fineTuneDuration} m</div>
                  ))}

                </div>
              </div>


            </div>

          </div>
          <div className='predictNewDayJust'>
            <div className='predictNewDay'>New prediction</div></div>
          <div className='predictTomorrowForm'>

            <div className='predictTomorrowFormJust'>
              <div> <input type='text' placeholder='Open'></input></div>
              <div> <input type='text' placeholder='High'></input></div>
              <div> <input type='text' placeholder='Low'></input></div>
              <div> <input type='text' placeholder='Close'></input></div>
              <div> <input type='text' placeholder='Volume'></input></div>
              <button className='predictButtonDash'>Predict</button>
            </div>

          </div>

        </div>





      </div>

    </div>


  );
};



export default Dashboard;