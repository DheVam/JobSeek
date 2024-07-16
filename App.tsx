import React from 'react';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Jobs from './src/Pages/Jobs';
import JobDetails from './src/Pages/jobDetails';
import Bookmarks from './src/Pages/bookmarks';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBookmark } from '@fortawesome/free-solid-svg-icons';
import Header from './src/Components/header';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function JobsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="JobList" component={Jobs} options={{header: () => <Header />}}/>
      <Stack.Screen name="JobDetails" component={JobDetails} options={{header: () => <Header />}}/>
    </Stack.Navigator>
  );
}

function BookmarksStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookmarksList" component={Bookmarks} options={{header: () => <Header />}}/>
      <Stack.Screen name="JobDetails" component={JobDetails} options={{header: () => <Header />}}/>
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen 
              name="Jobs" 
              component={JobsStack} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faHome} color={color} size={size} />
                ),
              }} 
            />
            <Tab.Screen 
              name="Bookmarks" 
              component={BookmarksStack} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faBookmark} color={color} size={size} />
                ),
              }} 
            />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
