import React from 'react';

const AddBreak = (props) => {
    return (
        <div>
            <h4 className='ml-4 mt-6 text-xl font-medium'>Add a Break</h4>
            <div className='flex justify-between m-4 mr-5 bg-slate-200 p-4 rounded-lg'>
                <button onClick={() => props.handlerAddToBreak(10)} className='w-9 h-9 rounded-full bg-white font-medium'>10s</button>
                <button onClick={() => props.handlerAddToBreak(20)} className='w-9 h-9 rounded-full bg-white font-medium'>20s</button>
                <button onClick={() => props.handlerAddToBreak(30)} className='w-9 h-9 rounded-full bg-white font-medium'>30s</button>
                <button onClick={() => props.handlerAddToBreak(40)} className='w-9 h-9 rounded-full bg-white font-medium'>40s</button>
                <button onClick={() => props.handlerAddToBreak(50)} className='w-9 h-9 rounded-full bg-white font-medium'>50s</button>
            </div>
        </div>
    );
};

export default AddBreak;