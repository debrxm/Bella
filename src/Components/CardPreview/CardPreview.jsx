import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/selectors'
import Hbone from '../../assets/Hbone.jpg'
import Hb2 from '../../assets/Hb2.jpg'
import Hb3 from '../../assets/Hb3.jpg'
import './CardPreview.scss'
const CardPreview = ({ handleViewWish, user, data, data: { name, selected } }) => {
    const handleViewOneWish = () => {
        if (user) {
            handleViewWish(data)
            return
        }
    }
    return (
        <div className="card-preview" onClick={handleViewOneWish} style={!user ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}>
            <div className="preview-img">
                <img src={selected === 'hb3' ? Hb3 : selected === 'hb2' ? Hb2 : Hbone} alt="HB icon" />
                <p className="name">~{name}~</p>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

export default connect(mapStateToProps)(CardPreview)
