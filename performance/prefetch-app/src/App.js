import { useState } from "react";

const App = () => {
  const [showEmoji, toggleEmoji] = useState(false);
  const [emojiEle, setEmojiPickerEl] = useState();
  const handleClick = () => {
    import(/* webpackPrefetch: true, webpackChunkName: "emoji" */ "./Emoji")
      .then((module) => module.default)
      .then((emojiPicker) => {
        setEmojiPickerEl(emojiPicker);
        toggleEmoji(true);
      });
  };
  return (
    <div>
      <h1>Webpack Prefetch</h1>
      <button onClick={handleClick}>Show Emoji</button>
      {showEmoji && emojiEle}
    </div>
  );
};

export default App;