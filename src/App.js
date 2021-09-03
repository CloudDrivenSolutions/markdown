import ReactMarkdown from "react-markdown";

function App() {
  const markdown = `
  Well I'm attempting Something
  - Like an Ordered List
  - ***With Bold and Italics***
  1. Testing with numbers too
  `;

  return (
    <div className="m-2">
      <ReactMarkdown children={markdown} />
    </div>
  );
}

export default App;
