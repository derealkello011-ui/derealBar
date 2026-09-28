import CustomTabBar from '@/constants/CustomTabBar';
import { useTheme } from '@/constants/ThemeContext';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabLayout = () => {
    const { colors } = useTheme();
    const insets = useSafeAreaInsets();
  return (
      <Tabs
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{
              headerShown: false,
              tabBarStyle: {
                  bottom: insets.bottom,
                  left: insets.left,
                  right: insets.right,
              }
          }}>
          
          <Tabs.Screen name='index' options={{
              title: 'Home',
            //   tabBarIcon: ({focused, color}) => <Feather />
          }} />

          <Tabs.Screen name='profile' options={{
              title: 'Profile',
            //   tabBarIcon: ( { focused, color } ) => <Feather />
          }} />

    </Tabs>
  )
}

export default TabLayout