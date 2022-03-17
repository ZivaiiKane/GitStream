import { Field } from 'formik';
import { IInput } from '../../interfaces/interfaces';

export default function Input({ name, placeholder, type, label }: IInput) {
  return (
    <div className='my-4'>
      <label className='text-neutral-500' htmlFor={name}>
        {label}
      </label>
      <Field
        className='w-full h-8 bg-neutral-100 border-2  py-5 px-2 mt-1'
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
