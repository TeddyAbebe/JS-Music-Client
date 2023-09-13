// MusicList.js
/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import MusicCard from "./MusicCard";
import { css } from "@emotion/react";
import { FcMusic } from "react-icons/fc";

const containerStyles = css`
  width: 50%;
  padding: 16px;
  background-color: #1e293b;
  border-radius: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const cards = css`
  height: 600px;
  overflow: auto;
  border-top: 1px solid #f8dab4;
  border-radius: 20px;
  padding-top: 20px;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const heading = css`
  display: flex;
  justify-content: space-between;
`;

const search = css`
  text-align: center;
  align-self: center;
  color: antiquewhite;
`;

const inputStyles = css`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #1e293b;
  background-color: antiquewhite;
`;

const titleStyles = css`
  width: 100%;
  text-align: center;
  padding: 2px;
  font-family: serif;
  font-size: 2xl;
  color: antiquewhite;
`;

function MusicList() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div css={containerStyles}>
      <div css={heading}>
        <h1 css={titleStyles}>Music List</h1>
        <div css={search}>
          Search <FcMusic />{" "}
          <input
            placeholder="Search..."
            css={inputStyles}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div css={cards}>
        <MusicCard searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default MusicList;
