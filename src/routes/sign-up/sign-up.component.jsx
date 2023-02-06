import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";

import './sign-up.styles.scss';

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      dob: '',
      favoriteColour: '#ffffff',
      salary: '0'
    }
  });

  const [salary, setSalary] = useState(0);
  
  const handleSalaryRangeChange = (event) => {
    setSalary(event.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
    alert(`Successfully submitted data: \n ${JSON.stringify(data)}`);
    reset();
  };

  return (
    <div className='sign-up-container'>
      <div className='sign-up-wrapper'>
        <div className='sign-up-heading'>
          <h1>Sign up to our newsletter</h1>
          <p>Join our mailing list and you'll be the first to hear about our latest updates, news, and special offers.</p>
        </div>
        <div className='sign-up-form-wrapper'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <label htmlFor='name'>Name *</label>
              <input 
                {...register('name', { required: 'Please enter your name.' })}
                aria-invalid={errors.name ? 'true' : 'false'}
                type='text'
                id='name'
                name='name'
                placeholder='Name'
              />
              {errors.name?.type === 'required' && 
                <p className='error' role='alert'>
                  {errors.name?.message}
                </p>
              }
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email *</label>
              <input 
                {...register('email', { required: 'Please enter your email.' })}
                aria-invalid={errors.email ? 'true' : 'false'}
                type='email'
                id='email'
                name='email'
                placeholder='Email'
              />
              {errors.email?.type === 'required' && 
                <p className='error' role='alert'>
                  {errors.email?.message}
                </p>
              }
            </div>
            <div className='form-group'>
              <label htmlFor='dob'>Date of Birth *</label>
              <input 
                {...register('dob', { required: 'Please enter your date of birth' })}
                aria-invalid={errors.dob ? 'true' : 'false'}
                type='date'
                id='dob'
                name='dob'
                placeholder='Date of Birth'
              />
              {errors.dob?.type === 'required' && 
                <p className='error' role='alert'>
                  {errors.dob?.message}
                </p>
              }
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Pick your favourite color:</label>
              <input 
                {...register('favoriteColour')}
                type='color'
                className='color-picker'
                id='favoriteColour'
                name='favoriteColour'
                placeholder='Favorite Colour'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Salary: £ {salary}</label>
              <input
                {...register('salary')}
                type='range'
                onChange={handleSalaryRangeChange}
                id='salary'
                name='salary'
                placeholder='Salary'
                min='0'
                max='250000'
                step='1000'
                value={salary}
              />
            </div>
            <button className='button-primary'>Submit</button>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SignUp;
