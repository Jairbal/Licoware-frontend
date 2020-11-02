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
  height: 50px;
  border-top: 1px solid #fff;
  backdrop-filter: blur(5px);
`;

const Icons = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

const Title = styled.p`
  font-size: 12px;
  color: ${(props) => props.color || "#fff"};
`;

export default function Nav() {
  const history = useHistory();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleIconClick = (page) => {
    history.push(page);
    setActive(page);
  };

  const handleMore = () => {
    setActive('/more');
  }

  return (
    <NavBottom>
      <Icons>
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
        <Icon>
          <MoreIcon
            color={active === "/more" ? "#B2002D" : "#fff"}
            onClick={() => handleMore("/more")}
          />
          <Title color={active === "/more" ? "#B2002D" : "#fff"}>Más</Title>
        </Icon>
      </Icons>
    </NavBottom>
  );
}
