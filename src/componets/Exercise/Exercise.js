import React from 'react';

const Exercise = (props) => {
    // console.log(props.exercise);
    const { picture, age, name, time, } = props.exercise

    return (
        <div className='bg-white shadow-lg p-3 rounded-lg'>
            <div >
                <img className='rounded-lg' src={picture} alt="" />
                <p className='text-xl font-medium mt-2 mb-2'>{name}</p>
                <p className='font-semibold mb-2'>For Age : {age}</p>
                <p className='mb-2 font-medium'>Time required : {time}s</p>
            </div>
            <button onClick={() => props.handlerAddToList(time)} className='bg-blue-600 w-full py-2 text-white font-bold rounded-lg'>
                Add to list
            </button>
        </div>
    );
};

export default Exercise;