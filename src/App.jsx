import { createRoot } from "react-dom/client";

const App = () => {
  return <div className="bg-red-300">App is rendering</div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
