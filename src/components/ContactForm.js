import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState({
    firstName: "",
  });
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleChange}
            value={data.firstName}
            id="firstName"
            // inputprops={{ "data-testid": "firstName" }}
            name="firstName"
            placeholder="Edd"
            ref={register({ required: true })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            onChange={handleChange}
            name="lastName"
            placeholder="Burke"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email
          </label>
          <input
            id="email"
            onChange={handleChange}
            name="email"
            ref={register({ required: true })}
          />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            onChange={handleChange}
            name="message"
            ref={register({ required: false })}
          />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}

        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
