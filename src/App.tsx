import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import { Button } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from './redux/configStore';
import { handleLike } from './redux/likeReducer/likeReducer';

// import './assets/scss/main.scss'

function App() {
  const { value } = useSelector((state: RootState) => state.like)
  const dispatch = useDispatch()
  const handleLikee = () => {
    dispatch(handleLike(1))
  }

  return (
    <>
      <Button className='btn' type='primary' onClick={handleLikee}>like</Button> {value}
    </>
  );
}

export default App;
