export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Board = {
  __typename?: 'Board';
  _id: Scalars['ID'];
  boardAddress?: Maybe<BoardAddress>;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  dislikeCount: Scalars['Int'];
  images?: Maybe<Array<Scalars['String']>>;
  likeCount: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  writer?: Maybe<Scalars['String']>;
  youtubeUrl?: Maybe<Scalars['String']>;
};

export type BoardAddress = {
  __typename?: 'BoardAddress';
  _id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  zipcode?: Maybe<Scalars['String']>;
};

export type BoardAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type BoardComment = {
  __typename?: 'BoardComment';
  _id: Scalars['ID'];
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  rating: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  writer?: Maybe<Scalars['String']>;
};

export type CreateBoardCommentInput = {
  contents: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  rating: Scalars['Float'];
  writer?: InputMaybe<Scalars['String']>;
};

export type CreateBoardInput = {
  boardAddress?: InputMaybe<BoardAddressInput>;
  contents: Scalars['String'];
  images?: InputMaybe<Array<Scalars['String']>>;
  password?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  writer?: InputMaybe<Scalars['String']>;
  youtubeUrl?: InputMaybe<Scalars['String']>;
};

export type CreateUseditemInput = {
  contents: Scalars['String'];
  images?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  price: Scalars['Int'];
  remarks: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']>>;
  useditemAddress?: InputMaybe<UseditemAddressInput>;
};

export type CreateUseditemQuestionAnswerInput = {
  contents: Scalars['String'];
};

export type CreateUseditemQuestionInput = {
  contents: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type FileManager = {
  __typename?: 'FileManager';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  isUsed: Scalars['Boolean'];
  size?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard: Board;
  createBoardComment: BoardComment;
  createPointTransactionOfBuyingAndSelling: Useditem;
  createPointTransactionOfLoading: PointTransaction;
  createUseditem: Useditem;
  createUseditemQuestion: UseditemQuestion;
  createUseditemQuestionAnswer: UseditemQuestionAnswer;
  createUser: User;
  deleteBoard: Scalars['ID'];
  deleteBoardComment: Scalars['ID'];
  deleteBoards: Array<Scalars['ID']>;
  deleteUseditem: Scalars['ID'];
  deleteUseditemQuestion: Scalars['ID'];
  deleteUseditemQuestionAnswer: Scalars['String'];
  dislikeBoard: Scalars['Int'];
  likeBoard: Scalars['Int'];
  loginUser: Token;
  loginUserExample: Token;
  logoutUser: Scalars['Boolean'];
  resetUserPassword: Scalars['Boolean'];
  restoreAccessToken: Token;
  toggleUseditemPick: Scalars['Int'];
  updateBoard: Board;
  updateBoardComment: BoardComment;
  updateUseditem: Useditem;
  updateUseditemQuestion: UseditemQuestion;
  updateUseditemQuestionAnswer: UseditemQuestionAnswer;
  updateUser: User;
  uploadFile: FileManager;
};


export type MutationCreateBoardArgs = {
  createBoardInput: CreateBoardInput;
};


export type MutationCreateBoardCommentArgs = {
  boardId: Scalars['ID'];
  createBoardCommentInput: CreateBoardCommentInput;
};


export type MutationCreatePointTransactionOfBuyingAndSellingArgs = {
  useritemId: Scalars['ID'];
};


export type MutationCreatePointTransactionOfLoadingArgs = {
  impUid: Scalars['ID'];
};


export type MutationCreateUseditemArgs = {
  createUseditemInput: CreateUseditemInput;
};


export type MutationCreateUseditemQuestionArgs = {
  createUseditemQuestionInput: CreateUseditemQuestionInput;
  useditemId: Scalars['ID'];
};


export type MutationCreateUseditemQuestionAnswerArgs = {
  createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput;
  useditemQuestionId: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteBoardArgs = {
  boardId: Scalars['ID'];
};


export type MutationDeleteBoardCommentArgs = {
  boardCommentId: Scalars['ID'];
  password?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteBoardsArgs = {
  boardIds: Array<Scalars['ID']>;
};


export type MutationDeleteUseditemArgs = {
  useditemId: Scalars['ID'];
};


export type MutationDeleteUseditemQuestionArgs = {
  useditemQuestionId: Scalars['ID'];
};


export type MutationDeleteUseditemQuestionAnswerArgs = {
  useditemQuestionAnswerId: Scalars['ID'];
};


export type MutationDislikeBoardArgs = {
  boardId: Scalars['ID'];
};


export type MutationLikeBoardArgs = {
  boardId: Scalars['ID'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginUserExampleArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationResetUserPasswordArgs = {
  password: Scalars['String'];
};


export type MutationToggleUseditemPickArgs = {
  useditemId: Scalars['ID'];
};


export type MutationUpdateBoardArgs = {
  boardId: Scalars['ID'];
  password?: InputMaybe<Scalars['String']>;
  updateBoardInput: UpdateBoardInput;
};


export type MutationUpdateBoardCommentArgs = {
  boardCommentId: Scalars['ID'];
  password?: InputMaybe<Scalars['String']>;
  updateBoardCommentInput: UpdateBoardCommentInput;
};


export type MutationUpdateUseditemArgs = {
  updateUseditemInput: UpdateUseditemInput;
  useditemId: Scalars['ID'];
};


export type MutationUpdateUseditemQuestionArgs = {
  updateUseditemQuestionInput: UpdateUseditemQuestionInput;
  useditemQuestionId: Scalars['ID'];
};


export type MutationUpdateUseditemQuestionAnswerArgs = {
  updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput;
  useditemQuestionAnswerId: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type PointTransaction = {
  __typename?: 'PointTransaction';
  _id: Scalars['ID'];
  amount: Scalars['Int'];
  balance: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  impUid?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  statusDetail: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  useditem?: Maybe<Useditem>;
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  fetchBoard: Board;
  fetchBoardComments: Array<BoardComment>;
  fetchBoards: Array<Board>;
  fetchBoardsCount: Scalars['Int'];
  fetchBoardsCountOfMine: Scalars['Int'];
  fetchBoardsOfMine: Array<Board>;
  fetchBoardsOfTheBest: Array<Board>;
  fetchPointTransactions: Array<PointTransaction>;
  fetchPointTransactionsCountOfBuying: Scalars['Int'];
  fetchPointTransactionsCountOfLoading: Scalars['Int'];
  fetchPointTransactionsCountOfSelling: Scalars['Int'];
  fetchPointTransactionsOfBuying: Array<PointTransaction>;
  fetchPointTransactionsOfLoading: Array<PointTransaction>;
  fetchPointTransactionsOfSelling: Array<PointTransaction>;
  fetchUseditem: Useditem;
  fetchUseditemQuestionAnswers: Array<UseditemQuestionAnswer>;
  fetchUseditemQuestions: Array<UseditemQuestion>;
  fetchUseditems: Array<Useditem>;
  fetchUseditemsCountIBought: Scalars['Int'];
  fetchUseditemsCountIPicked: Scalars['Int'];
  fetchUseditemsCountISold: Scalars['Int'];
  fetchUseditemsIBought: Array<Useditem>;
  fetchUseditemsIPicked: Array<Useditem>;
  fetchUseditemsISold: Array<Useditem>;
  fetchUseditemsOfTheBest: Array<Useditem>;
  fetchUserLoggedIn: User;
};


export type QueryFetchBoardArgs = {
  boardId: Scalars['ID'];
};


export type QueryFetchBoardCommentsArgs = {
  boardId: Scalars['ID'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryFetchBoardsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type QueryFetchBoardsCountArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  search?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type QueryFetchPointTransactionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryFetchPointTransactionsOfBuyingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryFetchPointTransactionsOfLoadingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryFetchPointTransactionsOfSellingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryFetchUseditemArgs = {
  useditemId: Scalars['ID'];
};


export type QueryFetchUseditemQuestionAnswersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  useditemQuestionId: Scalars['ID'];
};


export type QueryFetchUseditemQuestionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  useditemId: Scalars['ID'];
};


export type QueryFetchUseditemsArgs = {
  isSoldout?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryFetchUseditemsIBoughtArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryFetchUseditemsIPickedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryFetchUseditemsISoldArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String'];
};

export type UpdateBoardCommentInput = {
  contents?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
};

export type UpdateBoardInput = {
  boardAddress?: InputMaybe<BoardAddressInput>;
  contents?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  youtubeUrl?: InputMaybe<Scalars['String']>;
};

export type UpdateUseditemInput = {
  contents?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  remarks?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  useditemAddress?: InputMaybe<UseditemAddressInput>;
};

export type UpdateUseditemQuestionAnswerInput = {
  contents: Scalars['String'];
};

export type UpdateUseditemQuestionInput = {
  contents: Scalars['String'];
};

export type UpdateUserInput = {
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
};

export type Useditem = {
  __typename?: 'Useditem';
  _id: Scalars['ID'];
  buyer?: Maybe<User>;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  pickedCount?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  remarks: Scalars['String'];
  seller?: Maybe<User>;
  soldAt?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<Array<Scalars['String']>>;
  updatedAt: Scalars['DateTime'];
  useditemAddress?: Maybe<UseditemAddress>;
};

export type UseditemAddress = {
  __typename?: 'UseditemAddress';
  _id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  zipcode?: Maybe<Scalars['String']>;
};

export type UseditemAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type UseditemQuestion = {
  __typename?: 'UseditemQuestion';
  _id: Scalars['ID'];
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  useditem: Useditem;
  user: User;
};

export type UseditemQuestionAnswer = {
  __typename?: 'UseditemQuestionAnswer';
  _id: Scalars['ID'];
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  useditemQuestion: UseditemQuestion;
  user: User;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userPoint?: Maybe<UserPoint>;
};

export type UserPoint = {
  __typename?: 'UserPoint';
  _id: Scalars['ID'];
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  user: User;
};
