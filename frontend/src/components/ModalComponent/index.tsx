/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Modal, ModalProps, Typography } from '@mui/material';
import React from 'react';
import Button from '../Button';
import { StyledModal } from './styles';

interface IModalComponent extends ModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  message: string;
  icon?: React.ReactNode;
  buttonTitle: string;
}

export const ModalComponent = ({
  open,
  handleClose,
  title,
  message,
  icon,
  buttonTitle,
  ...rest
}: IModalComponent) => {
  return (
    <Modal open={open} onClose={handleClose} {...rest}>
      <Box sx={StyledModal}>
        <Typography variant="h5" component="h2" fontWeight={'bold'}>
          {title}
        </Typography>
        <Box>{icon}</Box>
        <Box textAlign={'center'}>
          <Typography>{message}</Typography>
        </Box>
        <Box width="100%">
          <Button width="100%" value="Continuar" onClick={handleClose} />
        </Box>
      </Box>
    </Modal>
  );
};
