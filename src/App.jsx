import { useState } from "react";
import { IndicTransliterate } from "@ai4bharat/indic-transliterate";
import "@ai4bharat/indic-transliterate/dist/index.css";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [abc, setAbc] = useState("hi");

  const handleSubmit = () => {
    let cars = document.getElementById("cars");
    setAbc(cars.value);
  };

  const handleClear = () => {
    setText("")
  }

  return (
    <div className="parentDiv">
      <img src="/megdaplogo.png" alt="megdaplogo" width={"280px"} height={"64px"}/>
      <label htmlFor="cars">Choose a language:</label>
      <div className="selectDiv">
        <select name="cars" id="cars">
          <option value="hi">Hindi </option>
          <option value="as">Assamese</option>
          <option value="bn">Bangla </option>
          <option value="gu">Gujarati </option>
          <option value="kn">Kannada </option>
          <option value="ml">Malayalam </option>
          <option value="mr">Marathi </option>
          <option value="or">Oriya </option>
          <option value="pa">Punjabi </option>
          <option value="ta">Tamil </option>
          <option value="te	">Telugu </option>
        </select>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <IndicTransliterate
        value={text}
        id="inputLang"
        onChangeText={(text) => {
          setText(text);
        }}
        lang={abc}
      />
      <button type="submit" onClick={handleClear}>Clear</button>
    </div>
  );
};

export default App;
