import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className='flex m-4'>
                <img className='w-16 h-16 rounded-full' src="pic.jpg" alt="" />
                <h4 className='m-2 '><span className='font-medium text-xl'>Nasim Billah</span><br></br>Rajshahi Bangladesh</h4>
            </div>
            <div className='flex justify-around  bg-slate-200 m-4 p-2 rounded-lg'>
                <div >
                    <p> <span className='font-bold text-xl'>60</span>kg</p>
                    <p >Weight</p>
                </div>
                <div>
                    <p className='font-bold text-xl'>5.8</p>
                    <p>height</p>
                </div>
                <div>
                    <p><span className='font-bold text-xl'>21</span>yrs</p>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;