import EditUI from './edit.presenter';
import React from 'react';
import { IPropsEditUI } from './edit.types';

const Edit = ({ navigation }: IPropsEditUI) => {
  return <EditUI navigation={navigation} />;
};

export default Edit;
