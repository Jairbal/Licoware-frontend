import styled from "@emotion/styled";

export const NavBottom = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #fff;
  backdrop-filter: blur(5px);
`;

export const Icons = styled.div`
  display: flex;
  flex-flow: row-reverse wrap-reverse;
  justify-content: space-between;
  align-items: flex-end;
  height: ${(props) => props.height};
  overflow: hidden;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;
  :hover {
    cursor: pointer;
  }
  width: 70px;
`;

export const Title = styled.p`
  font-size: 12px;
  color: ${(props) => props.color || "#fff"};
`;