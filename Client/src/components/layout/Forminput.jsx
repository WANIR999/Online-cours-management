import { useState } from "react";
import "../../asset/css/frminpt.css";
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label,labelclassName, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label className={labelclassName}>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
        setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
export default FormInput;