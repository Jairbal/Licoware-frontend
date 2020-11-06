import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

import HomeIcon from "../icons/Home";
import ProveedoresIcon from "../icons/Proveedores";
import FacturasIcon from "../icons/Facturas";
import InventarioIcon from "../icons/Inventario";
import MoreIcon from "../icons/More";

const NavBottom = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #fff;
  backdrop-filter: blur(5px);
`;

const Icons = styled.div`
  display: flex;
  flex-flow: row-reverse wrap-reverse;
  justify-content: space-between;
  align-items: flex-end;
  height: ${(props) => props.height};
  overflow: hidden;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;
  :hover {
    cursor: pointer;
  }
  width: 70px;
`;

const Title = styled.p`
  font-size: 12px;
  color: ${(props) => props.color || "#fff"};
`;

export default function Nav() {
  const history = useHistory();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [showAll, setShowAll] = useState(false);
  const [isMore, setIsMore] = useState(false);

  const handleIconClick = (page) => {
    history.push(page);
    setActive(page);
  };

  const handleMore = () => {
    setShowAll(!showAll);
    setIsMore(!isMore);
  };

  return (
    <NavBottom >
      <Icons height={isMore ? 'auto' : '54px'}>
      <Icon>
          <MoreIcon
            color={active === "/more" ? "#B2002D" : "#fff"}
            onClick={() => handleMore()}
          />
          <Title color={active === "/more" ? "#B2002D" : "#fff"}>
            {isMore ? "Menos" : "Más"}
          </Title>
        </Icon>
        <Icon onClick={() => handleIconClick("/")}>
          <HomeIcon color={active === "/" ? "#B2002D" : "#fff"} />
          <Title color={active === "/" ? "#B2002D" : "#fff"}>Home</Title>
        </Icon>
        <Icon onClick={() => handleIconClick("/proveedores")}>
          <ProveedoresIcon
            color={active === "/proveedores" ? "#B2002D" : "#fff"}
          />
          <Title color={active === "/proveedores" ? "#B2002D" : "#fff"}>
            Proveedores
          </Title>
        </Icon>
        <Icon onClick={() => handleIconClick("/facturas")}>
          <FacturasIcon color={active === "/facturas" ? "#B2002D" : "#fff"} />
          <Title color={active === "/facturas" ? "#B2002D" : "#fff"}>
            Facturas
          </Title>
        </Icon>
        <Icon onClick={() => handleIconClick("/inventario")}>
          <InventarioIcon
            color={active === "/inventario" ? "#B2002D" : "#fff"}
          />
          <Title color={active === "/inventario" ? "#B2002D" : "#fff"}>
            Inventario
          </Title>
        </Icon>

        <Icon onClick={() => handleIconClick("/")}>
          <HomeIcon color={active === "/" ? "#B2002D" : "#fff"} />
          <Title color={active === "/" ? "#B2002D" : "#fff"}>Home</Title>
        </Icon>
        <Icon onClick={() => handleIconClick("/proveedores")}>
          <ProveedoresIcon
            color={active === "/proveedores" ? "#B2002D" : "#fff"}
          />
          <Title color={active === "/proveedores" ? "#B2002D" : "#fff"}>
            Proveedores
          </Title>
        </Icon>
        
      </Icons>
    </NavBottom>
  );
}
