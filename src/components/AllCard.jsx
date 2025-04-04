import React from 'react'
// import rasm from '../image/basket.png'
import { FaShoppingCart } from 'react-icons/fa';
function AllCard({ rusum, nomi, rasmi,viloyat }) {
  return (
    <div className='allCard'>
      <div className="container">
        
        <div className="allCard__card">
          <div className="allImg">
            <img height={200} width={350} src={rasmi} alt="" />
          </div>
          <div className="all_content">
            <div className="all_mashina">
              <p>{rusum}:</p>
              <h4>{nomi}</h4>
            </div>
            <div className="all_joyi">
              <p>viloyat:</p>
              <h4>{viloyat}</h4>
            </div>
            <div className="all_tell">
              <p>telefon nomer:</p>
              <h4>+9989******</h4>
            </div>
            <div className="narx">
              <p>kun/oy/yil:</p>
              <h4>**** so'm/***so'm/***so'm</h4>
            </div>
            <div className="all_ijara">
             <button className='all_btn'  > <FaShoppingCart size={25}/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCard
