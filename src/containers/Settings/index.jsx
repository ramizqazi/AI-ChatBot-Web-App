import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useToast } from '@chakra-ui/react';

import SettingsView from './view';

import {
  selectTemperature,
  selectDefaultQuery,
  setTemperature as setTemperatureAction,
  setDefaultQuery as setDefaultQueryAction,
} from '../../redux/messagesSlice';

/* =============================================================================
<Settings />
============================================================================= */
const Settings = ({
  temperature,
  defaultQuery,
  setDefaultQuery,
  setTemperature,
}) => {
  const toast = useToast();
  const [temp, setTemp] = useState(temperature);
  const [defQuery, setDefQuery] = useState(defaultQuery);

  const _handleSave = () => {
    if (temp) {
      setTemperature(Math.floor(temp * 10) / 10);
    }
    setDefaultQuery(defQuery);

    toast({
      status: 'success',
      title: 'Saved',
      description: 'Settings saved successfully'
    })
  };

  return (
    <SettingsView
      temp={temp}
      defQuery={defQuery}
      onSave={_handleSave}
      onTempChange={setTemp}
      onDefQueryChange={setDefQuery}
    />
  );
};

const mapStateToProps = (state) => ({
  temperature: selectTemperature(state),
  defaultQuery: selectDefaultQuery(state)
});

const mapDispatchToProps = {
  setDefaultQuery: setDefaultQueryAction,
  setTemperature: setTemperatureAction,
};

/* Export
============================================================================= */
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
