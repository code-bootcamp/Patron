import SettingUI from './setting.presenter';
import React, { useState } from 'react';

const Setting = () => {
  const [isEnabledFirst, setIsEnabledFirst] = useState(false);
  const [isEnabledSecond, setIsEnabledSecond] = useState(false);
  const toggleSwitchFirst = () => setIsEnabledFirst(!isEnabledFirst);
  const toggleSwitchSecond = () => setIsEnabledSecond(!isEnabledSecond);

  return (
    <SettingUI
      isEnabledFirst={isEnabledFirst}
      isEnableSecond={isEnabledSecond}
      toggleSwitchFirst={toggleSwitchFirst}
      toggleSwitchSecond={toggleSwitchSecond}
    />
  );
};

export default Setting;
