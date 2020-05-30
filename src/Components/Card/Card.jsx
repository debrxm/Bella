import React from 'react'
import Hbone from '../../assets/Hbone.jpg'
import Hb2 from '../../assets/Hb2.jpg'
import Hb3 from '../../assets/Hb3.jpg'
import './Card.scss'
const Card = ({ children, data: { name, selected } }) => {
    const handleViewOneWish = () => {
        document.querySelectorAll('.cardImg').forEach(item => {
            item.classList.toggle('rotp')
        })
        document.querySelectorAll('.cardText').forEach(item => {
            item.classList.toggle('rot')
        })
    }
    return (
        <div>
            <div className="card" onClick={handleViewOneWish}>
                <div className="cardImg">
                    <img src={selected === 'hb3' ? Hb3 : selected === 'hb2' ? Hb2 : Hbone} alt="HB icon" />
                </div>
                <div className="cardText" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.7)), url(${selected === 'hb3' ? Hb3 : selected === 'hb2' ? Hb2 : Hbone})` }}>
                    <div className="text">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
