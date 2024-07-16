import React from 'react';
import { Box, Text, VStack, HStack, Icon, Badge, Card } from 'native-base';
import { ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBuilding, faLocationArrow, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const JobDetails = ({ route }) => {
  const { job } = route.params;
  return (
    <ScrollView>
      <Box p={4}>
        <VStack space={4}>
          <Text fontSize="2xl" bold>{job.job_role}</Text>
          <Text fontSize="lg" bold>{job.primary_details?.Salary || 'N/A'}</Text>
          <HStack space={2} alignItems="center">
            <Icon as={FontAwesomeIcon} icon={faBuilding} size="sm" />
            <Text>{job.company_name || 'N/A'}</Text>
          </HStack>
          <HStack space={2} alignItems="center">
            <Icon as={FontAwesomeIcon} icon={faLocationArrow} size="sm" />
            <Text>{job.primary_details?.Place || 'N/A'}</Text>
          </HStack>
          {job?.openings_count && (
            <Badge colorScheme="info" variant="solid" rounded="full" w={100} flexDirection={"row"}>
              {job?.openings_count + " vacancies"}
            </Badge>
          )}
          <Card>
            <VStack space={2} p={4}>
              <Text fontSize="md" bold>JOB HIGHLIGHTS</Text>
              <Text>Experience: {job.primary_details?.Experience || 'N/A'}</Text>
              <Text>Qualification: {job.primary_details?.Qualification || 'Not Required'}</Text>
              <Text>Preferences: {job.contact_preference?.preferred_call_start_time || 'N/A'} - {job.contact_preference?.preferred_call_end_time || 'N/A'}</Text>
            </VStack>
          </Card>
          <VStack space={2} mt={4}>
            <Text fontSize="md" bold>Skills</Text>
            {job.skills && job.skills.length > 0 ? (
              job.skills.map((skill, index) => (
                <HStack key={index} space={2} alignItems="center">
                  <Icon as={FontAwesomeIcon} icon={faCheckCircle} size="sm" color="green.500" />
                  <Text>{skill}</Text>
                </HStack>
              ))
            ) : (
              <Text>No skills required</Text>
            )}
          </VStack>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default JobDetails;
