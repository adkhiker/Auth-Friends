import styled from "styled-components";

const NavStyle = styled.div`
  nav {
    border: 3px solid #8a4f7d;

    margin: 0 0 3% 0;
    padding: 2%;
    background: #88a096;
  }

  nav a {
    text-decoration: none;
    margin: 5%;
    color: black;
    :hover {
      color: white;
      font-weight: bold;
    }
  }
`;
export default NavStyle;
