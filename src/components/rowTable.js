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
useEffect(() => {
    // Retrieve the previously stored IDs from local storage
    const storedIds = localStorage.getItem('checkedIds');
    if (storedIds) {
      const parsedIds = JSON.parse(storedIds);
      if (parsedIds.includes(cleaned_data_id)) {
        setIsChecked(true);
      }
    }
  }, [cleaned_data_id]);

  const handleCheckboxsChange = (event) => {
    setIsChecked(event.target.checked);

    // Retrieve the previously stored IDs from local storage
    const storedIds = localStorage.getItem('checkedIds');
    let ids = [];
    if (storedIds) {
      ids = JSON.parse(storedIds);
    }

    if (event.target.checked) {
      ids.push(cleaned_data_id);
    } else {
      ids = ids.filter((id) => id !== cleaned_data_id);
    }

    // Store the updated IDs in local storage
    localStorage.setItem('checkedIds', JSON.stringify(ids));
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
