export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export const syntaxHighlightingThemeMap: {
  [key in Theme]: string;
} = {
  [Theme.Dark]: 'dracula',
  [Theme.Light]: 'github-light',
};

export const localStorageThemeKey = 'theme';
export const syntaxHighlightingThemeHtmlAttribute = 'data-theme';
