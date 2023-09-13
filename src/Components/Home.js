/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import {
  addMusicRequest,
  fetchMusicListRequest,
  generateStatisticsRequest,
} from "../Redux/Slices/musicSlice";

const containerStyles = css`
  width: 20%;
  margin-top: 10%;
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #1e293b;
`;

const titleStyles = css`
  width: 100%;
  text-align: center;
  padding: 2px;
  font-family: serif;
  font-size: 2xl;
  color: antiquewhite;
`;

const inputStyles = css`
  padding: 8px;
  border-radius: 5px;
  width: 90%;
  border: none;
  background-color: antiquewhite;
`;

const buttonStyles = css`
  padding: 5px;
  border-radius: 5px;
  background-color: #f0c14b;
  width: 30%;
  text-align: center;
  font-weight: bold;
  font-size: large;
  font-family: serif;
  color: #000;
  cursor: pointer;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  const [musicData, setMusicData] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMusicData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddMusic = () => {
    dispatch(addMusicRequest(musicData));
    setMusicData({
      title: "",
      artist: "",
      album: "",
      genre: "",
    });
    dispatch(fetchMusicListRequest());
    dispatch(generateStatisticsRequest());
  };

  return (
    <div css={containerStyles}>
      <h1 css={titleStyles}>Add Music</h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        css={inputStyles}
        value={musicData.title}
        onChange={handleInputChange}
        required
      />

      <input
        type="text"
        name="artist"
        placeholder="Artist"
        css={inputStyles}
        value={musicData.artist}
        onChange={handleInputChange}
        required
      />

      <input
        type="text"
        name="album"
        placeholder="Album"
        css={inputStyles}
        value={musicData.album}
        onChange={handleInputChange}
        required
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        css={inputStyles}
        value={musicData.genre}
        onChange={handleInputChange}
        required
      />
      <button css={buttonStyles} onClick={handleAddMusic}>
        <HiOutlineMusicalNote /> Add
      </button>
    </div>
  );
}

export default Home;
