import PersonalInformationUI from './personalInformation.presenter';
import React from 'react';
import { IPropsPersonalinformationUI } from './personalinformation.types';

const PersonalInformation = ({ navigation }: IPropsPersonalinformationUI) => {
  return <PersonalInformationUI navigation={navigation} />;
};

export default PersonalInformation;
