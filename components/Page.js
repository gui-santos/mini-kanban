import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica', sans-serif;
    font-size: 16px;
  }
`;

const Layout = styled.div`
  height: 100vh;
  padding: 1rem;
`;

const Page = ({ children }) => (
  <>
    <GlobalStyle />
    <Layout>{children}</Layout>
  </>
);

export default Page;
