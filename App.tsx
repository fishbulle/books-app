import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import MyBooks from './screens/MyBooks';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { paddingTop: 2, height: 60 },
          tabBarLabelStyle: { paddingBottom: 8 }
        })}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return <Ionicons
                name={focused ? 'home' : 'home-outline'}
                color='black'
                size={24} />
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return <Ionicons
                name={focused ? 'book' : 'book-outline'}
                color='black'
                size={24} />
            },
          }}
          name="Library"
          component={MyBooks}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return <Ionicons
                name={focused ? 'person' : 'person-outline'}
                color='black'
                size={24} />
            },
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

