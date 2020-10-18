import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Nav from "./Nav";

const Header = styled.header`
  border-bottom: 1px solid #fff;
  display: grid;
  max-height: 88px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  color: #fff;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  margin: 10px 24px;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: left;
  font-weight: 700;
  color: #fff;
`;

const Subtitle = styled.h2`
  font-size: 14px;
  text-align: right;
  font-weight: 400;
`;

const Page = styled.h3`
  font-size: 12px;
  text-align: right;
  margin-right: 24px;
  font-weight: 400;
  color: #9F9B9B;
`;

export default function Layout(props) {
  const { titlePage } = props;
  return (
    <>
      <Header>
        <Section>
          <Link to="/">
            <Title>Licoware</Title>
          </Link>
          <Subtitle>Nombre Licoreria</Subtitle>
        </Section>
        <Page>{titlePage}</Page>
      </Header>
      {props.children}
      <Nav></Nav>
    </>
  );
}
