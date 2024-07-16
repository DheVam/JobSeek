import React from 'react';
import { FlatList, Text, Center } from 'native-base';
import { useSelector } from 'react-redux';
import JobCard from '../Components/jobCard';

const Bookmarks = ({ navigation }) => {
  const bookmarks = useSelector(state => state.bookmarks.items);

  const renderItem = ({ item }) => (
    <JobCard
      job={item}
      onViewDetails={() => navigation.navigate('JobDetails', { job: item })}
      isBookmark={true}
    />
  );

  return (
    <FlatList
      data={bookmarks}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={<Center p={20}><Text>No bookmarks found</Text></Center>}
    />
  );
};

export default Bookmarks;
