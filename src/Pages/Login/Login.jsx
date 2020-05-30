import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setCurrentUser } from '../../redux/actions';
import FormInput from '../../Components/form-input/form-input';
import CustomButton from '../../Components/custom-button/custom-button';
import loader from '../../assets/loader.gif';

import './Login.scss';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Hikmah',
            password: '',
            errorMessage: '',
            isShowPassword: false,
            isLoading: false,
        };
    }
    handleToggleShowPassword = () =>
        this.setState({ isShowPassword: !this.state.isShowPassword });
    handleSubmit = async (event) => {
        event.preventDefault();
        const { name, password } = this.state;

        this.setState({ isLoading: true });
        if (name.toLowerCase() === 'hikmah' && password.toLowerCase() === 'bella') {
            this.props.setCurrentUser({ name })
            this.setState({ isLoading: false });
            this.props.history.push('/')
            return
        }
        this.setState({ name: '', password: '', isLoading: false, errorMessage: 'Incorrect Password' })
    };
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            errorMessage: '',
        });
    };
    render() {
        const {
            name,
            password,
            errorMessage,
            isShowPassword,
            isLoading,
        } = this.state;
        return (
            <div className="sign-in">
                <div>
                    {errorMessage !== '' ? (
                        <span className="error">{errorMessage}</span>
                    ) : null}
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            type="name"
                            name="name"
                            value={name}
                            required
                            handleChange={this.handleChange}
                            label="Name"
                        />
                        <FormInput
                            type={isShowPassword ? 'text' : 'password'}
                            name="password"
                            value={password}
                            required
                            handleChange={this.handleChange}
                            label="Password"
                            toggleShowPassword={this.handleToggleShowPassword}
                            isShowPass={this.state.isShowPassword}
                        />
                        <div className="buttons">
                            <CustomButton type="button" onClick={this.handleSubmit}>
                                Sign In {isLoading ? <img src={loader} alt="Loader" /> : null}
                            </CustomButton>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn))