import { Routes, Route, Navigate, Outlet, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, lazy } from 'react';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider, Box, Typography } from '@mui/material';

// defaultTheme
// import themes from 'themes';

// Theme Layouts imports
// import HeaderLayout from '@/layout/MainLayout/Header/index.js';
// import MainLayout from '@/layout/MainLayout/index';
// import LayoutPage from '@/layout/ThemeLayouts';
import UploadAudioFileFormLayout from '@/layout/ThemeLayouts/AudioFileUpload';


function ArticlePage(props) {

    return (
        <>
            <article>
                <h2>
                    For.of, the function only deals with elements that are present in an array; for.forEach, on the other hand, only deals
                    with elements that are present in an array. The final option entails a fully explicit counting loop that is implemented
                    in all versions of JavaScript. Those who are familiar with syntax argue that for…in loops over an object’s properties.
                    As an Array in JavaScript is simply an object with numeric property names, you can theoretically loop over it. Map is
                    one of the functional programming techniques that is already included in other languages, such as Python and Haskell. It

                </h2>
            </article>
        </>
    );
}

// ==============================|| APP ||============================== //

function App(props) {
    const customization = useSelector((state) => state.customization);
    const theme = createTheme(customization);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={customization}>
                {/* <CssBaseline /> */}
                {/* <NavigationScroll><ThemeRoutes /></NavigationScroll> */}
                {/* <Box>
                    <HeaderLayout />
                    <Outlet />
                </Box> */}

                <Routes>
                    <Route path="/" element={< UploadAudioFileFormLayout  params={'/'} />} />
                       
                    <Route path="services/audio-to-text" element={<ArticlePage />} />

                    <Route path="*" element={<Navigate to="/" replace={true} />} />
                </Routes>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
