
# Meta Tag SEO 

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/wellbees/color-picker-input/blob/master/LICENSE)

Meta tags and seo information manager for Reactjs

## Example Usage

[Show Demo in CodeSandBox](https://codesandbox.io/s/meta-tag-seo-zt16d1)

## Installation 

```bash 
  npm install @wellbees/meta-tag-seo
```

## Usage/Examples

> ***Provider is not required. If you want use only `<MetaTags/>` or other components, you can use it alone.***

--- 

**Provider and Special Location Tags Usage**

```js
import React from 'react'
import { MetaFooter, MetaHeader, MetaBody, MetaProvider } from '@wellbees/meta-tag-seo'
import seoConfig from './seoConfig' // Below is an example

const App = () => {
	return (
		<MetaProvider config={seoConfig}>
			<MetaHeader>{/* Adds to the bottom inside the head tag */}</MetaHeader>
			<MetaBody>{/* Adds to the top inside the body tag */}</MetaBody>
			<div>
                Page Layout
            <div>
			<MetaFooter>{/* Adds to the bottom inside the body tag */}</MetaFooter>
		</MetaProvider>
	)
}

export default App
```

**Single MetaTags Usage**

```js
import React from 'react'
import { MetaTags } from '@wellbees/meta-tag-seo'

const Page = () => {
	return (
		<div>
			{/* Small Usage */}
			<MetaTags title='' description='' equalTitle equalDescription />

			{/* Full Usage */}
			<MetaTags
				title=''
				description=''
				keywords=''
				openGraph={{
					type: '',
					title: '',
					description: '',
					image: '',
					video: '',
					audio: ''
				}}
				twitter={{
					card: '',
					title: '',
					description: '',
					image: ''
				}}
			>
				{/* Adds to the bottom inside the head tag */}
			</MetaTags>

			Page Layout
		</div>
	)
}

export default Page

```

**Example SEO Config Value**

```js
const seoConfig = {
	translate: false,
	language: 'en',
	charset: 'utf-8',
	favIcon: 'http://example.com/favicon.png',
	viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
	themeColor: '#2A2A2A',
	title: 'Title | Default Page',
	description: 'Description | Default Page',
	keywords: 'Keywords | Default Page',
	robots: 'Robots | Default Page',
	owner: 'Owner | Default Page',
	author: 'Author | Default Page',
	copyright: 'Copyright | Default Page',
	openGraph: {
		locale: 'Locale | Facebook Meta (og:locale)',
		type: 'Type | Facebook Meta (og:type)',
		url: 'Url | Facebook Meta (og:url)',
		site_name: 'Site Name | Facebook Meta (og:site_name)',
		title: 'Title | Facebook Meta (og:title)',
		description: 'Description | Facebook Meta (og:description)',
		image: 'Image Url | Facebook Meta (og:image)',
		video: 'Video Url | Facebook Meta (og:video)',
		audio: 'Audio Url | Facebook Meta (og:audio)',
		appId: 'AppId | Facebook Meta (fb:appId)'
	},
	twitter: {
		card: 'Card | Twitter Meta (twitter:card)',
		site: 'Site | Twitter Meta (twitter:site)',
		creator: 'Creator | Twitter Meta (twitter:creator)',
		title: 'Title | Twitter Meta (twitter:title)',
		description: 'Description | Twitter Meta (twitter:description)',
		image: 'Image | Twitter Meta (twitterimage:)'
	},
	verification: {
		google: 'Google Verification Code (google-site-verification)',
		yandex: 'Yandex Verification Code (yandex-verification)',
		bing: 'Bing Verification Code (msvalidate.01)',
		baidu: 'Baidu Verification Code (baidu-site-verification)'
	}
}
```
## Props

| Name | Type | Default | Available Component | Description | 
| --- | --- | --- | --- | --- |
| config | Object | | MetaProvider | Sets the default meta settings of the page. |
| equalTitle | Boolean | `false` |  MetaProvider, MetaHeader, MetaTags | Syncs facebook and twitter headers to the page title. |
| equalDescription | Boolean | `false` | MetaProvider, MetaHeader, MetaTags | Syncs facebook and twitter descriptions to page description. |
| children | Node |  | MetaProvider, MetaHeader, MetaBody, MetaFooter, MetaTags | Any html tags can be written inside the tags. |

### Features

- Set default meta config with provider
- Head, body and footer components for special code location
- Meta tag components for simple usage
- Sync page title and description, facebook and twitter meta to work

  
### Min React Version

React: **16.13.1**

### Kullanılan Paketler

[prop-types](https://www.npmjs.com/package/prop-types)

  
### Feedback

If you have any feedback, please contact us at tech@wellbees.co.
### Authors
- [@azizsenturk](https://github.com/azizsenturk)

  