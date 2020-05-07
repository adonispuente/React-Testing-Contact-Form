import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders App without crashing", () => {
  render(<ContactForm />);
});

test("make sure form is submitting", async () => {
  const { getByLabelText, getByText, getByTestId } = render(<ContactForm />);

  const firstName = getByLabelText(/first Name/i);
  const lastName = getByLabelText(/last Name/i);
  const email = getByLabelText(/email/i);
  const message = getByLabelText(/message/i);

  fireEvent.change(firstName, { target: { value: "Adonis" } });
  fireEvent.change(lastName, { target: { value: "Puente" } });
  fireEvent.change(email, { target: { value: "adonis@gmail.com" } });
  fireEvent.change(message, {
    target: { value: "adonis is having a horrible time" },
  });

  expect(firstName.value).toBe("Adonis");
  expect(lastName.value).toBe("Puente");
  expect(email.value).toBe("adonis@gmail.com");
  expect(message.value).toBe("adonis is having a horrible time");
});
