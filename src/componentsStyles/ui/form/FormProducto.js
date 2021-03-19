import styled from "@emotion/styled";

export const UploadImage = styled.input`
  margin-top: 30px;
  font-size: 16px;
  height: auto;
  background-color: #000;
  color: white;
`;

export const Form = styled.form`
  margin: 24px;
  display: flex;
  flex-direction: column;
`;

export const PreviewImg = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
  margin: 30px auto 0px auto;
  display: ${(props) => (props.visible ? "" : "none")};
`;