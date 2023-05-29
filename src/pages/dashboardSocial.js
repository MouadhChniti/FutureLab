
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
import LoadingScreen from '../components/loading';
import "aos/dist/aos.css";



const DashboardSocial = (props) => {



    const location = useLocation();
    const data = location.state;
    console.log('data:', data)
    const subjectsWithCommas = data.tomorrow_subjects.join(', ');


    const predictedData = data.predicted_values;
    const actualData = data.actual_values;

    const canvasRef = useRef(null);

    useEffect(() => {

        console.log('inside use effect', data)
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const predictedData = data.predicted_values;
        const actualData = data.actual_values;


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
    }, [data]);


    return (
        <div className='homeJustifier'>
             <Menu />
            {/*{isLoading ? (
          <LoadingScreen />
        ) : (
          <> */}
            <div className='allHomeJust'>
                <div className='allHomee'>
                    <Navbar />
                    <div className='dashboardTitleJust'>
                        <div className='dashboardTitle'>Social Model Dashboard</div>
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
                                    <div className='tomorrowPredTitle'>Tomorrow's posts number prediction</div>
                                    <div className='tomorrowVal'>

                                        <div > {data.tomorrow_posts_lower} or {data.tomorrow_posts_upper} </div>

                                    </div>
                                </div>



                            </div>
                            <div className='thirdDashboard'>

                                <div className='tomorrowPredictBox'>
                                    <div className='tomorrowPredTitle'>Tomorrow's posts Subjects prediction</div>
                                    <div className='tomorrowVal'>

                                        <div className='subjectsFont' > {data.tomorrow_subjects.join(', ')} </div>

                                    </div>
                                </div>



                            </div>
                            <div className='statsTableJust'>
                                <div className='statsTable'>
                                    <div className='statsTitle'>Execution stats</div>

                                    <div className='statDiv'> <div> Social Modlel Train Duration :</div> <div className='statsValues'> {data.Social_train_duration} s </div></div>




                                    <div className='statDiv'><div>Posts Model Train Duration :</div> <div className='statsValues'>{data.Posts_train_duration} s</div></div>



                                    <div className='statDiv'><div>Subjects Model Train Duration : </div> <div className='statsValues'>{data.subjects_train_duration} s</div></div>



                                    <div className='statDiv'><div>Posts prediction Duration : </div> <div className='statsValues'>{data.prediction_duration_posts} s</div></div>



                                    <div className='statDiv'><div>Subjects prediction Duration : </div><div className='statsValues'>{data.prediction_duration_subject} s</div></div>



                                </div>
                            </div>


                        </div>

                    </div>
                    <div className='predictNewDayJust'>
                        <div className='predictNewDay'>New prediction</div></div>
                    <div className='predictTomorrowForm'>

                        <div className='predictTomorrowFormJust'>
                            <div> <input type='text' placeholder='Date'></input></div>
                            <div> <input type='text' placeholder='Total number of reaction'></input></div>
                            <div> <input type='text' placeholder='Total shares'></input></div>
                            <div> <input type='text' placeholder='Total comments'></input></div>
                            <div> <input type='text' placeholder='number of followers'></input></div>
                            <div> <input type='text' placeholder='Number of posts'></input></div>
                            <button className='predictButtonDash'>Predict</button>
                        </div>

                    </div>

                </div>





            </div>
            {/* </>)} */}
        </div>


    );
};



export default DashboardSocial;