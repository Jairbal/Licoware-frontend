import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {Header, Section, Title, Subtitle, Page} from '../../../componentsStyles/ui/layout/Layout';


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
