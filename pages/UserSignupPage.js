import React from 'react';
import  Input from '../components/Input'
class UserSignupPage extends React.Component{

    state = {
        name:'',
        password:'',
        passwordRepeat:'',
        pendingApiCall:false,
        errors:{}
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
        this.state.errors.passwordRepeat = 
        this.state.password === value ?
         '':'Password repeat does not match to password'
    };
    onClickSignUp = ()=>{
        const user = {
            name : this.state.name,
            password : this.state.password
        }
        this.props.actions
        .postSignup(user)
        .then((response)=>{
        })
        .catch((apiError)=>{
            if(apiError.response){
                let errors = {...this.state.errors}
                if(apiError.response.data 
                    && apiError.response.data.validationErrors){
                        errors = {...apiError.response.data.validationErrors}
                        console.log(errors)
                    }
                this.setState({pendingApiCall:false,errors})
            }
        })
   
    }
    render(){
        return (
        <div className="container">
            <h1 className="text-center">Sign Up</h1>
            <Input label="Name" placeholder="Your name" 
            value={this.state.name}
            onChange={this.onChangeName}
            hasError={this.state.errors.Name && true}
            error={this.state.errors.Name}></Input>

            <Input label="Password" placeholder="Your password" 
            value={this.state.password} type="password"
            onChange={this.onChangePassword}
            hasError={this.state.errors.Password && true}
            error={this.state.errors.Password}></Input>

            <Input label="Repeat password" placeholder="Repeat Your password" 
            value={this.state.passwordRepeat} type="password"
            onChange={this.onChangeRepeatPassword}
            hasError={this.state.errors.passwordRepeat && true}
            error={this.state.errors.passwordRepeat}></Input>

            <div className="text-center">
                <button className="btn btn-primary" 
                onClick={this.onClickSignUp}
                disabled={this.pendingApiCall ===true||
                this.state.passwordRepeat !==this.state.password}>Sign Up</button>
            </div>
        </div>
        );
    }
}

export default UserSignupPage;