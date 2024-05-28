import React from 'react';
import MyPageScreen from '../components/screens/MyPageScreen';
import {useAppDispatch} from '../store';
const MyPage = () => {
  const dispatch = useAppDispatch();
  return <MyPageScreen />;
};

export default MyPage;
