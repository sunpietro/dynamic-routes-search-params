const surnames = ['Nalepa', 'Nowak', 'Jones', 'Adams'];

export const getServerSideProps = context => {
  return {
    props: {
      surname: context.query.name
        ? surnames[Math.floor(Math.random() * surnames.length)]
        : null,
      name: context.query.name || null
    }
  };
};
