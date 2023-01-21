import "./Register.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios'
import { useForm } from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';
import { Navigate } from 'react-router-dom';
import crypto from "crypto-js";


export default function Register() {

    const [error, setErrors] = useState([]);
    const [message, setSuccess] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [md5_hashed_text, setMd5HashedText] = useState("");

    const onSubmit = (data) => {
        const username = data.firstName;
        const email = data.email;
        const password = data.password;
        setMd5HashedText(
            crypto.MD5(password).toString()
        );
        AddUser(username, email, password, md5_hashed_text);
    }


    const AddUser = (username, email, password, md5_hashed_text) => {
        Axios.post("http://localhost:3001/register/create", {
            username: username,
            password: password,
            email: email,
            hash: md5_hashed_text
        })
            .then((response) => {
                console.log(response);
                setErrors("");
                window.location.href("/login");
            }, (error) => {
                console.log(error.response.data);
                setErrors(error.response.data);
                setSuccess("");
            });
    }

    return (

    <div className="forms">
        <div className="form-body">{
            error.length > 0 && (
                <div className="form-error">
                    <p>{error}</p>
                </div>
            )}

            {
                message.length > 0 && (
                    <div className="form-error">
                        <p>{message}</p>
                    </div>
                )}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="form-head">REGISTER</h2>
                <Form.Field className="form-field">
                    <input
                        placeholder='First Name'
                        type="text"
                        {...register("firstName", { required: true, minLength: 3, maxLength: 20 })}
                    />
                </Form.Field>
                {errors.firstName && <p className="form-error">UserName Should be more than 3 letters</p>}
                <Form.Field className="form-field">
                    <input
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p className="form-error">Please check the Email</p>}
                <Form.Field className="form-field">
                    <input
                        placeholder='Password'
                        type="password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                </Form.Field>
                {errors.password && <p className="form-error">Password Must have 6 charecters with type "Aa@1"</p>}<br></br>
                <p style={{fontSize:'smaller'}}>By Continuing, you agree to SendIt's 
                    <Link to="/terms&conditions" style={{textDecoration:'none', color:'#46cb72', fontWeight:'bold', paddingLeft:'10'}}>Terms and Conditions </Link> and 
                    <Link to="/privacypolicy"  style={{textDecoration:'none', color:'#46cb72',fontWeight:'bold'}}>Privacy Policy</Link> 
                </p>
                <Button type='submit' className="button">Submit</Button><br></br>
                <h6 className="form-footer">Already Registered ? <Link to="/login">Log In </Link> | <Link to="/">Home</Link> </h6>
            </Form>
        </div>
    </div>
    );

}
