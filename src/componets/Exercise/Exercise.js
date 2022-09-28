import React from 'react';

const Exercise = (props) => {
    console.log(props.exercise);
    const { picture, age, name, time } = props.exercise

    return (
        <div >
            <div>
                <img src={picture} alt="" />
                <p className='text-2xl'>{name}</p>
                <p>For Age : {age}</p>
                <p>Time required : {time}s</p>
            </div>
            <button >
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Exercise;