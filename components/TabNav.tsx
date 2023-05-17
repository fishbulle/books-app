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
                    tabBarActiveTintColor: '#800000',
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
                                color={focused ? '#660033' : 'black'}
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
                                color={focused ? '#660033' : 'black'}
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
                                color={focused ? '#660033' : 'black'}
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