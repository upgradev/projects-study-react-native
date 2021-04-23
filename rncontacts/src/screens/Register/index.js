import React, {useState} from 'react';
import {View} from 'react-native';
import RegisterComponent from '../../components/SignUp';
import envs from '../../config/env';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {DEV_BACKEND_URL} = envs;

  

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs minimal 6 caracters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    console.log(form);

    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add username'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add First name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add last name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add password'};
      });
    }
  };

  return (
    <RegisterComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
    />
  );
};

export default Register;
