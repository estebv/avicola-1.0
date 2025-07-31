// src/components/Form.jsx
import { useState } from "react";
import Button from "./button";

function Form({ fields, onSubmit }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      {fields.map((field, i) => (
        <div key={i} className="form-group">
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <Button text="Guardar" type="submit" />
    </form>
  );
}

export default Form;
