import { useTheme } from '@/constants/ThemeContext';
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from 'expo-router/build/react-navigation/bottom-tabs';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AnimatedPressable = Animated.createAnimatedComponent( Pressable );

const ICON_SIZE = 24;

const getIconByRouteName = ( routeName: string, color: string ) => {
    switch ( routeName ) {
        case 'profile':
            return <FontAwesome6 name='circle-user' size={ICON_SIZE} color={color} />;
        case 'explore':
            return <Ionicons name='map' size={ICON_SIZE} color={color} />;
        case 'wallet':
            return <Ionicons name='wallet-outline' size={ICON_SIZE} color={color} />;
        case 'analytics':
            return <Feather name='pie-chart' size={ICON_SIZE} color={color} />;
        case 'index':
        default:
            return <Feather name='home' size={ICON_SIZE} color={color} />;
    }
};

const DerealTabBar = ( { state, descriptors, navigation }: BottomTabBarProps ) => {
    const { colors } = useTheme();
    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.container,
                {
                    bottom: Math.max( insets.bottom, 16 ) + 8,
                    backgroundColor: colors.tabBarBackground,
                    borderColor: colors.tabBarBorder,
                    shadowColor: colors.tabBarShadow,
                },
            ]}
        >
            {state.routes.map( ( route, index ) => {
                const { options } = descriptors[ route.key ];
                const label =
                    typeof options.tabBarLabel === 'string'
                        ? options.tabBarLabel
                        : options.title ?? route.name;

                const isFocused = state.index === index;
                const contentColor = isFocused
                    ? colors.tabBarActiveContent
                    : colors.tabBarInactiveContent;

                const onPress = () => {
                    const event = navigation.emit( {
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    } );

                    if ( !isFocused && !event.defaultPrevented ) {
                        navigation.navigate( route.name, route.params );
                    }
                };

                const onLongPress = () => {
                    navigation.emit( {
                        type: 'tabLongPress',
                        target: route.key,
                    } );
                };

                return (
                    <AnimatedPressable
                        key={route.key}
                        layout={LinearTransition.springify().mass( 0.5 )}
                        accessibilityRole='button'
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel ?? label}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[
                            styles.tabItem,
                            { backgroundColor: isFocused ? colors.tabBarActiveBg : 'transparent' },
                        ]}
                    >
                        {getIconByRouteName( route.name, contentColor )}
                        {isFocused && (
                            <Animated.Text
                                entering={FadeIn.duration( 200 )}
                                exiting={FadeOut.duration( 200 )}
                                numberOfLines={1}
                                style={[ styles.tabText, { color: colors.tabBarActiveContent } ]}
                            >
                                {label}
                            </Animated.Text>
                        )}
                    </AnimatedPressable>
                );
            } )}
        </View>
    );
};

const styles = StyleSheet.create( {
    container: {
        position: 'absolute',
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderRadius: 40,
        borderWidth: StyleSheet.hairlineWidth,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 10, // Android shadow
    },
    tabItem: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderRadius: 30,
        marginVertical: 10,
    },
    tabText: {
        marginLeft: 8,
        fontWeight: '600',
    },
} );

export default DerealTabBar;
