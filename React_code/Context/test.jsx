import React, { useState } from "react";

const ThemeContext = React.createContext("dark");

// class形式使用Context，需要设置contextType
class ThemeBody extends React.Component {
  render() {
    const theme = this.context;
    console.log(theme, 88);
    return <div>here is component body, Topic Color: {theme}</div>;
  }
}
ThemeBody.contextType = ThemeContext;

const ThemeBox = () => (
  <div>
    <ThemeTitle />
    <ThemeBody />
  </div>
);

// 函数式组件使用，直接用ThemeContext.Consumer包裹，里面函数的入参即为value值
const ThemeTitle = () => (
  <ThemeContext.Consumer>
    {(value) => <h1>当前主题色为: {value}</h1>}
  </ThemeContext.Consumer>
);

export const Test = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeBox />
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Set
      </button>
    </ThemeContext.Provider>
  );
};
