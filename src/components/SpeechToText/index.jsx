import React from 'react';

import SpeechToTextWebButton from './SpeechToTextWebButton';
import SpeechToTextMobileButton from './SpeechToTextMobileButton';
import { getBrowserName, getMobilePlatform } from '../../util/helper-functions';

/* =============================================================================
<SpeechToText />
============================================================================= */
const SpeechToText = ({ onTranscriptChange }) => {
  const browser = getBrowserName();
  const mobile = getMobilePlatform();

  const renderButton = () => {
    if (mobile === 'iOS' || (mobile === 'Android' && browser !== 'Google Chrome')) {
      return <SpeechToTextMobileButton />
    }
    if (browser === 'Google Chrome' && mobile === 'Android') {
      return <SpeechToTextWebButton onTranscriptChange={onTranscriptChange} />
    }
    if (browser === 'Mozilla Firefox') {
      return <SpeechToTextMobileButton />
    }
    return <SpeechToTextWebButton onTranscriptChange={onTranscriptChange} />
  }

  return renderButton();
};

/* Export
============================================================================= */
export default SpeechToText;
