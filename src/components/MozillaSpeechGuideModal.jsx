import { Button } from '@chakra-ui/button';
import { HStack, Heading } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import React from 'react';
import { IoMdInformationCircleOutline } from 'react-icons/io';

/* =============================================================================
<MozillaSpeechGuideModal />
============================================================================= */
const MozillaSpeechGuideModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack>
            <Heading size="md" fontWeight="semibold">
              Info
            </Heading>
            <IoMdInformationCircleOutline />
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Speech Recognition feature is disabld in firefox by default please
          open a new tab and write about:config and search for speech related
          options and enable it after that reload the website.
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

/* Export
============================================================================= */
export default MozillaSpeechGuideModal;
