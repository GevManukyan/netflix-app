import { useState } from "react";
import Header from "../header/Header";
import "./main.css"
import PopularMoives from "./components/popularMovies/popularMovies";
import TopRated from "./components/topRated/topRated";
import TvShows from "./components/TVShows/TVShow";
import Upcoming from "./components/upcomingMovies/upcoming";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { AiOutlineSound } from "react-icons/ai";

export default function Main() {

    const [videoSound, setVideoSound] = useState(true)
    const sound = () =>setVideoSound(!videoSound)
    return (
        <div className="main">
            <Header />
            <div className="background" >
                <video style={{ width: "120%" }} autoPlay muted={videoSound} loop className="video">
                    <source src="/media/videos/netflix-trailer.mp4" type="video/mp4" />
                </video>
                <div className="movieData">
                    <div className="filmOverview">
                        <h1 className="filmTitle">Movie name</h1>
                        <p className="overViewText"> Facere aliquid possimus repudiandae, reprehenderit id deserunt similique debitis error, officia ipsam enim!</p>
                        <div className="buttons">
                            <button className="playBtn"> <FaPlay size={"25px"} /> <p className="titleBtn">Play</p></button>
                            <button className="infoBtn"><IoIosInformationCircleOutline size={"30px"} /><p className="titleBtn">More info</p> </button>
                        </div>
                    </div>
                    <div className="controls">
                        <div className="sound" onClick={() => sound()}>
                            <AiOutlineSound size={"25px"} />
                        </div>
                        <div className="age">
                            <p>16+</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ position: "relative", zIndex: "1" }} className="moviesLists">
                <PopularMoives />
                <TopRated />
                <TvShows />
                <Upcoming />
            </div>

        </div>
    )
}