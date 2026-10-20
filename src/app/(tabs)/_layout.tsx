import DerealTabBar from '@/components/derealTabBar';
import { Tabs } from 'expo-router';

const TabLayout = () => {
  return (
    <Tabs
      tabBar={props => <DerealTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name='index' options={{ title: 'Home' }} />
      <Tabs.Screen name='profile' options={{ title: 'Profile' }} />
      <Tabs.Screen name='explore' options={{ title: 'Explore' }} />
      <Tabs.Screen name='wallet' options={{ title: 'Wallet' }} />
      <Tabs.Screen name='analytics' options={{ title: 'Analytics' }} />
    </Tabs>
  );
};

export default TabLayout;
