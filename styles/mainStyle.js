import reset from "react-style-reset/string";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
  --cr-title: rgb(51, 51, 51);
  --cr-p: rgba(51, 51, 51, 0.8);
  --cr-des: rgba(51, 51, 51, 0.4);
  --cr-bg: #f7f7f7;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: var(--cr-bg);
}

a {
  color: var(--cr-title);
  text-decoration: none;
}

#logo {
  width: 200px;
  margin-bottom: 40px;
}

main {
  max-width: 480px;
  width: 100%;
  padding: 64px 20px;
}

p {
  color: var(--cr-p);
  font-size: 15px;
  line-height: 26px;
  font-weight: 400;
}

h1 {
  font-size: 18px;
  line-height: 32px;
  font-weight: 500;
}

li  span {
    font-size: 12px;
    margin-top: 8px;
    opacity: 0.4;
    display: flex;
  }

li h1 {
    cursor: pointer;
    margin-top: 40px;
    margin-bottom: 10px;
}

li:nth-of-type(1) h1{
  margin-top: 0;
}

article h1 {
    margin-bottom: 10px;
}

article span {
    font-size: 12px;
    margin-top: 8px;
    opacity: 0.4;
  }

article h2 {
    margin: 20px 0 8px 0;
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
}

article ul {
    margin: 12px 0;
}

article li {
    list-style-type: disc;
    color: var(--cr-p);
    font-size: 16px;
    line-height: 26px;
}

article p {
    margin-bottom: 10px;
}

article img {
  width: 100%;
  margin: 10px 0;
}

footer {
    p {
        font-size: 12px;
        line-height: 12px;
        margin-top: 40px;
        color: var(--cr-des);
    }
}
`;

export default GlobalStyles;
