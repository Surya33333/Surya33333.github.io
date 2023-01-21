import { react, useState } from "react";
import "./Account.scss"
import SideBar from "../SideBar/SideBar.js";
import NavBar from "../NavBar/NavBar.js";
import DataTable from "../DataTable/DataTable.js"
import Login from '../../Website/Login/Login.js';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Form, Button, FormGroup } from 'semantic-ui-react';
import { Person, Pencil, CheckCircleFill, Camera, GeoAltFill } from "react-bootstrap-icons";
import profile from '../../../Images/profile.jpg';
const usertoken = sessionStorage.getItem('token');
const username = JSON.parse(sessionStorage.getItem('username'));
const useremail = JSON.parse(sessionStorage.getItem('useremail'));


const Account = () => {

  const [Username, setUsername] = useState();
  const [Useremail, setEmail] = useState();
  const [Mobile, setMobile] = useState();
  const [Location, setLocation] = useState();

  const [error, setErrors] = useState([]);
  const [message, setSuccess] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data.name);
    console.log(data.email);
    console.log(data.location);
    console.log(data.mobile);
  }

  return (
    <>
      {!usertoken ? (<Login />) : (
        <div className="account">
          <SideBar />
          <div className="accountContainer">
            <NavBar />
            <div className="useraccount">
              <div className="image">
                <div className="left">
                  <div className="img">
                    <img className="img" src={profile ? (profile) : ("https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg")}/>
                    <input type="file" accept="image/png, image/jpeg" id="upload" hidden />
                  <label for="upload" className="imglabel"><Pencil/></label>
                  </div>
                  <div className="text">Hello, {username}.</div>
                </div>
                <div className="right">
                  <label className="imglabel">Update</label>
                </div>
              </div>
              <div className="profile">
                <p className="title">Update Profile </p>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Field className="forminput">
                      <label>Name<i className="required">*</i></label>
                      <input
                        defaultValue={username}
                        placeholder='Name'
                        type="text"
                        {...register("name",
                          {
                            required: true,
                            minLength: 3, maxLength: 20
                          })}
                      />
                      {errors.name && <p className="form-error">UserName Should have 3 letters</p>}
                    </Form.Field>
                    <Form.Field className="forminput">
                      <label>Email<i className="required">*</i></label>
                      <input
                        defaultValue={useremail}
                        placeholder='Email'
                        type="email"
                        {...register("email", {
                          required: true,
                          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                      />
                      {errors.email && <p className="form-error">Please Check Email ID</p>}
                    </Form.Field>
                    <Form.Field className="forminput">
                      <label>Mobile<i className="required">*</i></label>
                      <input
                        placeholder='Mobile'
                        type="number"
                        {...register("mobile", {
                          required: true,
                          minLength: 10, maxLength: 10
                        })}
                      />
                      {errors.mobile && <p className="form-error">Invalid Mobile</p>}
                    </Form.Field>
                    <Form.Field className="forminput loc">
                      <label>Location<i className="required">*</i></label>
                      <input
                        placeholder='Location'
                        type="text"
                        {...register("location", {
                          required: true,
                          minLength: 10, maxLength: 300
                        })}
                      />
                      <span className="icon"><GeoAltFill/></span>
                      {errors.location && <p className="form-error">Location Is Required</p>}
                    </Form.Field>
                    <Button type='submit' className="button">Save</Button><br></br>
                  </Form>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Account

