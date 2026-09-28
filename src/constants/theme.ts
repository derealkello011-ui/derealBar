export const themes = {
    light: {
        background: '#ffffff',
        text: '#111827',
        primary: '#007aff',
        card: '#f3f4f6',
        border: '#e5e7eb',
        tabBarBackground: '#000000',
        tabBarSelectedBg: '#ffff',
        tabBarBorderColor: '#1a1818e2',
    },
    dark: {
        background: '#090d16',
        text: '#f9fafb',
        primary: '#0a84ff',
        card: '#1f2937',
        border: '#374151',
        tabBarBackground: '#ffffff',
        tabBarSelectedBg: '#0000',
        tabBarBorderColor: '#e5e5e5',
    },
};

export type ThemeColors = typeof themes.light;
