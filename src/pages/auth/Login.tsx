import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/auth/Button';
import Input from '../../components/auth/Input';
import { app } from '../../firebase';
import { loginUser } from '../../schema/schema';

export default function Login() {
  const firebase = app;
  const auth = getAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className='flex flex-col w-full h-screen bg-white'>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validate={(values) => {
            loginUser.parse(values);
          }}
          onSubmit={(values) => {
            const { email, password } = values;

            signInWithEmailAndPassword(auth, email, password).then(
              (response) => {
                document.cookie = `user=${JSON.stringify(response)}`;
                navigate('/dashboard');
              }
            );
          }}
        >
          <Form className='w-80 mx-auto my-auto'>
            <Input name='email' placeholder='Email' label='Email' type='text' />
            <Input
              name='password'
              placeholder='Password'
              label='Password'
              type='password'
            />

            <p className='text-neutral-500 mt-6'>
              Don't have an account?{' '}
              <Link to='/signup' className=' text-indigo-500 underline'>
                Sign up
              </Link>
            </p>

            <Button text='Login' bg='bg-indigo-500' colour='text-white' />
          </Form>
        </Formik>
      </div>
    </>
  );
}
