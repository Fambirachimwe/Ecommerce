import React from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{

    constructor(){
        super();

        this.state = {
            displayName : '',
            email: '',
            password: '',
            confirmPassword:''

        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match ");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState({    // clearing your signup form 
                displayName : '',
                email: '',
                password: '',
                confirmPassword:''
            })


        } catch(err){
            console.log(err);
            
        }

    }

    handleChange = e =>{
       const {name, value} = e.target;

       this.setState({[name]: value})

    }


    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an accoune</h2>
                <span>Sign up with your email and password </span>

                <form className="sign-up" onSubmit={this.handleSubmit}>

                    <FormInput  type="text" name="displayName" value={displayName} onChange={this.handleChange} label='Display Name' requied/>
                    <FormInput  type="email" name="email" value={email} onChange={this.handleChange} label='Email' requied/>
                    <FormInput  type="password" name="password" value={password} onChange={this.handleChange} label='Password' requied/>
                    <FormInput  type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label='Confirm Password' requied/>

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignUp;