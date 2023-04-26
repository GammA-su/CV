import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
