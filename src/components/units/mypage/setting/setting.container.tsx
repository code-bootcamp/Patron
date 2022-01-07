import SettingUI from './setting.presenter';
import React, { useState } from 'react';

const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return <SettingUI isEnabled={isEnabled} toggleSwitch={toggleSwitch} />;
};

export default Setting;
