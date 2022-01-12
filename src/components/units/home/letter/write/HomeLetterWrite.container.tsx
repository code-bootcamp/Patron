import { useMutation } from '@apollo/client';
import * as React from 'react';
import { CREATE_USEDITEM_QUESTION } from './HomeLetterWrite.queries';
import InputComment from '../../../../commons/inputs/comment/index';
import { Pressable, Text } from 'react-native';

export default function HomeLetterWrite(props) {
  const [letter, setLetter] = React.useState('');
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);

  // console.log(props.route.params?.useditemId);
  // console.log(data?.fetchUserLoggedIn.name || 'none');

  async function onPressSubmit() {
    await createUseditemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents: letter,
        },
        useditemId: props.route.params?.useditemId,
      },
    });
  }

  function onChangeLetter(event) {
    setLetter(event.nativeEvent.text);
  }

  return (
    <>
      <InputComment onChange={onChangeLetter} onPress={onPressSubmit} />
      <Pressable>
        <Text>sodfjsoi</Text>
      </Pressable>
    </>
  );
}
