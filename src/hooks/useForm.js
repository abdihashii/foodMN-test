import { useState } from "react";

export const useForm = initialState => {
  const [form, setForm] = useState(initialState);

  const changeForm = e => {
    e.preventDefault();

    // var length = filteredRestaurants.length;
    // var randomNumber = Math.floor(Math.random() * length) + 0;

    setForm({
      ...form,
      [e.target.name]: e.target.id
    });
  };

  return [form, changeForm];
};
