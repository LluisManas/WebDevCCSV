import React from "react";
import TextField from "@material-ui/core/TextField";

class InputFields extends React.Component {
  render() {
    const { inputField, onChange, name, darkMode, label } = this.props;

    return (
      <div className={darkMode ? "inputWrap" : "inputWrapLight"}>
        <TextField
          id={name}
          type="number"
          value={inputField}
          onChange={e => onChange(name, e.target.value)}
          variant="outlined"
          label={label}
          color={darkMode && "secondary"}
          inputProps={{
            style: { color: darkMode && "#02e2f2" }
          }}
          InputLabelProps={{
            style: { color: darkMode && "#02e2f2" }
          }}
        />
      </div>
    );
  }
}

export default InputFields;
