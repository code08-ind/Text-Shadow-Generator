import './App.css';
import Box from './components/Box';
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { SketchPicker } from 'react-color';

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [blur, setBlur] = useState(0);
  const [color, setColor] = useState('#fff');

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const handleChange = (color, event) => {
    setColor(color.hex);
  };

  return (
    <>
      <div className="app">
        <div className="app__controls">
          <div className="app__controlsContainer">
            <h1>
              Text Shadow Generator
            </h1>
            <div className="app__control">
              <p style={{ marginRight: "25px", marginBottom: "5px" }}>X:</p>
              <Slider min={-200} max={200} defaultValue={0} onChange={(event, value) => setX(value)} style={{ marginLeft: "20px" }} />
              <input type="text" value={x} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "28px", marginBottom: "5px" }}>Y:</p>
              <Slider min={-200} max={200} defaultValue={0} onChange={(event, value) => setY(value)} style={{ marginLeft: "20px" }} />
              <input type="text" value={y} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "30px", marginBottom: "5px" }}>Blur:</p>
              <Slider min={0} max={400} onChange={(event, value) => setBlur(value)} />
              <input type="text" value={blur} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <SketchPicker color={color} onChange={handleChange} onChangeComplete={handleChangeComplete} />
          </div>
        </div>
        <Box x={x} y={y} blur={blur} color={color} />
      </div>
      <h6>Created By @Aryan Garg &copy;2022</h6>
    </>
  )
}

export default App