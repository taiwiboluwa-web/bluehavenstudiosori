import React, { createContext, useContext, useState } from 'react';

export type SeasonalTheme = 'default' | 'christmas' | 'easter' | 'independence' | 'valentine';

interface SeasonalThemeContextType {
  season: SeasonalTheme;
  setSeason: (season: SeasonalTheme) => void;
  getSeasonalColors: () => {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
}

const SeasonalThemeContext = createContext<SeasonalThemeContextType | undefined>(undefined);

export const SeasonalThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [season, setSeason] = useState<SeasonalTheme>('default');

  const getSeasonalColors = () => {
    const themes = {
      default: {
        primary: '#ffffff',
        secondary: '#1a1a1a',
        accent: '#ffd700',
        background: '#1a1a1a',
      },
      christmas: {
        primary: '#ffffff',
        secondary: '#c41e3a',
        accent: '#165b33',
        background: '#0d1b0f',
      },
      easter: {
        primary: '#ffffff',
        secondary: '#ffc0cb',
        accent: '#87ceeb',
        background: '#fffacd',
      },
      independence: {
        primary: '#ffffff',
        secondary: '#008000',
        accent: '#ffffff',
        background: '#1a1a1a',
      },
      valentine: {
        primary: '#ffffff',
        secondary: '#ff1493',
        accent: '#ff69b4',
        background: '#1a0a0f',
      },
    };

    return themes[season];
  };

  return (
    <SeasonalThemeContext.Provider value={{ season, setSeason, getSeasonalColors }}>
      {children}
    </SeasonalThemeContext.Provider>
  );
};

export const useSeasonalTheme = () => {
  const context = useContext(SeasonalThemeContext);
  if (!context) {
    throw new Error('useSeasonalTheme must be used within SeasonalThemeProvider');
  }
  return context;
};
