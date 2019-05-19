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
  max-width: 960px;
  height: 100vh;
  padding: 1rem;
  margin: 0 auto;
`;

const Page = ({ children }) => (
  <>
    <GlobalStyle />
    <Layout>{children}</Layout>
  </>
);

export default Page;
