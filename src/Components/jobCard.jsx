import React from 'react';
import { Box, Text, Button, IconButton, HStack } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart as faHeartSolid, faHeart as faHeartRegular, faPhoneAlt, faLocation, faBuilding, faRupee, faMessage, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../redux/slices/bookmarksSlice';
import { Linking } from 'react-native';

const JobCard = ({ job, onViewDetails, isBookmark }) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmarks.items);
  const bookmarked = bookmarks.some(item => item.id === job.id);

  const handleBookmark = () => {
    if (bookmarked) {
      console.log("entire job here:",job)
      dispatch(removeBookmark(job));
    } else {
      dispatch(addBookmark(job));
    }
  };

  const handleDelete = () => {
    dispatch(removeBookmark(job));
  };

  const renderSalary = () => {
    if (job?.primary_details?.Salary === '-') {
      return 'Not Disclosed';
    }
    return job?.primary_details?.Salary;
  };

  return (
    <Box borderRadius={5} p={4} m={4} backgroundColor="white">
      <IconButton
        icon={
          isBookmark ? (
            <FontAwesomeIcon icon={faTrashAlt} color="red" size={20} />
          ) : (
            <FontAwesomeIcon
              icon={bookmarked ? faHeartSolid : faHeartRegular}
              color={bookmarked ? 'red' : 'black'}
              size={20}
            />
          )
        }
        onPress={isBookmark ? handleDelete : handleBookmark}
        position="absolute"
        size={20}
        top={2}
        right={2}
      />
      <Text fontWeight="bold" fontSize="lg">{job?.job_role}</Text>

      <HStack space={2} alignItems="center" mt={2}>
        <FontAwesomeIcon icon={faLocation} size={16} color="gray" />
        <Text>{job?.primary_details?.Place}</Text>
      </HStack>

      <HStack space={2} alignItems="center" mt={2}>
        <FontAwesomeIcon icon={faBuilding} size={16} color="gray" />
        <Text>{job?.company_name}</Text>
      </HStack>

      <HStack space={2} alignItems="center" mt={2}>
        <FontAwesomeIcon icon={faRupee} size={16} color="gray" />
        <Text>{renderSalary()}</Text>
      </HStack>

      <Text>{job?.phone}</Text>
      <Button.Group space={2} mt={4}>
        <Button
          onPress={() => Linking.openURL(job?.contact_preference?.whatsapp_link)}
          colorScheme="green"
          startIcon={<FontAwesomeIcon icon={faMessage} size={16} color='white' />}
        >
          Chat
        </Button>
        <Button
          onPress={() => Linking.openURL(`tel:${job?.whatsapp_no}`)}
          colorScheme="blue"
          startIcon={<FontAwesomeIcon icon={faPhoneAlt} size={16} color='white' />}
        >
          Call
        </Button>
        <Button onPress={onViewDetails}>View Details</Button>
      </Button.Group>
    </Box>
  );
};

export default JobCard;
