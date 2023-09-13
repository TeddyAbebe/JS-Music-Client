/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { GiMusicalNotes } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMusicListRequest,
  generateStatisticsRequest,
  removeMusicRequest,
  updateMusicRequest,
} from "../Redux/Slices/musicSlice";
import EditModal from "./EditModal"; // Import the EditModal component

const cardContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
`;

const cardStyles = css`
  background-color: #f8dab4;
  border: 1px solid #fff;
  color: black;
  border-radius: 30px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: auto;
`;

const infoStyles = css`
  border-bottom: 1px solid #0b0b0b;
  border-radius: 20px;
  padding: 16px;
  margin-bottom: 10px;
  font-family: serif;
  font-size: 16px;
  font-weight: bold;
`;

const buttonContainer = css`
  display: flex;
  gap: 25px;
  justify-content: center;
`;

const buttonStyles = css`
  padding: 5px;
  width: 50px;
  border: 1px solid;
  border-radius: 4px;
  font-family: serif;
  font-weight: bold;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const icon = css`
  color: brown;
`;

function MusicCard({ searchQuery }) {
  const dispatch = useDispatch();
  const musics = useSelector((state) => {
    return state.music.musicList;
  });

  useEffect(() => {
    dispatch(fetchMusicListRequest());
  }, [dispatch]);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({
    musicId: "",
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  const recentMusics = [...musics].reverse();

  const filteredMusics = recentMusics.filter((music) =>
    Object.values(music)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const handleDeleteMusic = (musicId, musicTitle, musicArtist) => {
    if (
      window.confirm(
        `Are you sure you want to delete "${musicTitle}" by ${musicArtist}?`
      )
    ) {
      dispatch(removeMusicRequest(musicId));
      dispatch(generateStatisticsRequest());
    }
  };

  const handleEditClick = (music) => {
    setEditFormData({
      musicId: music._id,
      title: music.title,
      artist: music.artist,
      album: music.album,
      genre: music.genre,
    });
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    dispatch(updateMusicRequest(editFormData));
    setEditModalOpen(false);
    dispatch(generateStatisticsRequest());
  };

  return (
    <div css={cardContainerStyles}>
      {filteredMusics.map((music) => (
        <div css={cardStyles} key={music._id}>
          <div css={infoStyles}>
            <div>
              <div key={music._id}>
                <h2 css={icon}>
                  <GiMusicalNotes /> {music.title}
                </h2>
                <p>Artist: {music.artist}</p>
                <p>Album: {music.album}</p>
                <p>Genre: {music.genre}</p>
              </div>
            </div>
          </div>
          <div css={buttonContainer}>
            <button
              title="Update"
              css={[buttonStyles, { backgroundColor: "#00a3bf" }]}
              onClick={() => handleEditClick(music)}
            >
              <FiEdit />
            </button>

            <button
              title="Remove"
              css={[buttonStyles, { backgroundColor: "#bf0000" }]}
              onClick={() =>
                handleDeleteMusic(music._id, music.title, music.artist)
              }
            >
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      ))}

      {/* Edit Modal */}
      <EditModal
        isOpen={editModalOpen}
        onClose={handleEditModalClose}
        formData={editFormData}
        onFormSubmit={handleEditFormSubmit}
        onInputChange={(e) =>
          setEditFormData({
            ...editFormData,
            [e.target.name]: e.target.value,
          })
        }
      />
    </div>
  );
}

export default MusicCard;
