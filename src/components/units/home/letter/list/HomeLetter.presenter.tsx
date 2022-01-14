import * as React from 'react';
import HomeLetterUIItem from './HomeLetter.presenterItem';

export default function HomeLetterUI(props) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <HomeLetterUIItem el={el} key={el._id} useditemId={props.useditemId} />
      ))}
    </>
  );
}
