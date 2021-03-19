import styled from "@emotion/styled";
import Right from "../icons/Right";

export const Wrapper = styled.div`
  margin-top: 24px;
  border-bottom: 1px solid #fff;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

export const SecondaryText = styled.p`
  color: #9f9b9b;
  font-size: 12px;
`;

export const RightIcon = styled(Right)`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ImagenProducto = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
`;