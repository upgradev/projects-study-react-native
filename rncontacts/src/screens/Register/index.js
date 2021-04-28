import React, {useCallback, useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import RegisterComponent from '../../components/Signup';
import {LOGIN} from '../../constants/routeNames';
import  register, { clearAuthState } from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import axios from '../../helpers/axiosInterceptor';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

function Register() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  // console.log('form', form);

  const {navigate} = useNavigation();

  useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      if (data || error) {
        clearAuthState()(authDispatch)
      }
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters'};
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
    //validations
    // console.log(form);
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a username'};
      });
    }

    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a first name'};
      });
    }

    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a last name'};
      });
    }

    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add a email'};
      });
    }

    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }

    if (
      (Object.values(form).length === 5,
      Object.values(form).every(item => item.trim().length > 0) &&
        Object.values(errors).every(item => !item))
    ) {
      register(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
}

export default Register;
