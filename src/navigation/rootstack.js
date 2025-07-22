import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabbar from '../navigation/tabbar';
import Home from '../screen/home';

export default function RootStack() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="MovieTabs"
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      >
        <Screen name="MovieTabs" component={MovieBottomTabBar} />
      </Navigator>
    </NavigationContainer>
  );
}
const MovieBottomTabBar = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator
      tabBar={props => <Tabbar {...props} />}
      initialRouteName="Home"
      screenOptions={{ headerShown: false, unmountOnBlur: true }}
    >
      <Screen name="Home" component={Home} />
      {/* <Screen name="Home" component={Home} /> */}
    </Navigator>
  );
};
