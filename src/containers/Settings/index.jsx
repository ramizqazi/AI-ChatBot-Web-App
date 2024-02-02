import React, { useState } from 'react';

import SettingsView from './view';

/* =============================================================================
<Settings />
============================================================================= */
const Settings = ({
  temperature,
  defaultQuery,
  setDefaultQuery,
  setTemperature,
}) => {
  const [temp, setTemp] = useState(temperature);
  const [defQuery, setDefQuery] = useState(defaultQuery);

  const _handleSave = () => {
    
  };

  return (
    <SettingsView
      temp={temp}
      defQuery={defQuery}
      onSave={_handleSave}
      onTempChange={setTemp}
      setDefQuery={setDefQuery}
    />
  );
};

/* Export
============================================================================= */
export default Settings;
