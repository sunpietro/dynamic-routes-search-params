import React, { useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export const FormPage = ({ surname, name }) => {
  const formRef = useRef(null);
  const { handleSubmit, register } = useForm();
  const router = useRouter();
  const handleFormSubmit = useCallback(
    event => {
      router.push('/pl/something?name=' + formRef.current.name.value);
    },
    [router, formRef.current]
  );

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
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
        </p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
