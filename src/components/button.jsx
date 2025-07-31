// src/components/Button.jsx
function Button({ text, onClick, type = "button", styleType = "primary" }) {
  return (
    <button className={`btn btn-${styleType}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
