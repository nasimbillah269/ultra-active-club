import React from 'react';

const AddBreak = () => {
    return (
        <div>
            <h4>Add a Break</h4>
            <div className='flex justify-between m-4 mr-5 bg-slate-200 p-4 rounded-lg'>
                <button className='w-9 h-9 rounded-full bg-white'>10s</button>
                <button className='w-9 h-9 rounded-full bg-white'>20s</button>
                <button className='w-9 h-9 rounded-full bg-white'>30s</button>
                <button className='w-9 h-9 rounded-full bg-white'>40s</button>
                <button className='w-9 h-9 rounded-full bg-white'>50s</button>
            </div>
        </div>
    );
};

export default AddBreak;