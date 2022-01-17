import * as React from 'react';
import * as E from './HomeLetter.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { displayedAt } from '../../../../../commons/libraries/utils';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { DELETE_USEDITEM_QUESTION, FETCH_USEDITEM_QUESTIONS } from './HomeLetter.queries';
import { useMutation } from '@apollo/client';
import HomeLetterWrite from '../write/HomeLetterWrite.container';
import { IPropsHomeLetterUIItem } from './HomeLetter.types';
import {
  Mutation,
  MutationDeleteUseditemQuestionArgs,
} from '../../../../../commons/types/generated/types';

export default function HomeLetterUIItem(props: IPropsHomeLetterUIItem) {
  const [deleteUseditemQuestion] = useMutation<
    Pick<Mutation, 'deleteUseditemQuestion'>,
    MutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);
  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  async function onSelectDelete() {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: {
              useditemId: props.useditemId,
            },
          },
        ],
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  function onSelectEdit() {
    setIsEdit(true);
  }

  return (
    <>
      <E.Wrapper>
        {isEdit ? (
          <HomeLetterWrite
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            usedQId={props.el?._id}
            useditemId={props.useditemId}
          />
        ) : (
          <>
            <E.PhotoWrapper></E.PhotoWrapper>
            <E.CommentWrapper>
              <E.CommentTop>
                <E.Name>{props.el?.user.name}</E.Name>
                <E.Time>{displayedAt(props.el?.createdAt)}</E.Time>
              </E.CommentTop>
              <E.CommentBottom>
                <E.Contents>{props.el?.contents}</E.Contents>
              </E.CommentBottom>
            </E.CommentWrapper>
            <E.EandDWrapper>
              <Menu>
                <MenuTrigger>
                  <Icon
                    name="ellipsis-vertical"
                    color="#9f9f9f"
                    size={16}
                    style={{ padding: 10 }}
                  />
                </MenuTrigger>
                <MenuOptions optionsContainerStyle={{ width: 100 }}>
                  <MenuOption onSelect={onSelectEdit} text="수정" style={{ padding: 10 }} />
                  <MenuOption onSelect={onSelectDelete} text="삭제" style={{ padding: 10 }} />
                </MenuOptions>
              </Menu>
            </E.EandDWrapper>
          </>
        )}
      </E.Wrapper>
    </>
  );
}
