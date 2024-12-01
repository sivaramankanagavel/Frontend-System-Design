import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showEmoji, toggleEmoji] = useState(false);
  const [emojiEl, setEmojiEl] = useState();

  const handleEmoji = () => {
    toggleEmoji(!showEmoji);
  };

  const handleMouseOver = () => {
    import(/* webpackPreftech:true, webpackChunkName: "Emoji" */ "./Emoji")
      .then((module) => module.default)
      .then((emojiEl: any) => {
        setEmojiEl(emojiEl);
      });
  };

  // useEffect(() => {
  // import("./Emoji")
  //   .then((module) => module.default)
  //   .then((emojiEl: any) => setEmojiEl(emojiEl));
  // }, []);

  return (
    <>
      <h1 onMouseOver={handleMouseOver}>Prefetch Vite + React</h1>
      <button onClick={handleEmoji}>Show Emoji</button>
      {showEmoji && emojiEl}
    </>
  );
}

export default App;
