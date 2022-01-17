import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import {
  Mutation,
  MutationCreateBoardArgs,
  MutationUpdateBoardArgs,
  Query,
  QueryFetchBoardArgs,
} from '../../../../commons/types/generated/types';
import CommunityWriteUI from './communityWrite.presenter';
import {
  CREATE_BOARD,
  FETCH_BOARD,
  FETCH_USER_LOGGED_IN,
  UPDATE_BOARD,
} from './communityWrite.queries';
import { launchImageLibrary } from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import { IPropsNavigation } from './communityWrite.types';

const CommunityWrite = ({ navigation, route }: IPropsNavigation) => {
  const boardId = route.params?.boardId || undefined;
  const { data } = useQuery<Pick<Query, 'fetchBoard'>, QueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId },
  });
  const { data: userdata } = useQuery<Pick<Query, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN);
  const [createBoard] = useMutation<Pick<Mutation, 'createBoard'>, MutationCreateBoardArgs>(
    CREATE_BOARD,
  );
  const [updateBoard] = useMutation<Pick<Mutation, 'updateBoard'>, MutationUpdateBoardArgs>(
    UPDATE_BOARD,
  );
  const tagInput = useRef();
  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const [address] = useState<string>('');
  const [images] = useState<string[] | [] | any>([]);
  const [hashArr, setHashArr] = useState<string[] | []>([]);
  const [isEdit] = useState(route.params?.isEdit);
  const commuCollection = firestore().collection('community');
  const [firedata, setFiredata] = useState({});

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          height: 64,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 30,
          paddingRight: 30,
        },
      });
  }, [navigation]);

  useEffect(() => {
    commuCollection
      .doc(boardId)
      .get()
      .then((doc) => setFiredata({ ...doc.data() }));
  }, [isEdit]);

  useEffect(() => {
    isEdit ? setHashArr(firedata.tags) : setHashArr([]);
  }, [isEdit, firedata]);

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
            writer: userdata?.fetchUserLoggedIn.name,
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

  const updateBoardInput = {
    title,
    contents,
    boardAddress: {
      address: data?.fetchBoard.boardAddress?.address,
    },
    images,
  };

  if (title) {
    updateBoardInput.title = title;
  } else {
    updateBoardInput.title = data?.fetchBoard.title;
  }

  if (contents) {
    updateBoardInput.contents = contents;
  } else {
    updateBoardInput.contents = data?.fetchBoard.contents;
  }

  const onPressUpdate = async () => {
    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password: '123',
          boardId,
        },
      });
      navigation.navigate('community', { screen: 'home' });
      const community = firestore().collection('community');
      community.doc(result.data?.updateBoard._id).update({
        tags: hashArr,
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
      isEdit={isEdit}
      data={data}
      firedata={firedata}
      onPressUpdate={onPressUpdate}
    />
  );
};

export default CommunityWrite;
