import { LanguageCode } from "../entity/type"

// eslint-disable-next-line
const htmlFontSize = (): string => {
  const screenSize = document.body.clientWidth
  if (screenSize < 450) {
    return "calc(100vw / 3.75)"
  }
  if (screenSize >= 450 && screenSize < 600) {
    return "calc(100vw / 5.6)"
  }
  if (screenSize >= 600 && screenSize < 750) {
    return "calc(100vw / 6.7)"
  }
  if (screenSize >= 750 && screenSize < 900) {
    return "calc(100vw / 7.7)"
  }
  if (screenSize >= 900 && screenSize < 1050) {
    return "calc(100vw / 9)"
  }
  if (screenSize >= 1050 && screenSize < 1300) {
    return "calc(100vw / 13)"
  }
  return "100px"
}

export const GlobalStyle = (props: LanguageCode) => `
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select {
  margin: 0;
}

html {
  box-sizing: border-box;
  font-family: ${
    props === "en-US"
      ? "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Arial"
      : "PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Source Han Sans CN,sans-serif"
  };
  font-size: 100px;
}

*, *::before, *::after {
  box-sizing: inherit;
}

img,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}`
