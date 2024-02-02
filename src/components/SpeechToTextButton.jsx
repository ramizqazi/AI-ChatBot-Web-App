import React, { useEffect } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { AudioRecorder } from 'react-audio-voice-recorder';
import { RiVoiceprintFill } from 'react-icons/ri';
import { Box, IconButton, useDisclosure } from '@chakra-ui/react';

import MozillaSpeechGuideModal from './MozillaSpeechGuideModal';

/* =============================================================================
<SpeechToTextButton />
============================================================================= */
const SpeechToTextButton = ({ onTranscriptChange, setAudioMessage }) => {
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ clearTranscriptOnListen: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isBrowserMozilla = navigator.userAgent.includes('Mozilla');
  const isMobileBrowser = navigator.userAgent.includes('Android' || 'iPhone');

  useEffect(() => {
    if (transcript) {
      onTranscriptChange(transcript);
    }
  }, [transcript]);

  const _handleMicrophoneClick = () => {
    if (!browserSupportsSpeechRecognition && isBrowserMozilla) {
      return onOpen();
    }

    if (!browserSupportsSpeechRecognition) {
      alert('Not Support');
    }

    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };

  const addAudioElement = blob => {
    setAudioMessage(blob);
  };

  return (
    <>
      {isMobileBrowser ? (
        <Box left="-35px" bottom="5px" pos="absolute">
          <AudioRecorder
            onRecordingComplete={addAudioElement}
            audioTrackConstraints={{
              noiseSuppression: true,
              echoCancellation: true,
            }}
            downloadOnSavePress={true}
            downloadFileExtension="webm"
          />
        </Box>
      ) : (
        <IconButton
          left="-35px"
          bottom="5px"
          pos="absolute"
          bg="transparent"
          icon={listening ? <RiVoiceprintFill color="red" /> : <FaMicrophone />}
          onClick={_handleMicrophoneClick}
        />
      )}
      {isBrowserMozilla && (
        <MozillaSpeechGuideModal isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
};

/* Export
============================================================================= */
export default SpeechToTextButton;
