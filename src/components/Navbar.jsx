import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Button, Affix, Drawer, Menu } from "antd";
import styled from "styled-components";
import { Fragment } from "react";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const StyledAffix = styled(Affix)`
  .ant-affix {
    z-index: 999;
  }
`;

const StyledHeader = styled(Header)`
  background: rgb(255, 254, 252) !important;
  padding: 0 !important;
  transition: 0.5s ease;
`;

const Logo = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;

  img {
    padding: 10px;
    height: 40px;
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
  }

  &:hover {
    color: #636b6f;
  }
`;

const Hidden = styled.div`
  box-sizing: border-box;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const StyledNavBarLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
  }

  &:hover {
    color: #636b6f;
  }
`;

const StyledResponsive = styled.div`
  box-sizing: border-box;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const DrawerNavbar = styled(Drawer)`
  h3 {
    font-weight: bold;
    margin-top: 6px;
    margin-bottom: 0px;
  }

  .modal-link {
    color: black;
    text-decoration: none;
    font-size: 16px;
    margin-bottom: 0px;
    display: block;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      color: black;
    }

    &:hover {
      color: #636b6f;
    }
  }
`;

const StyledSpace = styled.div`
  color: #636b6f;
  font-size: 16px;
  padding: 10px;
`;

const navigation = [
  { name: "Home", link: "#home" },
  { name: "Application", link: "#application" },
  { name: "Results", link: "#results" },
  { name: "Participate", link: "#participate" },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <StyledAffix offsetTop={0}>
      <StyledHeader style={{ borderBottom: "1px solid rgb(255, 254, 252)" }}>
        <Row align={"middle"}>
          <Col xs={20} lg={4}>
            <Logo to="/">
              <img src="/src/assets/logoName.png" />
            </Logo>
          </Col>
          <Col xs={4} lg={20}>
            <Hidden>
              <Row type="flex" justify="end">
                <Fragment>
                  {navigation.map((element) => (
                    <StyledNavBarLink
                      key={element.name}
                      to={`/${element.link}`}
                    >
                      {element.name}
                    </StyledNavBarLink>
                  ))}
                </Fragment>
                {loggedIn ? (
                  <Fragment>
                    <StyledSpace>|</StyledSpace>

                    <StyledNavBarLink key={"dashboard"} to={"/dashboard"}>
                      Dashboard
                    </StyledNavBarLink>
                    <StyledNavBarLink
                      key={"logout"}
                      to=""
                      onClick={() => {
                        /* logout(); */
                        console.log("logout");
                      }}
                    >
                      Logout
                    </StyledNavBarLink>
                  </Fragment>
                ) : (
                  <Fragment>
                    <StyledSpace>|</StyledSpace>
                    <StyledNavBarLink key={"login"} to={"/login"}>
                      Login
                    </StyledNavBarLink>
                  </Fragment>
                )}
              </Row>
            </Hidden>

            <StyledResponsive>
              <Row type="flex" justify="end">
                <Button
                  onClick={() => setVisible(true)}
                  style={{ margin: "15px" }}
                  type="primary"
                >
                  <MenuOutlined />
                </Button>
              </Row>
            </StyledResponsive>
          </Col>
        </Row>
      </StyledHeader>
      <DrawerNavbar
        open={visible}
        onClose={() => setVisible(false)}
        placement="right"
      >
        <Menu>
          {loggedIn ? (
            <Fragment>
              <Menu.Item key={"dashboard"}>
                <StyledNavBarLink
                  onClick={() => setVisible(false)}
                  to="/dashboard"
                >
                  <b>Dashboard</b>
                </StyledNavBarLink>
              </Menu.Item>

              <Menu.Item key={"logout"}>
                <StyledNavBarLink
                  to=""
                  onClick={() => {
                    /* logout(); */
                    console.log("logout");
                  }}
                >
                  <b>Logout</b>
                </StyledNavBarLink>
              </Menu.Item>
            </Fragment>
          ) : (
            <Menu.Item key={"login"}>
              <StyledNavBarLink onClick={() => setVisible(false)} to="/login">
                <b>Login</b>
              </StyledNavBarLink>
            </Menu.Item>
          )}

          {navigation.map((element) => (
            <Menu.Item key={element.name}>
              <StyledNavBarLink
                key={element.name}
                to={`/${element.link}`}
                onClick={() => setVisible(false)}
              >
                {element.name}
              </StyledNavBarLink>
            </Menu.Item>
          ))}
        </Menu>
      </DrawerNavbar>
    </StyledAffix>
  );
};

export default Navbar;
