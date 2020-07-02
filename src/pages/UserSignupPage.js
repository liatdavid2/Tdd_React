import React from 'react';

class UserSignupPage extends React.Component{

    state = {
        name:'',
        password:'',
        passwordRepeat:''
    }    
    onChangeName = (event) =>{
        const value = event.target.value;
        this.setState({name:value})
    };
    onChangePassword = (event) =>{
        const value = event.target.value;
        this.setState({password:value})
    };
    onChangeRepeatPassword = (event) =>{
        const value = event.target.value;
        this.setState({passwordRepeat:value})
    };
    onClickSignUp = ()=>{
        const user = {
            name : this.state.name,
            password : this.state.password
        }
        this.props.actions.postSignup(user)
    }
    render(){
        return (
        <div className="container">
            <h1 className="text-center">Sign Up</h1>
            <div className="col-12 mb-3">
                <label>Name</label>
                <input placeholder="Your name" className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}></input>
            </div>
            <div className="col-12 mb-3">
                <label>Password</label>
                <input placeholder="Your password" type="password" className="form-control"
                value={this.state.password} onChange={this.onChangePassword}></input>
            </div>
            <div className="col-12 mb-3">
                <label>Reapet password</label>
                <input placeholder="Repeat Your password" type="password" className="form-control"
                value={this.state.passwordRepeat} onChange={this.onChangeRepeatPassword}></input>
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={this.onClickSignUp}>Sign Up</button>
            </div>
        </div>
        );
    }
}

export default UserSignupPage;