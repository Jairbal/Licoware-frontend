import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.p`
  border-bottom: 1px solid white;
  margin: 10px 0px 20px 0px;
`;

export const Message = styled.p`
    color: #9F9B9B;
    margin-bottom: 18px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  margin-left: ${(props) => props.left || "0px"};
  margin-right: ${(props) => props.right || "0px"};
  border: none;
  outline: none;
  height: 48px;
  width: 100px;
`;

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
  },
};