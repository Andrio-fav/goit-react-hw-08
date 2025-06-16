import { useId } from 'react';
import css from './RegistrationForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export default function RegistrationForm() {
  const ids = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(register(values));
    actions.resetForm();
  }

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const FormSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(30, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={FormSchema} onSubmit={handleSubmit}>
      <Form className={css.wrapper}>
        <label htmlFor={`${ids}-regUsr`}>Username</label>
        <Field autoComplete="on" className={css.field} id={`${ids}-regUsr`} type="text" name="name" />
        <ErrorMessage className={css.error} name="name" component="sup" />

        <label htmlFor={`${ids}-regMail`}>Email</label>
        <Field autoComplete="on" className={css.field} id={`${ids}-regMail`} type="email" name="email" />
        <ErrorMessage className={css.error} name="email" component="sup" />

        <label htmlFor={`${ids}-regPass`}>Password</label>
        <Field autoComplete="on" className={css.field} id={`${ids}-regPass`} type="text" name="password" />
        <ErrorMessage className={css.error} name="password" component="sup" />

        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}