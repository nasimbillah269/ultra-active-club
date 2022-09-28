import React from 'react';

const Exercise = (props) => {
    console.log(props.exercise);
    const { picture, age, name, time } = props.exercise

    return (
        <div className='bg-gray-300	p-3 rounded-lg'>
            <div >
                <img className='rounded-lg' src={picture} alt="" />
                <p className='text-2xl '>{name}</p>
                <p>For Age : {age}</p>
                <p>Time required : {time}s</p>
            </div>
            <button className='bg-blue-600 w-full py-2 text-white font-bold rounded-lg'>
                Add to list
            </button>
        </div>
    );
};

export default Exercise;