import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';

//import { useAuth } from '../../../context/useAuthContext';
import login from '../../../helpers/APICalls/login';
import { useHistory } from 'react-router-dom';
interface Props {
  handleDemoLogin: ({ demoUser, email, password }: { demoUser: boolean; email: string; password: string }) => void;
  handleSubmit: (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
    }>,
  ) => void;
}

export default function Login({ handleDemoLogin, handleSubmit }: Props): JSX.Element {
  const classes = useStyles();
  //const { updateLoginContext } = useAuth();
  const history = useHistory();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [demoUserFlag, setDemoUserFlag] = useState(false);

  // #9 FE: Demo user
  const demoUserLogin = async () => {
    //demoUser = true;
    setDemoUserFlag(true);
    setEmailInput('demouser@kanbanboards.com');
    setPasswordInput('Pass9876!Qwerty');
    handleDemoLogin({ demoUser: true, email: 'demouser@kanbanboards.com', password: 'Pass9876!Qwerty' });
    login(emailInput, passwordInput).then(() => {
      history.push('/dashboard');
    });
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            id="email"
            placeholder="Enter email"
            fullWidth
            margin="none"
            InputProps={{
              classes: { input: `${classes.inputs} ${classes.inputEmail}` },
              disableUnderline: true,
            }}
            name="email"
            autoComplete="email"
            helperText={touched.email && demoUserFlag === false ? errors.email : ' '}
            error={touched.email && Boolean(errors.email)}
            value={emailInput ? emailInput : values.email}
            variant="filled"
            onChange={handleChange}
          />
          <TextField
            id="password"
            placeholder="Password"
            fullWidth
            margin="none"
            InputProps={{
              classes: { input: `${classes.inputs} ${classes.inputPassword}` },
              disableUnderline: true,
              /*endAdornment: <Typography className={classes.forgot}>Forgot?</Typography>,*/ //Enable this later in the project
            }}
            type="password"
            autoComplete="current-password"
            helperText={touched.password && demoUserFlag === false ? errors.password : ' '}
            error={touched.password && Boolean(errors.password)}
            //value={values.password}
            value={passwordInput ? passwordInput : values.password}
            variant="filled"
            onChange={handleChange}
          />
          <Box textAlign="center">
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              className={`${classes.submit} ${classes.submitLogin}`}
            >
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Login'}
            </Button>
            <Button
              type="submit"
              size="small"
              variant="contained"
              color="secondary"
              className={`${classes.submit} ${classes.submitDemo}`}
              onClick={demoUserLogin}
            >
              {isSubmitting ? <CircularProgress style={{ color: 'red' }} /> : 'Demo Login'}
            </Button>
          </Box>
          <div style={{ height: 76 }} />
        </form>
      )}
    </Formik>
  );
}
