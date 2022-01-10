import { useMutation } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Mutation, MutationCreateBoardArgs } from '../../../../commons/types/generated/types';
import CommunityWriteUI from './communityWrite.presenter';
import { CREATE_BOARD } from './communityWrite.queries';
import { launchImageLibrary } from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import { IPropsNavigation } from './communityWrite.types';

const CommunityWrite = ({ navigation }: IPropsNavigation) => {
  const [createBoard] = useMutation<Pick<Mutation, 'createBoard'>, MutationCreateBoardArgs>(
    CREATE_BOARD,
  );
  const tagInput = useRef();
  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const [address] = useState<string>('');
  const [images] = useState<string[] | [] | any>([]);
  const [hashArr, setHashArr] = useState<string[] | []>([]);

  const onChangeTitle = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setTitle(event.nativeEvent.text);
  };

  const onChangeContents = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setContents(event.nativeEvent.text);
  };

  const addImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 5,
        includeBase64: true,
      });
      result.assets?.forEach((el) => images.push(el.uri));
      console.log(images);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onKeyUp = (event: any) => {
    const textArr = event.nativeEvent.text.split('');
    // console.log(textArr[textArr.length - 1]);
    if (textArr[textArr.length - 1] === ' ' && event.nativeEvent.text !== ' ') {
      setHashArr([...hashArr, event.nativeEvent.text]);
    }
  };
  useEffect(() => {
    (tagInput.current as any).clear();
  }, [hashArr]);

  const deleteHash = (idx: number) => () => {
    hashArr.splice(idx, 1);
    setHashArr([...hashArr]);
  };

  const onPressSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: '김이웃7783',
            password: '123',
            title,
            contents,
            boardAddress: {
              address,
            },
            images,
          },
        },
      });
      navigation.navigate('community', { screen: 'home' });
      console.log(result);
      const community = firestore().collection('community');
      community.doc(result.data?.createBoard._id).set({
        boardId: result.data?.createBoard._id,
        tags: hashArr,
        views: 0,
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return (
    <CommunityWriteUI
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      addImage={addImage}
      images={images}
      onKeyUp={onKeyUp}
      deleteHash={deleteHash}
      hashArr={hashArr}
      tagInput={tagInput}
      onPressSubmit={onPressSubmit}
    />
  );
};

export default CommunityWrite;
