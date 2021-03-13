import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = {
  types: {
    code: (props) => (
      <SyntaxHighlighter
        language={props.node.language || "text"}
        style={atelierCaveLight}
      >
        {props.node.code}
      </SyntaxHighlighter>
    ),
  },
};

export default Code;
