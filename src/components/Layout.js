import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const Header = styled.header`
  position: fixed;
  backdrop-filter: blur(5px);
  border-bottom: 1px solid #fff;
  display: grid;
  max-height: 88px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  color: #fff;
  top: 0;
  width: 100%;
  z-index: 1;
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
  text-transform: uppercase;
`;

const Page = styled.h3`
  font-size: 12px;
  text-align: right;
  margin-right: 24px;
  font-weight: 400;
  color: #9f9b9b;
  text-transform: uppercase;
`;

export default function Layout(props) {
  const { titlePage } = useSelector((state) => state.ui);
  return (
    <>
      <Header>
        <Section>
          <Link to="/">
            <Title>Licoware</Title>
          </Link>
          <Subtitle>ALCATRAZ</Subtitle>
        </Section>
        <Page>{titlePage}</Page>
      </Header>
      {props.children}
    </>
  );
}
