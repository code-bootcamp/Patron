// import { useMutation } from '@apollo/client';
// import React, { useState } from 'react';
// import CommunityWriteUI from './communityWrite.presenter';
// import { CREATE_BOARD } from './communityWrite.queries';

// const CommunityWrite = () => {
//   const [createBoard] = useMutation(CREATE_BOARD);
//   const [name, setName] = useState('');
//   const [contents, setContents] = useState('');

//   const onChangeTitle = (event) => {
//     setName(event.nativeEvent.text);
//   };

//   const onChangeContents = (event) => {
//     setContents(event.nativeEvent.text);
//   };

//   const onPressSubmit = () => {
//     try {
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   return <CommunityWriteUI onChangeTitle={onChangeTitle} onChangeContents={onChangeContents}/>;
// };

export const CommunityWrite = () => {
  return <></>;
};

export default CommunityWrite;
