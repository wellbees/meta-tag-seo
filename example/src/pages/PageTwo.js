import React from 'react'
import { MetaTags } from '@wellbees/meta-tag-seo'

const Page = () => {
	return (
		<div>
			<MetaTags
				title='Page Two'
				description='Page Two Description'
				keywords='Page Two Keywords'
				openGraph={{
					type: 'article',
					title: 'Page Two | Facebook',
					description: 'Page Two Description | Facebook',
					image: 'Page Two Image Url | Facebook',
					video: 'Page Two Video Url | Facebook',
					audio: 'Page Two Audio Url | Facebook'
				}}
				twitter={{
					card: 'summary',
					title: 'Page Two | Twitter',
					description: 'Page Two Description | Twitter',
					image: 'Page Two Image Url | Twitter'
				}}
			>
				{/* Adds to the bottom inside the head tag */}
			</MetaTags>
			Page Layout
		</div>
	)
}

export default Page
