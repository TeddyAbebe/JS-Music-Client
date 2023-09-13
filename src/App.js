/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Home from "./Components/Home";
import MusicList from "./Components/MusicList";
import MusicStatistics from "./Components/MusicStatistics";

const appStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0px 50px;
`;

const titleStyles = css`
  width: 100%;
  text-align: center;
  padding: 2px;
  font-family: serif;
  font-size: 2xl;
  color: antiquewhite;
`;
const componentStyles = css`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

function App() {
  return (
    <div css={appStyles}>
      <h1 css={titleStyles}>My Music</h1>
      <div css={componentStyles}>
        <Home />
        <MusicList />
        <MusicStatistics />
      </div>
    </div>
  );
}

export default App;
