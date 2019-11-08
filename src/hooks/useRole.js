import { useState } from "react";

export const useRole = () => {
  const [role, setRole] = useState({
    city: "",
    price: ""
  });

  const changeRole = e => {
    setRole({
      ...role,
      [e.target.name]: e.target.id
    });
  };

  return [role, changeRole];
};
