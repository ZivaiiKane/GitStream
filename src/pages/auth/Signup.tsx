import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import Input from '../../components/auth/Input';
import Button from '../../components/auth/Button';
import { signupUser } from '../../schema/schema';

export default function Signup() {
  const firebase = app;
  const auth = getAuth();

  return (
    <>
      <div className='flex flex-col w-full h-screen bg-white'>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validate={(values) => {
            signupUser.parse(values);

            if (values.password !== values.confirmPassword) {
              console.log('Psswords do not match.');
            }
          }}
          onSubmit={(vaules) => {
            const { email, password } = vaules;

            createUserWithEmailAndPassword(auth, email, password).then(
              (response) => {
                console.log(response);
              }
            );
          }}
        >
          <Form className='w-80 mx-auto my-auto'>
            <Input
              name='username'
              placeholder='Username'
              label='Username'
              type='text'
            />
            <Input name='email' placeholder='Email' label='Email' type='text' />
            <Input
              name='password'
              placeholder='Password'
              label='Password'
              type='password'
            />
            <Input
              name='confirmPassword'
              placeholder='Re-enter passwosrd'
              label='Re-enter password'
              type='password'
            />

            <p className='text-neutral-500  mt-6'>
              Already have an account?{' '}
              <Link to='/login' className=' text-violet-500 underline'>
                Login
              </Link>
            </p>

            <Button
              text='Signup'
              bg='bg-violet-500'
              colour='text-white'
            ></Button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
