import React, { useEffect, useState } from 'react';
import AddBreak from '../AddBreak/AddBreak';
import Exercise from '../Exercise/Exercise';
import EexerciseDetail from '../ExerciseDetail/EexerciseDetail';
import Profile from '../Profile/Profile';
import Question from '../Questions/Question ';
import { addToDb, } from '../utilites/utilitise';



const Exercises = () => {

    const [exercises, setExercise] = useState([]);
    const [time, setTime] = useState([0])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setExercise(data))
    }, [])
    const handlerAddToList = (exerciseTime) => {
        const newTime = time + exerciseTime;
        const newExerciseTime = parseInt(newTime);
        setTime(newExerciseTime)

    }
    const [seconds, setSeconds] = useState([0]);
    const handlerAddToBreak = (time) => {
        setSeconds(time)
        addToDb(time)


        // console.log('clicked', time);
    }

    return (
        <div>
            <div className='grid grid-cols-12 gap-6 bg-slate-200 pb-10'>

                <div className='container mx-auto col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-9'>
                    <div className='ml-16'>

                        <div className='flex m-4'>
                            <img className='w-10 h-10 rounded-full' src="logo.png" alt="" />
                            <h4 className='m-2 text-2xl text-fuchsia-600'>SPECIAL-HELTHY-CLUB</h4>
                        </div>
                        <h5 className='mb-4 font-semibold'>Select today’s exercise</h5>
                    </div>
                    <div className='grid sm:grid-cols-1 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 mx-16'>
                        {
                            exercises.map(exercise => <Exercise
                                key={exercise.id}
                                exercise={exercise}
                                handlerAddToList={handlerAddToList}

                            ></Exercise>)
                        }

                    </div>

                </div>
                <div className='bg-white col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-3'>
                    <Profile></Profile>
                    <AddBreak handlerAddToBreak={handlerAddToBreak}></AddBreak>
                    <EexerciseDetail time={time} seconds={seconds}></EexerciseDetail>

                </div>
            </div>
            <div className='m-12'>
                <Question></Question>
            </div>
        </div>
    );
};

export default Exercises;