/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Home from "./Components/Home";
import MusicList from "./Components/MusicList";
import MusicStatistics from "./Components/MusicStatistics";
import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";

const appStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0px 5%;

  @media (max-width: 767px) {
    padding: 0 2rem 1rem;
  }
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
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const IconStyles = css`
  height: 40px;
  width: 40px;
  color: #f0c14b;
  cursor: pointer;
`;

function App() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCloseIcon, setCloseIcon] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    setCloseIcon(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCloseIcon(false);
  };

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");

    const handleMediaQueryChange = (e) => {
      setIsMobileView(e.matches);
    };

    handleMediaQueryChange(mobileMediaQuery);

    mobileMediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div css={appStyles}>
      <h1 css={titleStyles}>My Music</h1>

      <div css={componentStyles}>
        {isMobileView ? (
          <>
            {isCloseIcon ? (
              <IoIosCloseCircle css={IconStyles} onClick={closeModal} />
            ) : (
              <IoIosAddCircle css={IconStyles} onClick={openModal} />
            )}
            {isModalOpen && <Home closeModal={closeModal} />}
          </>
        ) : (
          <Home />
        )}
        <MusicList />
        <MusicStatistics />
      </div>
    </div>
  );
}

export default App;
