import React from "react";

const Contacts = ({ contacts }) => {
  const list = [];
  for (let contact in contacts) {
    list.push(
      <Contact title={contact} value={contacts[contact]} key={contact} />
    );
  }
  return <>{list}</>;
};

const Contact = ({ title, value }) => {
  return (
    <div>
      <a href={value}>{title}</a>
    </div>
  );
};

export default Contacts;
export { Contact };
