import useForm from "../../hooks/useForm";
import "./effect.css";
export default function FormCustomHook() {
  const {formState, handleInputChange} = useForm<IForm>({
          email: "",
          name: "",
          password: "",
      
  });

  const { email, name, password } = formState;
  
  return (
    <>
      <h1>FormCustomHook</h1>
      <hr />
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
      <div className="form-group">
        <input
          type="password"
          name="password"
          id=""
          className="form-control"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

export interface IForm {
    email: string;
    name: string;
    password: string;
  }