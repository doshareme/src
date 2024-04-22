import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />

			<main>

				<Router>
				<Auth0Provider
    domain="stream.au.auth0.com"
    clientId="4pAdKCA68gzyMZoOnubNrqrKKzsgJwIK"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

					<Route path="/" component={Home} />
					</Auth0Provider>
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
