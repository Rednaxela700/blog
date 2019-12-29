import React from "react"
import Layout from "../components/layout"
import { Post } from "../components/post"
import { Link } from "gatsby"

const postImgs = [
  "https://pixabay.com/get/57e0d2454f51aa14f1dc8460825668204022dfe05456744e772c78d2/code-1076536_640.jpg",
]
const look = ["Material Icon Theme", "One Dark Pro", "VSCode Great Icons"]

const codecompletion = [
  "Auto Rename Tag",
  "Color Picker",
  "Intellisense for CSS",
  "Path Intellisense",
  "docs-markdown",
  "JavaScript ES6 code snippets",
  "ES7 React/Redux/GraphQL/ReactNative snippets",
  "Visual Studio Intellisense",
  "JS JSX Snippets",
]
const git = ["gi", "Git Blame", "Git Graph", "GitLens", "Ignore files"]
const sass = [
  "Live Sass Compiler",
  "Sass",
  "Sass Yah",
  "CSS Peek",
  "SCSS Intellisense",
]

const formatters = [
  "Beautify",
  "Preetier - Code formatter",
  "Trailing Spaces",
  "Paste and Indent",
]
const preview = [
  "Live Server",
  "Markdown Preview Enchanced",
  "Quokka.js",
  "Image preview",
]
const extenstionsNames = [
  "Bracket Pair Colorizer",
  "Debugger for Chrome",
  "ES Lint",
  "Indented Block Highlighting",
  "JetBrains IDE Keymap",
  "Live Share",
  "markdownlint",
]

const ListItem = props => (
  <li>
    {props.category}
    <ul>
      {props.arr.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </li>
)
export default () => (
  <Layout>
    <div className="aside">
      <h1 className="heading">Witaj świecie</h1>
      <p>
        W tym miejscu znajdą się moje zapiski, początkującego frontend deva!
      </p>
    </div>
    <article className="article">
      <Post postHeading="Dodatki do VS Code, mój config" imgSrc={postImgs[0]}>
        <p className="post-paragraph">
          Cześć i czołem! <br /> Słowem wstępu postanowiłem podzielić się z Wami
          listą dodatków do VS Code z jakich korzystam. Jeśli zupełnie
          niespodziewacie się co to mogą być za dodatki, możecie rzucić okiem na
          sekcję&nbsp;
          <Link to="about-me">O mnie</Link>. VSC to mój edytor nr. 1, chociaż
          wolę korzystać z IDE, a dokładniej Webstorma. Postaram się je
          podzielić na kategorie i posortować. Opiszę też te, które mogą być
          warte uwagi, a ich nazwa nie mówi sama za siebie. Oglądajcie,
          testujcie:
          <ol>
            <ListItem category="Wygląd: " arr={look} />
            <ListItem category="Formattery: " arr={formatters} />
            <ListItem category="Code Completion: " arr={codecompletion} />
            <ListItem category="Sass/CSS: " arr={sass} />
            <ListItem category="Live preview: " arr={preview} />
            <ListItem category="Git: " arr={git} />
            <ListItem category="Pozostałe: " arr={extenstionsNames} />
          </ol>
        </p>
      </Post>
    </article>
  </Layout>
)
