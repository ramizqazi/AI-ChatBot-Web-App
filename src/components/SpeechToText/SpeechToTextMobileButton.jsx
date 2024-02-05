import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { AudioRecorder } from 'react-audio-voice-recorder';
import { useLocation, useNavigate } from 'react-router-dom';

import { sendAudioMessage as sendAudioMessageAction } from '../../redux/messagesSlice';

/* =============================================================================
<SpeechToTextMobileButton />
============================================================================= */
const SpeechToTextMobileButton = ({ sendAudioMessage }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const showWelcome = pathname === '/';

  const addAudioElement = blob => {
    if (showWelcome) {
      navigate('/chat');
    }
    sendAudioMessage(blob);
  };

  return (
    <Box left="-34px" bottom="5px" pos="absolute">
      <AudioRecorder
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        downloadOnSavePress={false}
        downloadFileExtension="webm"
      />
    </Box>
  );
};

const mapDispatchToProps = {
  sendAudioMessage: sendAudioMessageAction,
};

/* Export
============================================================================= */
export default connect(null, mapDispatchToProps)(SpeechToTextMobileButton);
