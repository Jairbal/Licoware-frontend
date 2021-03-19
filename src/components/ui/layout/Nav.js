import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../../../actions/auth";
import HomeIcon from "../../../icons/Home";
import ProveedoresIcon from "../../../icons/Proveedores";
import FacturasIcon from "../../../icons/Facturas";
import ProductosIcon from "../../../icons/Productos";
import MoreIcon from "../../../icons/More";
import LogoutIcon from "../../../icons/Logout";
import {
  Title,
  Icon,
  NavBottom,
  Icons,
} from "../../../componentsStyles/ui/layout/Nav";

export default function Nav() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
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

  const handleLogout = () => {
    dispatch(logoutAsync());
  };

  return (
    <NavBottom>
      <Icons height={isMore ? "auto" : "54px"}>
        <Icon>
          <MoreIcon
            color={active.includes("/more") ? "#B2002D" : "#fff"}
            onClick={() => handleMore()}
          />
          <Title color={active.includes("/more") ? "#B2002D" : "#fff"}>
            {isMore ? "Menos" : "Más"}
          </Title>
        </Icon>
        <Icon onClick={() => handleIconClick("/")}>
          <HomeIcon color={active === "/" ? "#B2002D" : "#fff"} />
          <Title color={active === "/" ? "#B2002D" : "#fff"}>Home</Title>
        </Icon>
        <Icon onClick={() => handleIconClick("/proveedores")}>
          <ProveedoresIcon
            color={active.includes("/proveedores") ? "#B2002D" : "#fff"}
          />
          <Title color={active.includes("/proveedores") ? "#B2002D" : "#fff"}>
            Proveedores
          </Title>
        </Icon>
        <Icon onClick={() => handleIconClick("/facturas")}>
          <FacturasIcon
            color={active.includes("/facturas") ? "#B2002D" : "#fff"}
          />
          <Title color={active.includes("/facturas") ? "#B2002D" : "#fff"}>
            Facturas
          </Title>
        </Icon>
        <Icon onClick={() => handleIconClick("/productos")}>
          <ProductosIcon
            color={active.includes("/productos") ? "#B2002D" : "#fff"}
          />
          <Title color={active.includes("/productos") ? "#B2002D" : "#fff"}>
            Productos
          </Title>
        </Icon>
        <Icon onClick={() => handleLogout()}>
          <LogoutIcon color={active === "/logout" ? "#B2002" : "#fff"} />
          <Title color={active.includes("/logout") ? "#B2002D" : "#fff"}>
            Salir
          </Title>
        </Icon>
      </Icons>
    </NavBottom>
  );
}
