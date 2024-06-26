import React, { useRef } from 'react'
import {useDispatch} from 'react-redux';


const Controls = () => {
    const dispatch = useDispatch();
    const inputElement = useRef();

    const handleIncrement = ()=> {
        dispatch({type : "Increment"});
    };

    const handleDecrement = ()=> {
        dispatch({type : "Decrement"});
    };

    const handlePrivacy = ()=> {
        dispatch({type : "Privacy"});
    };

    const handleAdd = () => {
        dispatch({
            type: "Add",
            payload : {
                num : inputElement.current.value,
            },
        });

        inputElement.current.value = "";
    }

    const handleSub = () => {
        dispatch({
            type: "Sub",
            payload : {
                num : inputElement.current.value,
            },
        });

        inputElement.current.value = "";
    }


  return (
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleDecrement}
      >
        -1
      </button>
      <button
        type="button"
        class="btn btn-warning"
        onClick={handlePrivacy}
      >
        Privacy Toggle
      </button>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
      <input
        type="text"
        placeholder="Enter number"
        className="number-input"
        ref={inputElement}
      />
      <button type="button" className="btn btn-info" onClick={handleAdd}>
        Add
      </button>

      <button
        type="button"
        className="btn btn-danger"
        onClick={handleSub}
      >
        Subtract
      </button>
    </div>
  </>
  )
}

export default Controls
