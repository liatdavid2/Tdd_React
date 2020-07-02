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
    render(){
        return (
        <div>
            <h1>Sign Up</h1>
            <div>
                <input placeholder="Your name" 
                value={this.state.name}
                onChange={this.onChangeName}></input>
            </div>
            <div>
                <input placeholder="Your password" type="password"
                value={this.state.password} onChange={this.onChangePassword}></input>
            </div>
            <div>
                <input placeholder="Repeat Your password" type="password"
                value={this.state.passwordRepeat} onChange={this.onChangeRepeatPassword}></input>
            </div>
            <div>
                <button>Sign Up</button>
            </div>
        </div>
        );
    }
}

export default UserSignupPage;