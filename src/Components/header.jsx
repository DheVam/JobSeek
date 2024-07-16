import React from 'react';
import { Box, HStack, Text, IconButton, Icon } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-native';

const Header = () => {
  return (
    <Box safeAreaTop backgroundColor="white" p={4}>
      <HStack justifyContent="space-between" alignItems="center">
      <HStack alignItems="center">
          <Image
            source={require('../../public/assets/logo.png')}
            style={{ width: 30, height: 30, marginRight: 8 }}
          />
          <Text fontSize="lg" fontWeight="bold">JobSeek</Text>
        </HStack>
        <IconButton icon={<FontAwesomeIcon icon={faBell} size={20} color='blue'/>} />
      </HStack>
    </Box>
  );
};

export default Header;
