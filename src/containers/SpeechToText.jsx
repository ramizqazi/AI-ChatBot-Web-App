import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const SpeechToText = () => {
  const [transcription, setTranscription] = useState('');

  const startListening = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    console.log(recognition)

    recognition.onresult = event => {
      const transcript = event.results[0][0].transcript;
      setTranscription(transcript);
    };

    recognition.start();
  };
  return (
    <div>
      <Button onClick={startListening}>Start Speech-to-Text</Button>
      <p>Transcription: {transcription}</p>
    </div>
  );
};

export default SpeechToText;
