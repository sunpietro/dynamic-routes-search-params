import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export const FormPage = ({ surname, name }) => {
  const formRef = useRef(null);
  const { handleSubmit, register } = useForm();
  const router = useRouter();
  const handleFormSubmit = event => {
    // event.preventDefault();
    // console.log(formRef.current.name.value);

    router.push('/pl/something?name=' + formRef.current.name.value);
  };

  return (
    <>
      {name || surname ? (
        <h1>
          {name} {surname}
        </h1>
      ) : null}
      <form onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" ref={register} />
        </p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
