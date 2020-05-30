import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectWishes } from '../../redux/selectors'
import close from '../../assets/close.svg'
import Card from '../../Components/Card/Card'
import './Wishes.scss'
import CardPreview from '../../Components/CardPreview/CardPreview';
const Wishes = ({ wishes }) => {
    const [state, setState] = useState({ data: null })
    const handleViewWish = (data) => {
        setState({ data })
    }
    const handleHideWish = () => {
        setState({ data: null })
    }
    state.data
        ? (document.documentElement.style.overflowY = 'hidden')
        : (document.documentElement.style.overflowY = 'scroll');
    return (
        <>
            <div className="wishes">
                <CardPreview data={{ name: 'Ibrahim', wish: 'Happy Birthday Baby', selected: 'hb1' }} handleViewWish={handleViewWish} />
                <CardPreview data={{ name: 'Ibrahim', wish: 'Happy Birthday Baby', selected: 'hb3' }} handleViewWish={handleViewWish} />
                <CardPreview data={{ name: 'Ibrahim', wish: 'Happy Birthday Baby', selected: 'hb2' }} handleViewWish={handleViewWish} />
            </div>
            {state.data ? <div className="wish-preview">
                <img src={close} alt="close icon" className="close-icon" onClick={handleHideWish} />
                <span style={{ color: '#ffffff' }}>Click / Tap to read wish</span>
                <Card data={state.data} preview>
                    {<p>{state.data.wish}</p>}
                </Card>
            </div> : null}
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    wishes: selectWishes
});

export default connect(mapStateToProps)(Wishes)
