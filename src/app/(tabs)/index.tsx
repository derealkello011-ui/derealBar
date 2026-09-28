import { useTheme } from "@/constants/ThemeContext";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { colors, isDark, setTheme } = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={{color: colors.text}}>
        Current theme: {isDark ? 'Dark Mode' : 'Light Mode'}
      </Text>

      <Pressable
        style={{ backgroundColor: colors.primary, padding: 12, borderRadius: 10 }}
        onPress={() => setTheme(isDark ? 'light' : 'dark')}
      >
        <Text style={{color: '#ffffff'}}>Toggle Theme</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
