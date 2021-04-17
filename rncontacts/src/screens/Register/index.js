import React, {useState} from 'react';
import {View, Text} from 'react-native';
import RegisterComponent from '../../components/SignUp';

export default function Register() {
  const [form, setForm] = useState({});
  const [errors, setErros] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErros(prev => {
            return {...prev, [name]: 'This field needs minimal 6 characters'};
          });
        } else {
          setErros(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErros(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErros(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErros(prev => {
        return {...prev, userName: 'Please add a user name'};
      });
    }

    if (!form.firstName) {
      setErros(prev => {
        return {...prev, firstName: 'Please add a first name'};
      });
    }

    if (!form.lastName) {
      setErros(prev => {
        return {...prev, lastName: 'Please add a last name'};
      });
    }

    if (!form.email) {
      setErros(prev => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      setErros(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
}
