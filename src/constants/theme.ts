export const themes = {
    light: {
        background: '#ffffff',
        text: '#111827',
        primary: '#007aff',
        card: '#f3f4f6',
        border: '#555556',

        // Tab bar
        tabBarBackground: '#120b2e71',
        tabBarBorder: 'rgb(1, 0, 0)',
        tabBarActiveBg: '#ffffff',
        tabBarActiveContent: '#130057',
        tabBarInactiveContent: 'rgba(255,255,255,0.6)',
        tabBarShadow: '#000000',

        
    },
    dark: {
        background: '#090d16',
        text: '#f9fafb',
        primary: '#0a84ff',
        card: '#1f2937',
        border: '#374151',

        // Tab bar
        tabBarBackground: '#ffffffd0',       // floating bar surface
        tabBarBorder: 'rgba(255,255,255,0.12)',
        tabBarActiveBg: '#130057',          // purple pill
        tabBarActiveContent: '#ffffff',     // white icon + label on the pill
        tabBarInactiveContent: '#6b7280', // icons of unfocused tabs
        tabBarShadow: '#000000',
    },
};

export type ThemeColors = typeof themes.light;
