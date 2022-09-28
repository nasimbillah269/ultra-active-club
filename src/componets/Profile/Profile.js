import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className='flex m-4'>
                <img className='w-16 h-16 rounded-full' src="pic.jpg" alt="" />
                <h4 className='m-2 text-xl font-semibold'>Nasim Billah <br></br><span className='text-yellow'>Rajshahi Bangladesh</span></h4>
            </div>
            <div className='flex justify-around  bg-slate-200 m-4 p-2 rounded-lg'>
                <div >
                    <p>60kg</p>
                    <p >Weight</p>
                </div>
                <div>
                    <p>5.8</p>
                    <p>height</p>
                </div>
                <div>
                    <p>21yrs</p>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;