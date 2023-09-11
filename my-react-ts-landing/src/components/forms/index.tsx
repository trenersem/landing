import React from 'react'
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './index.module.scss'
import { Button, EButtonType, Title, Typography } from '../atoms';
import classNames from 'classnames';
import { Footer, Header } from '..';

interface InitialValues {
  typeOfProperty: string;
  currentlyManages: string;
  percentage: string;
  address: string;
  bedrooms: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const CustomForm = () => {
    const  initialValues =  {
            typeOfProperty: '',
            currentlyManages: '',
            percentage:'',
            address: '',
            bedrooms: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        }
    const onSubmit = (values: InitialValues) => {
        console.log('values', values)
    }
    const validationSchema = Yup.object({
        email: Yup.string().required("Email is required").email("Invalid email address"),
        typeOfProperty: Yup.string().required("Required"),
        currentlyManages: Yup.string().required("Required"),
        percentage: Yup.string().required("Required"),
        address: Yup.string().required("Address is required"),
        bedrooms: Yup.string().required("Required"),
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        phone: Yup.string()
            .required('Phone number is required')
            .matches(
            /^[0-9]{10}$/,
            'Invalid phone number'
            ),
    
    })

  return (
    <>
    <Header />
    <div className={s.root}>
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
            <Form className={s.form}>
                <Title>
                    Welcome! Let's work together!
                </Title>
                <div className={s.flex}>
                    <div className={s.column}>
                        <Field
                            name='firstName'
                            placeholder='First Name'
                            className={s.input}
                        />
                        <Typography tag='div' size='text-xs' className={classNames(s.error)}>
                            <ErrorMessage name='firstName' component='span'/>
                        </Typography>
                    </div>
                    <div className={s.column}>
                        <Field
                            name='lastName'
                            placeholder='Last Name'
                            className={s.input}
                        />
                        <Typography tag='div' size='text-xs' className={classNames(s.error)}>
                            <ErrorMessage name='lastName' component='span'/>
                        </Typography>
                    </div>
                </div>
                <div className={s.flex}>
                    <div className={s.column}>
                        <Field
                            name='email'
                            placeholder='Email'
                            className={s.input}
                        />
                        <Typography tag='div' size='text-xs' className={classNames(s.error)}>
                            <ErrorMessage name='email' component='span'/>
                        </Typography>
                    </div>
                    <div className={s.column}>
                        <Field
                            name='phone'
                            placeholder='Phone Number'
                            className={s.input}
                        />
                        <Typography tag='div' size='text-xs' className={classNames(s.error)}>
                            <ErrorMessage name='phone' component='span'/>
                        </Typography>
                    </div>
                </div>
                <div className={s.flex}>
                    <div className={s.column}>
                        <Field
                            name='typeOfProperty'
                            placeholder='Type of property'
                            className={s.input}
                        />
                        <Typography tag='div' size='text-xs' className={classNames(s.error)}>
                            <ErrorMessage name='typeOfProperty' component='span'/>
                        </Typography>
                    </div>
                    <div className={s.column}>
                        <Field
                            name='bedrooms'
                            placeholder='Bedrooms'
                            className={s.input}
                        />
                        <Typography tag='div' size='text-xs' className={classNames(s.error)}>
                            <ErrorMessage name='bedrooms' component='span'/>
                        </Typography>
                    </div>
                </div>
                <div className={s.flex}>
                    <div className={s.column}>
                        <Field
                            name='address'
                            placeholder='Address'
                            className={s.input}
                        />
                        <Typography tag='div' size='text-xs' className={classNames(s.error)}>
                            <ErrorMessage name='address' component='span'/>
                        </Typography>
                    </div>
                </div>
                <div className={s.flex}>
                    <div className={s.column}>
                    <Field
                        name='percentage'
                        placeholder='Percentage'
                        className={s.input}
                    />
                    <Typography tag='div' size='text-xs' className={classNames(s.error)}>
                        <ErrorMessage name='percentage' component='span'/>
                    </Typography>
                    </div>
                </div>
                <Button kind='submit' type={EButtonType.CLASSIC}>
                    Submit
                </Button>

            </Form>

            )}
        </Formik>
        <Footer className={s.footer}/>
    </div>
    </>
  )
}

export default CustomForm
