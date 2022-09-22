

import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './SingleGun.css'
const SingleGun = ({ gun, countIncrease }) => {
    const [modalData, setModalData]=useState({})
    // console.log(modalData);
    const { name, img, bullet, capacity, action, price, category } = gun;
    return (
        <div className='gun'>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-80 h-40' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions ">
                        <div className="badge badge-outline">{action}</div>
                        <div className="badge badge-outline">{bullet}</div>
                        <div className='mt-6'>
                            <button onClick={() => countIncrease()} className="btn btn-sm btn-primary mr-4">Add To Cart</button>
                            <label onClick={()=>setModalData(gun)} htmlFor="my-modal-3" className="btn modal-button btn-sm btn-secondary">Details</label>
                            {/* <button className="btn btn-sm btn-secondary">Details</button> */}

                        </div>
                    </div>
                </div>
            </div>
            {
                modalData && <Modal data={modalData} setModalData={setModalData}></Modal>
            }
            
        </div>
    );
};

export default SingleGun;