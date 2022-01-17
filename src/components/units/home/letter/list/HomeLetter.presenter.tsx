import * as React from 'react';
import HomeLetterUIItem from './HomeLetter.presenterItem';
import { IPropsHomeLetterUI } from './HomeLetter.types';

export default function HomeLetterUI(props: IPropsHomeLetterUI) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <HomeLetterUIItem el={el} key={el._id} useditemId={props.useditemId} />
      ))}
    </>
  );
}
