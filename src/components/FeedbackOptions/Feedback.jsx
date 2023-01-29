import React from "react";
import { FeedbackBtn } from "./Feedback.styled";

export const FeedbackOp = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <FeedbackBtn
        onClick={() => onLeaveFeedback(option)}
        key={option}
        type="button"
      >
        {option}
      </FeedbackBtn>
    ))}
  </div>
);