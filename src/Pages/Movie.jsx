import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import { useParams } from 'react-router-dom';
import style from './CSS/Movie.module.css';
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer';
import Comment from '../Components/Comment/Comment';
import { useNavigate } from 'react-router-dom';
import AddFavorite from '../Components/AddFavorite/AddFavorite';
import Share from '../Components/Share/Share';
const Movie = () => {
  const { movieId } = useParams(); // Lấy movieId từ URL
  const { movieDb } = useContext(Context); // Lấy movieDb từ Context
  const navigate = useNavigate();
  if (!Array.isArray(movieDb) || movieDb.length === 0) {
    return <div className="background">Dữ liệu không khả dụng</div>;
  }

  const movie = movieDb.find((e) => e.id === movieId); // Giả sử id trong movieDb là string
  if (!movie) {
    return <div className={style.background}>Không tìm thấy phim</div>;
  }

  // Nếu không có trailer, hiển thị một video mặc định
  const videoSrc = movie.trailer || 'https://www.w3schools.com/html/mov_bbb.mp4';
  const videoTitle = movie.title || 'Movie Trailer';
  const videoDescription = movie.overview || 'No description available';



  const handleGenreClick = (genre) => {
    navigate(`/theloai/${genre}`); // Chuyển hướng tới trang thể loại
  };
  const handleCountyClick = (country) => {
    navigate(`/quocgia/${country}`); // Chuyển hướng tới trang quốc gia
  };
  return (
    <div className={style.background}>
      <div className={style.header}>
        <div className={style.title}>
          <p>{movie.name}</p>
        </div>
        <Share movieName={movie.name} />
        <AddFavorite movie={movie} className={style.favoriteIcon} /> {/* Thêm nút yêu thích */}
      </div>
      <div className={style.date}>
        <p>Phát Hành {movie.release_date} | Thời Lượng {movie.runtime}</p>
      </div>
      <div className={style.box}>
        <div className={style.image}>
          <img src={movie.image} alt={movie.name} />
        </div>
        <div className={style.watch}>
          <VideoPlayer videoSrc={videoSrc} title={videoTitle} description={videoDescription} />
        </div>
      </div>
      <div className={style.genres}>
        {movie.genres && movie.genres.map((genre, index) => (
          <button key={genre} onClick={() => handleGenreClick(genre)} className={style.genreButton}>
            {genre}
          </button>
        ))}
        {movie.countries && movie.countries.map((country, index) => (
          <button key={country} onClick={() => handleCountyClick(country)} className={style.genreButton}>
            {country}
          </button>
        ))}
      </div>
      <div className={style.desc}>
        <div>
          Mô Tả: {movie.desc}
        </div>
        <div>
          Đạo Diễn: {movie.director}
        </div>
        <div>
          Diễn Viên: {movie.actors}
        </div>
      </div>

      <Comment movieId={movieId} userId="exampleUserId" />
    </div>
  );
};

export default Movie;
