import React from "react";
import PropTypes from "prop-types";
import { Note } from "./Notification.styled";

export const Notification = ({ message }) => {
  return <Note>{message}</Note>;
};


Notification.propTypes = {
  message: PropTypes.string,
};