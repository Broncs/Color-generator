import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [selectedOption, setSelectedOption] = useState(10);
  const [list, setList] = useState(
    new Values("#f15025").all(parseInt(selectedOption))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(selectedOption);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  console.log(parseInt(selectedOption));

  return (
    <>
      <section className="container">
        <h3>color generator</h3>

        <form onSubmit={handleSubmit}>
          <div className="percentage">
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value={5}
                  checked={selectedOption === 5}
                  className="form-check-input"
                  onChange={(e) => setSelectedOption(parseInt(e.target.value))}
                />
                5%
              </label>
            </div>

            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value={10}
                  checked={selectedOption === 10}
                  className="form-check-input"
                  onChange={(e) => setSelectedOption(parseInt(e.target.value))}
                />
                10%
              </label>
            </div>

            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value={20}
                  checked={selectedOption === 20}
                  className="form-check-input"
                  onChange={(e) => setSelectedOption(parseInt(e.target.value))}
                />
                20%
              </label>
            </div>
          </div>

          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
