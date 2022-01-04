import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ info, title }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="question">
            <h4>{title}</h4>
            <p>{show && info}</p>
            <button
                className="btn"
                onClick={() => {
                    setShow(!show);
                }}
            >
                {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </div>
    );
};

export default Question;
