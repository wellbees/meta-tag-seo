import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { MetaFooter, MetaHeader, MetaBody, MetaProvider } from '@wellbees/meta-tag-seo'
import seoConfig from './config/seoConfig'
import { HomePage, PageOne, PageTwo } from './pages'
import Layout from './layouts/Menu'

const App = () => {
	return (
		<MetaProvider config={seoConfig}>
			<MetaHeader>{/* Adds to the bottom inside the head tag */}</MetaHeader>
			<MetaBody>{/* Adds to the top inside the body tag */}</MetaBody>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path='page-one' element={<PageOne />} />
						<Route path='page-two' element={<PageTwo />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<MetaFooter>{/* Adds to the bottom inside the body tag */}</MetaFooter>
		</MetaProvider>
	)
}

export default App
