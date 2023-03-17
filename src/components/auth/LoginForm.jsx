import React, { Component } from 'react'; 
import { Form , Button, FormGroup, Input, Label } from 'reactstrap'; 
import { Link, withRouter } from "react-router-dom";

//import Auth from '../../services/auth'

import LoadingIcon from '../partial/LoadingIcon'
import { AuthContext } from '../../context/AuthContext';
 
class Login extends Component { 

    static contextType = AuthContext  

    render() {   
        
        const { Login, emailHandler, passwordHandler, rememberHandler, errorMessage, Loader } = this.context

        return (  
            <>  
            <Form onSubmit={ Login }>   
                     
                <FormGroup className="mb-4">
                    {/* <Label for="Email" className="mr-sm-2">Email</Label> */}
                    <span className="input-group-addon"><i className="fa fa-envelope-o"></i></span>
                    <Input type="email" name="email" placeholder="something@idk.cool" onChange={emailHandler} />
                </FormGroup>

                <FormGroup className="mb-4">
                    {/* <Label for="Password" className="mr-sm-2">Password</Label> */}
                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                    <Input type="password" name="password" placeholder="Password" onChange={passwordHandler} />
                </FormGroup>

                <FormGroup className="pl-4">
                    <Input id="Remember" type="checkbox" onChange={rememberHandler}/> <Label for="Remember">Remember Me</Label>
                </FormGroup>

                {errorMessage ? <p className="text-danger">{errorMessage}</p> : ''}

                <div className="position-relative mb-4">

                    <Button className="FormSubmitButton">Login</Button> 

                    {Loader ? (
                        <div className="LoadingIcon">
                            <LoadingIcon/>
                        </div>
                    ) : ( '' )}
                </div>

                <div className="clearfix"></div>

                <Link className="text-info mb-4 d-block" to={"#"}>Forgot Password? </Link>                 

            </Form> 
            </>           
        )
    }
} 

export default withRouter(Login);