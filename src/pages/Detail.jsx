import '../App.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { StarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../redux/actions/moviesAction";
import Header from "../components/Header";

export default function Detail({ setToken }) {
  const params = useParams()
  const [open, setOpen] = useState(false)

  // This variable is to dispatch the actions
  const dispatch = useDispatch();

  // If you use redux, you want to read some data you have use useSelector
  const { detail } = useSelector((state) => state.movies);

  const getPoster = (posterpath) => {
    return `https://www.themoviedb.org/t/p/original${posterpath}`
  }

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      <Header />
      <img
        src={getPoster(detail?.poster_path)}
        alt={detail?.original_title}
        className='bg'>
      </img>
      
      <div className='content'>
        <h1 className='detailTitle'>{detail?.original_title}</h1>
        <div className='detailGenre1'>
          {
            detail?.genres?.map((gn) => (
              <p key={gn.id} className='detailGenre'>
                {gn.name},
              </p>
            ))
          }
        </div>
        <p className='detailOverview'>{detail?.overview}</p>
        <p><StarOutlined className='star'/>{detail?.vote_average} / 10</p>
        <Button type="primary" shape="round" danger onClick={() => setOpen(true)} className='buttonWatchDetail'>
          <PlayCircleOutlined/>
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
  );
}
