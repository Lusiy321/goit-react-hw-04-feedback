import React from "react";
import PropTypes from "prop-types";
import { Title, SectionCont } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <SectionCont>
      <Title>{title}</Title>
      {children}
    </SectionCont>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};