import PersonalInformationUI from './personalInformation.presenter';
import React from 'react';
import { IPropsPersonalinformation } from './personalinformation.types';

const PersonalInformation = ({ navigation }: IPropsPersonalinformation) => {
  return <PersonalInformationUI navigation={navigation} />;
};

export default PersonalInformation;
