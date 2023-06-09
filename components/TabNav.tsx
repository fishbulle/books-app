import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import LibraryScreen from '../screens/LibraryScreen';

const Tab = createBottomTabNavigator()

export default function TabNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={() => ({
                    tabBarActiveTintColor: '#765a3d',
                    tabBarInactiveTintColor: '#333',
                    tabBarStyle: { paddingTop: 2, height: 80 },
                    tabBarLabelStyle: { paddingBottom: 8 }
                })}
            >
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <Ionicons
                                name={focused ? 'home' : 'home-outline'}
                                color={focused ? '#765a3d' : '#333'}
                                size={24} />
                        },
                        headerShown: false
                    }}
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <Ionicons
                                name={focused ? 'book' : 'book-outline'}
                                color={focused ? '#765a3d' : '#333'}
                                size={24} />
                        },
                        headerShown: false
                    }}
                    name="Library"
                    component={LibraryScreen}
                />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return <Ionicons
                                name={focused ? 'person' : 'person-outline'}
                                color={focused ? '#765a3d' : '#333'}
                                size={24} />
                        },
                        headerShown: false
                    }}
                    name="Profile"
                    component={ProfileScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}