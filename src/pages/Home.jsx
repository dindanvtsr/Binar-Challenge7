import '../App.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd';
import { Button, Modal } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/actions/moviesAction";
import { getCarousel } from "../redux/actions/moviesAction";
import Header from "../components/Header";
import { getSearch } from "../redux/actions/moviesAction";
import { SearchOutlined } from '@ant-design/icons';

export default function Home({ setToken }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const [srch, setSrch] = useState('');
  const [title, setTitle] = useState(false);

  // This variable is to dispatch the actions
  const dispatch = useDispatch();

  // If you use redux, you want to read some data you have use useSelector
  const { movies } = useSelector((state) => state.movies);
  const { carousel } = useSelector((state) => state.movies);

  const getPosterURL = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
  }

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const clickSearch = (srch) => {
    dispatch(getSearch(srch));
  }

  useEffect(() => {
    dispatch(getCarousel());
  }, [dispatch]);

  return (
    <div className="navbar">
      <div className='navbar2'>
        <form>
          <input
            className='inputsearch'
            type={"text"}
            value={srch}
            onChange={(e)=> {e.preventDefault(); setSrch(e.target.value)}}
            placeholder={"What do you want to watch?"}
          >
          </input>
          <SearchOutlined onClick={()=> {
            clickSearch(srch)
            setTitle(!title)
            }} className="navsearch"/>
        </form>
      </div>
      <Header />
      <Carousel autoplay>
        {
          carousel?.results?.slice(0,3).map((cr) => (
            <div key={cr.id}>
              <div style={{
                height: '550px',
                color: '#fff',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${cr.backdrop_path})`,
                backgroundSize : "cover",
                backgroundPosition: "center",
                boxShadow: "0px 0px 0px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.7)"
              }}>
                <h1 className='crslTitle'>{cr.original_title}</h1>
                <p className='crslOverview'>{cr.overview}</p>
                <Button type="primary" shape="round" danger className='buttonWatch' onClick={() => setOpen(true)}>
                  <PlayCircleOutlined />
                  WATCH TRAILER
                </Button>
                <Modal
                  title="Watch Trailer"
                  centered
                  open={open}
                  onOk={() => setOpen(false)}
                  onCancel={() => setOpen(false)}
                  width={1000}
                >
                </Modal>
              </div>
            </div>
          ))
        }
      </Carousel>
      
      {
        title? (<h1 className='titlePopular'><b>Search Results</b></h1>)
        : (<h1 className='titlePopular'><b>Movies</b></h1>)
      }

      <div className='container'>
        {
          movies?.results?.map((mvs) => (
            <div key={mvs.id}>
              <img
                src={getPosterURL(mvs.poster_path)}
                alt={mvs.original_title}
                className='poster'
                onClick={(e) => {
                  navigate(`/detail/${mvs.id}`)
                }}
              >
              </img>
            </div>
          ))
        }
      </div>
    </div>
  );
}