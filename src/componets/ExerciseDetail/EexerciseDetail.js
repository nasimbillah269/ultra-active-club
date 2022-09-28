import React from 'react';

const EexerciseDetail = () => {
    return (
        <div>
            <h4 className='ml-4 mt-10'>Exercise Details</h4>
            <div className='flex justify-around m-4 p-2 rounded-lg bg-slate-200 '>
                <p>Exercise Time:</p>
                <p>200seconds</p>
            </div>
            <div className='flex justify-around m-4 p-2 rounded-lg bg-slate-200 '>
                <p>Break Time:</p>
                <p>20seconds</p>
            </div>
        </div>
    );
};

export default EexerciseDetail;