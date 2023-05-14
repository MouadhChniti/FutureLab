import React from 'react';
import '../styles/rowTable.css'

function TableRow(props) {
  const { id ,fileName, dateCreation, model } = props.data;


  return (
    <div>
        <div className='allRow'>
        <div className='idContainer'>
                <input type='checkbox'></input>
                {id}
            </div>
            <div className='fileNameContainer'>
                {fileName}
            </div>
            <div className='dateCreationContainer'>
                {dateCreation}
            </div>
            <div className='modelContainer'>
                {model}
            </div>

        </div>







    </div>
  );
}

export default TableRow;
