import { BottomTabBarProps } from 'expo-router/build/react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import TabButton from './TabButton';
import { useTheme } from './ThemeContext';

const CustomTabBar = ( {
    state,
    descriptors,
    navigation
}: BottomTabBarProps ) =>
{
    const { colors } = useTheme();
    return (
        <View style={[ styles.tabBarContainer, { backgroundColor: colors.tabBarBackground, borderColor: colors.tabBarBorderColor } ]}>
            {state.routes.map( ( route, index ) => {
                const { options } = descriptors[ route.key ];
                const label = options.title != undefined ? options.title : route.name;
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit( {
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    } );
                    
                    if ( !isFocused && !event.defaultPrevented ) {
                        navigation.navigate( route.name );
                    }
                };
                return (
                    <TabButton
                        key={route.key}
                        label={label}
                        isFocused={isFocused}
                        onPress={onPress}
                    />
                );
            })}

        </View>    
  );
}

export default CustomTabBar

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        paddingBottom: 20,
        paddingTop: 10,
        borderTopWidth: 1, 
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});