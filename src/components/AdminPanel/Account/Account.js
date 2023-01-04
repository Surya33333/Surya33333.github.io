import { react, useState } from "react";
import "./Account.scss"
import SideBar from "../SideBar/SideBar.js";
import NavBar from "../NavBar/NavBar.js";
import DataTable from "../DataTable/DataTable.js"
import Login from '../../Website/login';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Form, Button, FormGroup } from 'semantic-ui-react';
import { Person, Pencil, CheckCircleFill, Camera } from "react-bootstrap-icons";
import InlineEdit from "../InlineComponent/Inline";

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
    console.log(data.email);
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
                  <img className="img" src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" />
              </div>
              <div className="profile">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field className="forminput">
                    <label>Name</label>
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
                {errors.email && <p className="form-error">UserName Should be more than 3 letters</p>}
                </Form.Field>
                <Form.Field className="forminput">
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        type="email"
                        {...register("email", {
                            required: true,
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                          })}
                    />
                {errors.password && <p className="form-error">Please Check Email ID</p>}
                </Form.Field>
                <Form.Field className="forminput">
                    <label>Mobile</label>
                    <input
                        placeholder='Mobile'
                        type="number"
                        {...register("mobile", {
                            required: true,
                            minLength: 10,maxLength: 10
                        })}
                    />
                {errors.password && <p className="form-error">Invalid Mobile</p>}
                </Form.Field>
                <Form.Field className="forminput">
                    <label>Location</label>
                    <input
                        placeholder='Location'
                        type="text"
                        {...register("location", {
                            required: true,
                            minLength:10, maxLength:300
                          })}
                    />
                {errors.password && <p className="form-error">Location Is Required</p>}
                </Form.Field>
                <Button type='submit' className="button">Save</Button><br></br>
            </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Account

