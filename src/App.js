
import './App.css';import { useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset, incrementAsync, lucky } from './redux/Counter';
import { SiRedux } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiCode } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";

function App() {
  const [counter, setCounter] = useState(0);
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className='main'>
        <h1 className="App-logo">A Redux-toolkit Project</h1>
        <div className="div1">
          <strong className="arrow" onClick={() => dispatch(decrement())}>
            <AiOutlineArrowLeft />
          </strong>
          <span className="val">{value}</span>
          <strong className="arrow" onClick={() => dispatch(increment())}>
            <AiOutlineArrowRight />
          </strong>
        </div>
        <div className="div2">
          <input
            type=""
            className="inputC"
            value={counter}
            onChange={(e) => {
              setCounter(e.target.value);
            }}
          />
          <button
            className="btn1"
            onClick={() => {
              dispatch(incrementByAmount(Number(counter) || 0));
              setCounter(0);
            }}
          >
            Increment By Amount
          </button>
          <button className="btn2" onClick={() => dispatch(reset())}>
            reset
          </button>
        </div>
        <div className="div3">
          <button
            className="async"
            onClick={() => {
              dispatch(incrementAsync(Number(counter) || 0));
              setCounter(0);
            }}
          >
            Async Increment
          </button>
          <button
            className="lucky"
            onClick={() => {
              dispatch(lucky());
              setCounter(0);
            }}
          >
            Lucky Number
          </button>
        </div>
      </div>
      <p className="footer">
        <SiRedux /> <DiReact /> <AiFillHtml5 /> <DiCss3 /> <DiJavascript />{" "}
        <SiBootstrap /> <DiCode />
        <br />
        &copy; Shivam Upadhyay
      </p>
    </div>
  );
}

export default App;
