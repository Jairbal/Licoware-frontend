import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 30px;
`;

export const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "black",
    color: "white",
    borderColor: "white",
    outline: "none",
  }),
  option: (styles, { isSelected, isDisabled }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? "white" : "black",
      color: isSelected ? "black" : isDisabled ? "#9F9B9B" : "white",
    };
  },
  menuList: (styles) => ({ ...styles, backgroundColor: "white" }),
  singleValue: (styles) => ({ ...styles, color: "white" }),
  input: (styles) => ({ ...styles, color: "white" }),
  noOptionsMessage: (styles) => ({
    ...styles,
    background: "black",
    color: "white",
  }),
};