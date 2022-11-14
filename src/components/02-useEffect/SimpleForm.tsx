import { useEffect, useState } from "react";
import "./effect.css";
import Message from "./Message";
export default function SimpleForm() {
  const [formState, setFormState] = useState<IForm>({
    email: "",
    name: "",
  });

  const { email, name } = formState;
  useEffect(() => {
    console.log("...");
  }, []);

  const handleInputChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h1>useEffect</h1>
      <div className="form-group">
        <input
          type="text"
          name="name"
          id=""
          className="form-control"
          placeholder="Nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          id=""
          className="form-control"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      { name && <Message></Message>}
    </>
  );
}

export interface IForm {
  email: string;
  name: string;
}
