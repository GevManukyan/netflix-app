import { useEffect, useState } from "react";
import styles from "./style.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { memo } from "react";
const PopularMoives = () => {
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2JhNjgwZjBhMWI5ZDRlZTZmODYzNjI2ODAxZjAzZSIsInN1YiI6IjY2MWQ2NDY4MWU2NDg5MDE4NmQ1MzFmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._lkX1tA3HG1GXAsHnZfbBgtgxWpTAHKrOa2aG7w77E4'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setPopularMovies(json.results))
      .catch(err => console.error('error:' + err));
  }, [])
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 13,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 8,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 767, min: 320 },
      items: 4,
      slidesToSlide: 1
    }
  };

  return (

    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ color: "white", padding: "10px" }} className={styles.title}>Popular Movies</h1>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {popularMovies?.map((e) => {
          const path = "https://image.tmdb.org/t/p/original/" + e.poster_path
          return (
            <div key={e.id} style={{ cursor: "pointer" }}>
              <img src={path} alt="" width={"100px"} />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default memo(PopularMoives)