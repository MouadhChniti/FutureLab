import React from 'react';
import '../styles/rowTable.css'
import { useState, useEffect, useRef } from 'react';

const TableRow = (props) => {
    const { cleaned_data_id, created_at, model } = props.data;

    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      console.log(cleaned_data_id);
      localStorage.setItem("data_id", cleaned_data_id);
      localStorage.setItem("model_name", model);
    }
  };


    return (
        <div>
            <div className='allRow'>
                <div className='idContainer'>
                    <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange}></input>
                    {cleaned_data_id}
                </div>
                <div className='fileNameContainer'>
                    name
                </div>
                <div className='dateCreationContainer'>
                    {created_at}
                </div>
                <div className='modelContainer'>
                    {model}
                </div>

            </div>







        </div>
    );
}

export default TableRow;
