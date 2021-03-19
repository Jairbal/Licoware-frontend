import styled from "@emotion/styled";

export const WrapperInput = styled.div`
  position: relative;
  margin-top: 30px;
`;

export const stylesComponent = `
color: #fff;
background: none;
outline: none;
height: 100%;
width: 100%;
border: none;
margin-top: 20px;
border-bottom: 1px solid #9f9b9b;
font-size: 17px;

:focus ~ div:before {
  transform: scaleX(1);
}

:focus ~ label{
  transform: translateY(-20px);
  font-size: 12px;
  color: #fff;
}
`;

export const InputComponent = styled.input`
  ${stylesComponent}
`;

export const TextAreaComponent = styled.textarea`
  ${stylesComponent}
  resize: none;
  border: none;
  :focus ~ label {
    transform: translateY(-40px);
  }
`;

export const Label = styled.label`
  position: absolute;
  bottom: 10px;
  left: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  width: 100%;
  transform: ${(props) =>
    props.writing && props.textArea
      ? "translateY(-40px)"
      : props.writing
      ? "translateY(-20px)"
      : null};
  font-size: ${(props) => (props.writing ? "12px" : "16px")};
  color: ${(props) => (props.writing ? "#fff" : "#9F9B9B")};
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0px;
  height: 2px;
  width: 100%;
  background: ${(props) => props.color};

  :before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: #fff;
    transform: ${(props) => (props.writing ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 0.3s ease;
  }
`;