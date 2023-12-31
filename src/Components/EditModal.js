/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { IoIosClose } from "react-icons/io";
import { HiOutlineMusicalNote } from "react-icons/hi2";

const modalStyles = css`
  display: block;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 105%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  color: black;
  font-family: "Times New Roman", Times, serif;
`;

const modalContentStyles = css`
  background-color: #fefefe;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  max-width: 20rem;
  border-radius: 30px;
  position: relative;
  background-color: #f8dab4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const formStyles = css`
  padding: 10px;
  border-radius: 20px;
  width: 90%;
  border-bottom: 1px solid #1e293b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const labelStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: center;
`;

const inputStyles = css`
  padding: 8px;
  border-radius: 5px;
  border: none;
  background-color: antiquewhite;
  display: flex;
  gap: 10px;
  font-weight: bold;
  font-size: 14px;
  font-family: "Times New Roman", Times, serif;
  color: brown;
`;

const closeStyles = css`
  position: relative;
  font-size: 28px;
  font-weight: bold;
  border: 1px solid;
  border-radius: 10px;
  width: 30px;
  height: 30px;
  :hover {
    border-color: #bf0009;
  }
`;

const closeIcon = css`
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.5s;
  border: none;
  :hover {
    cursor: pointer;
    color: #bf0009;
    transform: rotate(180deg);
  }
`;

const buttonStyles = css`
  padding: 5px;
  border-radius: 5px;
  background-color: #00a3bf;
  width: 30%;
  text-align: center;
  font-weight: bold;
  font-size: medium;
  font-family: serif;
  color: white;
  cursor: pointer;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    transform: scale(0.3);
    transition: 1.2s;
  }
  :hover {
    color: black;
    background-color: #f0c14b;
    border: 1px solid #f0c14b;
  }
`;

const EditModal = ({
  isOpen,
  onClose,
  formData,
  onFormSubmit,
  onInputChange,
}) => {
  return (
    <div css={modalStyles} style={{ display: isOpen ? "block" : "none" }}>
      <div css={modalContentStyles}>
        <span css={closeStyles} onClick={onClose}>
          <IoIosClose css={closeIcon} />
        </span>
        <h2>Edit Music</h2>
        <form onSubmit={onFormSubmit} css={formStyles}>
          <label css={labelStyles}>
            <strong>Title ...</strong>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={onInputChange}
              css={inputStyles}
            />
          </label>

          <label css={labelStyles}>
            <strong>Artist ...</strong>
            <input
              type="text"
              name="artist"
              value={formData.artist}
              onChange={onInputChange}
              css={inputStyles}
            />
          </label>

          <label css={labelStyles}>
            <strong>Album ...</strong>

            <input
              type="text"
              name="album"
              value={formData.album}
              onChange={onInputChange}
              css={inputStyles}
            />
          </label>

          <label css={labelStyles}>
            <strong>Genre ...</strong>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={onInputChange}
              css={inputStyles}
            />
          </label>
          <button type="submit" css={buttonStyles}>
            <HiOutlineMusicalNote />
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
