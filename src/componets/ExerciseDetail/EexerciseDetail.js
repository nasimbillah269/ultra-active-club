// import React, { useState } from 'react';

import Swal from "sweetalert2";
const EexerciseDetail = (props) => {
    const handlerSweetAlert = () => {
        Swal.fire(
            'Activity Completed',
            'You clicked the button!',
            'success'
        )
    }
    // console.log(props.time);
    return (
        <div>
            <h4 className='ml-4 mt-10 text-xl font-medium'>Exercise time</h4>
            <div className='flex justify-around m-4 p-2 rounded-lg bg-slate-200 '>
                <p className="font-medium">Exercise Time:</p>
                <p>{props.time} seconds</p>
            </div>
            <div className='flex justify-around m-4 p-2 rounded-lg bg-slate-200 '>
                <p className="font-medium">Break Time:</p>
                <p>{props.seconds} seconds</p>
            </div>
            <button onClick={handlerSweetAlert} className='bg-blue-600  py-2 px-16 ml-6 mt-6 text-white font-bold rounded-lg'>
                Activity Completed
            </button>
        </div>
    );
};

export default EexerciseDetail;