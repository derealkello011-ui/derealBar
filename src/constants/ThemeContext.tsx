import React, { createContext, useContext, useState } from "react";
import { useColorScheme as useSystemColorScheme } from 'react-native';
import { ThemeColors, themes } from "./theme";

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
    theme: ThemeMode;
    colors: ThemeColors;
    isDark: boolean,
    setTheme: ( mode: ThemeMode ) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>( undefined );

export const ThemeProvider = ( { children }: { children: React.ReactNode } ) => { 
    const systemColorScheme = useSystemColorScheme();
    const [ themeMode, setThemeMode ] = useState<ThemeMode>( 'system' );
    const activeScheme = themeMode === 'system' ? systemColorScheme ?? 'light' : themeMode;
    const isDark = activeScheme === 'dark';
    const colors = isDark ? themes.dark : themes.light;

    return (
        <ThemeContext.Provider
            value={{theme: themeMode, colors, isDark, setTheme: setThemeMode}}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext( ThemeContext );
    if ( !context ) {
        throw new Error( 'useTheme must be used within a ThemeProvider' );
    }
    return context;
}
