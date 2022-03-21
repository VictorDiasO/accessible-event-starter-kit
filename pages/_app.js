// import { useState } from 'react/cjs/react.development'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig';

import '../styles/globals.css'
import useDarkMode from 'use-dark-mode';

function MyApp({ Component, pageProps }) {
  const darkmode = useDarkMode(true);

  const [theme, setTheme] = useState("dark");
  const [colorBlindnessMode, setColorBlindnessMode] = useState(false);

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/* <button onClick={toggleTheme}>Switch Theme</button> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
