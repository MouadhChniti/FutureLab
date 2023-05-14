
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


import "aos/dist/aos.css";



const Datasets = (props) => {


    const data = [{ id: 1, fileName: 'name1', dateCreation: '12/05/2023', model: 'Financial Model' },
    { id: 2, fileName: 'name2', dateCreation: '12/05/2023', model: 'Financial Model' },
    { id: 3, fileName: 'name3', dateCreation: '12/05/2023', model: 'Financial Model' },
    { id: 4, fileName: 'name4', dateCreation: '12/05/2023', model: 'Financial Model' },
    { id: 5, fileName: 'name5', dateCreation: '12/05/2023', model: 'Financial Model' },
    { id: 6, fileName: 'name6', dateCreation: '12/05/2023', model: 'Financial Model' },
    { id: 7, fileName: 'name7', dateCreation: '12/05/2023', model: 'Financial Model' },
    { id: 8, fileName: 'name8', dateCreation: '12/05/2023', model: 'Financial Model' },
    { id: 9, fileName: 'name9', dateCreation: '12/05/2023', model: 'Financial Model' },
    { id: 10, fileName: 'name10', dateCreation: '12/05/2023', model: 'Financial Model' },
    ];






    return (
        <div className='homeJustifier'>
            <Menu />
            <div className='allHomeJust'>
                <div className='allHomee'>
                    <Navbar />
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
                                        <div className='openButton'>Open</div>
                                        <div className='dataEditButton'>Edit</div>
                                        <div className='deleteButton'>Delete</div>
                                    </div>
                                </div>
                            </div>

                            <div className='rowTitles'>
                                <div className='idTitle'>ID</div>
                                <div className='fileNameTitle'>Files Name</div>
                                <div className='dateCreationTitle'>Date of creation</div>
                                <div className='modelTitle'>Model</div>
                            </div>

                            {data.map(item => (
                                <TableRow key={item.id} data={item} />
                            ))}


                        </div>


                    </div>



                </div>
            </div>

        </div>


    );
};



export default Datasets;