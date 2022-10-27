import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { VoteContextProvider } from "./contexts/VoteContext";


function App() {
	

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<VoteContextProvider>
					<Router />
				</VoteContextProvider>
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
