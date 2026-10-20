import ItemList from '@/components/itemList';
import { useTheme } from '@/constants/ThemeContext';
import { ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const WalletScreen = () => {
  const { colors, isDark } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={[ styles.screen, { backgroundColor: colors.background } ]}
      contentContainerStyle={{
        paddingTop: insets.top + 12,
        // keeps the last card clear of the floating tab bar
        paddingBottom: insets.bottom + 120,
      }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <Text style={[styles.headerText, {color: colors.text}]}> WALLET </Text>
      <ItemList color='rgb(0, 234, 255)' />
    </ScrollView>
  );
};

const styles = StyleSheet.create( {
  screen: {
    flex: 1,
  },
  headerText: {
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 30,
  }
} );
export default WalletScreen