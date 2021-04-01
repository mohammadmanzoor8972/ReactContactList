import "./styles.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    //alert("hi");
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Hello CodeSandbox</h1>
      </div>
      <div className="container">
        <div className="contactList">
          {data.map((item, index) => (
            <div className="articleItemsResult" key={index} id={item}>
              <h2>{item}</h2>
              <p>xxxxx 1</p>
              <p>xxxxx 2</p>
              <p>xxxxx 3</p>
              <p>xxxxx 2</p>
              <p>xxxxx A</p>
            </div>
          ))}
        </div>
        <div className="article">
          {data.map((item, index) => (
            <a href={"#" + item}>
              <ArticleItems key={index}>{item}</ArticleItems>
            </a>
          ))}
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
const data = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "#"
];
const ArticleItems = ({ children }) => {
  return <div className="articleItems">{children}</div>;
};
