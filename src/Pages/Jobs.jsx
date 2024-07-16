import React, { useEffect, useState } from 'react';
import { FlatList, Text, Button, Box } from 'native-base';
import axios from 'axios';
import { useSelector } from 'react-redux';
import JobCard from '../Components/jobCard';
import { ActivityIndicator } from 'react-native';

const Jobs = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const bookmarks = useSelector(state => state.bookmarks.items);
  
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      setJobs(prevJobs => [...prevJobs, ...response.data.results]);
      setPage(page + 1);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const renderItem = ({ item }) => {
    const bookmarked = bookmarks.some(bookmark => bookmark.id === item.id);
    return (
      <JobCard
        job={item}
        onViewDetails={() => navigation.navigate('JobDetails', { job: item })}
        bookmarked={bookmarked}
      />
    );
  };

  return (
    <FlatList
      data={jobs}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item?.id}-${index}`}
      onEndReached={fetchJobs}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator size={"large"}/> : null}
    />
  );
};

export default Jobs;
