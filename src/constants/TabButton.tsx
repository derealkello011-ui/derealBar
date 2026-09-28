import { Pressable, Text } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent( Pressable );

const TabButton = (
    {
        label,
        isFocused,
        onPress
    }: {
            label: string,
            isFocused: boolean,
            onPress: () => void
    } ) => {
    // Animate the scale based on focus state
    const animatedStyle = useAnimatedStyle( () => {
        return {
            transform: [ { scale: withSpring( isFocused ? 1.2 : 1.0 ) } ],
            opacity: withSpring( isFocused ? 1 : 0.5 ),
            // animationDuration: 1000,
        }
     } );

  return (
      <AnimatedPressable >
          <Text style={{color: isFocused ? '#007aff' : '#8e8e93'}}>
              {label}
          </Text>
    </AnimatedPressable>
  )
}

export default TabButton