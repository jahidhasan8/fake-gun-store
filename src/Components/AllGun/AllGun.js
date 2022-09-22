

import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({countIncrease}) => {

    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (

        <div className='mt-8'>
           <div className='my-8'>
           <h1 className='text-4xl text-center font-bold mt-6'>Welcome To Fake Gun Store</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cumque velit laborum maiores minima est hic tenetur modi corrupti eum! Asperiores nesciunt voluptas possimus, rerum optio inventore iure sequi ullam, in facilis ipsum officia, eum earum delectus ad unde porro.</p>
           </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>

                {
                    guns.map(gun => <SingleGun gun={gun} countIncrease={countIncrease} key={gun.id}></SingleGun>)
                }
            </div>
        </div>


    );
};

export default AllGun;