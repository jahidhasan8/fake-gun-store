

import React from 'react';

const Modal = ({data, setModalData}) => {
    const{name, img, bullet, capacity, action, price, category }=data
    // console.log(data);
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={()=>setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <img className='w-full h-full' src={img} alt="" />
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                     <div className="text-lg font-bold">
                     <h4>Capacity: {capacity}</h4>
                     <h4>Category : {category}</h4>
                     <h4 >Price : {price}</h4>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;