import React, { useEffect } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { RiVoiceprintFill } from 'react-icons/ri';
import { IconButton } from '@chakra-ui/react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

/* =============================================================================
<SpeechToTextWebButton />
============================================================================= */
const SpeechToTextWebButton = ({ onTranscriptChange }) => {
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ clearTranscriptOnListen: true });

  useEffect(() => {
    if (transcript) {
      onTranscriptChange(transcript);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript]);

  const _handleMicrophoneClick = () => {
    if (!browserSupportsSpeechRecognition) {
      alert('Not Support');
    }

    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };

  return (
    <IconButton
      left="-35px"
      bottom="5px"
      pos="absolute"
      bg="transparent"
      icon={listening ? <RiVoiceprintFill color="red" /> : <FaMicrophone />}
      onClick={_handleMicrophoneClick}
    />
  );
};

/* Export
============================================================================= */
export default SpeechToTextWebButton;
