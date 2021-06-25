import React, { useRef } from 'react';
import { useRouter } from 'next/router';

export const FormPage = ({ surname, name }) => {
  const formRef = useRef(null);
  const router = useRouter();
  const handleSubmit = event => {
    event.preventDefault();
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
      <form onSubmit={handleSubmit} ref={formRef}>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
