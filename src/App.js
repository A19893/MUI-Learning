import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import RightBar from './components/RightBar'
import Feed from './components/Feed'
import { Box, Stack, ThemeProvider } from '@mui/material'
import NavBar from './components/NavBar'
import Add from './components/Add'
import { createCustomTheme } from './theme'


const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const theme = createCustomTheme(themeMode); 
  


  return (
    <ThemeProvider theme={theme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar mode={themeMode} setThemeMode={setThemeMode}/>
      <Feed/>
      <RightBar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  )
}

export default App