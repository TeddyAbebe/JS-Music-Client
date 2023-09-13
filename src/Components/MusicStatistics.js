/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  generateStatisticsRequest,
  setStatisticsSuccess,
  setStatisticsFailure,
} from "../Redux/Slices/musicSlice";
import { css } from "@emotion/react";

const containerStyles = css`
  width: 25%;
  padding: 16px;
  background-color: #1e293b;
  border-radius: 20px;
  color: antiquewhite;
  display: flex;
  flex-direction: column;
`;

const totalStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
`;

const statStyle = css`
  max-height: 600px;
  overflow: scroll;
  border-top: 1px solid #f8dab4;
  border-radius: 20px;
  padding: 15px;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const headingStyles = css`
  font-size: 24px;
  text-align: center;
`;

const statisticItemStyles = css`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

function MusicStatistics() {
  const dispatch = useDispatch();
  const statistics = useSelector((state) => state.music.statistics);

  useEffect(() => {
    dispatch(generateStatisticsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (statistics) {
      dispatch(setStatisticsSuccess(statistics));
    } else {
      dispatch(setStatisticsFailure("Failed to fetch statistics"));
    }
  }, [statistics, dispatch]);

  return (
    <div css={containerStyles}>
      <h1 css={headingStyles}>Music Statistics</h1>

      <div css={statStyle}>
        <div css={totalStyle}>
          <div css={statisticItemStyles}>
            <span>Total Musics :</span>
            <span>{statistics.totalMusic}</span>
          </div>

          <div css={statisticItemStyles}>
            <span>Total Artists :</span>
            <span>{statistics.totalArtists}</span>
          </div>

          <div css={statisticItemStyles}>
            <span>Total Albums :</span>
            <span>{statistics.totalAlbums}</span>
          </div>

          <div css={statisticItemStyles}>
            <span>Total Genres :</span>
            <span>{statistics.totalGenres}</span>
          </div>
        </div>

        <h2>Number of Songs & Albums by Artist :</h2>
        <ul>
          {statistics?.albumsPerArtist?.map((artistStat) => (
            <li key={artistStat._id}>
              {artistStat._id} : {artistStat.count} songs,{" "}
              {artistStat.albums.length} albums
            </li>
          ))}
          {!statistics?.albumsPerArtist?.length && <li>No Music available</li>}
        </ul>

        <h2>Number of Songs by Genre :</h2>
        <ul>
          {statistics?.musicsPerGenre?.map((genreStat) => (
            <li key={genreStat._id}>
              {genreStat._id} : {genreStat.count}
            </li>
          ))}
          {!statistics?.musicsPerGenre?.length && <li>No Music available</li>}
        </ul>

        <h2>Number of Songs by Album :</h2>
        <ul>
          {statistics?.musicsPerAlbum?.map((albumStat) => (
            <li key={albumStat._id}>
              {albumStat._id} : {albumStat.count} songs
            </li>
          ))}
          {!statistics?.musicsPerAlbum?.length && <li>No Music available</li>}
        </ul>
      </div>
    </div>
  );
}

export default MusicStatistics;
