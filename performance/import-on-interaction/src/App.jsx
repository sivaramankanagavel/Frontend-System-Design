import { useState, lazy, Suspense } from "react";
// import { Emoji, Message } from "./components";

import "./App.css";

const Emoji = lazy(() => import("./components/Emoji"));
const Message = lazy(() => import("./components/Message"));

function App() {
  const [showMsg, toggleMsg] = useState(false);
  return (
    <>
      <Message />
      <button onClick={() => toggleMsg((prev) => !prev)}>Show Emoji</button>
      {showMsg && (
        <Suspense fallback={<>Loading....</>}>
          <Emoji />
        </Suspense>
      )}
    </>
  );
}

export default App;
