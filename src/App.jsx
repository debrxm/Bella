import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestore } from './firebase/firebase.utils'
import { ToastContainer, toast } from 'react-toastify'
import { Route, Switch } from 'react-router-dom';
import { setWishes } from './redux/actions';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import WishHer from './Pages/WishHer/WishHer';
import './App.css';

class App extends Component {
  showNoty = (type, message) => {
    switch (type) {
      case 0:
        toast.warning(message)
        break;
      case 1:
        toast.success(message)
        break;
      default:
        break;
    }
  }
  componentDidMount() {
    const wishesRef = firestore
      .collection('wishes')
      .orderBy('arrange', 'desc');
    wishesRef.onSnapshot(async (snapshot) => {
      const wishes = [];
      snapshot.docs.forEach((doc) => {
        wishes.push(doc.data());
      });
      this.props.setWishes(wishes)
    });
  }
  render() {
    return (
      <div>
        <ToastContainer autoClose={2000}
          hideProgressBar={true}
        />
        <Switch>
          <Route
            exact
            path='/'
            render={props => <Home {...props} />} />
          <Route
            exact
            path='/wish-her'
            render={props => <WishHer {...props} />} />
          <Route
            exact
            path='/login'
            render={props => <Login showNoty={this.showNoty} {...props} />} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setWishes: wishes => dispatch(setWishes(wishes))
});

export default connect(null, mapDispatchToProps)(App);
