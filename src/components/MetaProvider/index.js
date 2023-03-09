import PropTypes from 'prop-types'
import {
	camelToDash,
	createOrUpdateTitle,
	createUpdateMetaTag,
	createUpdateSpecialTag,
	equalDescriptionHandle,
	equalTitleHandle,
	HEAD_TAG,
	HTML_TAG
} from '../../utiles'

const MetaProvider = ({ equalTitle, equalDescription, config, children }) => {
	if (config?.translate === false) {
		HTML_TAG.setAttribute('translate', 'no')
	} else {
		HTML_TAG.removeAttribute('translate')
	}
	if (config?.language) {
		HTML_TAG.setAttribute('lang', config?.language)
	}
	if (config?.charset) {
		HEAD_TAG.prepend(createUpdateSpecialTag({ type: 'meta', props: { charset: config?.charset } }))
		HEAD_TAG.prepend(
			createUpdateSpecialTag({
				type: 'meta',
				props: { 'http-equiv': 'Content-type', value: `text/html; charset=${config?.charset}` }
			})
		)
	}
	if (config?.favIcon) {
		const favIconSplit = config?.favIcon?.split('.')
		const favType = favIconSplit[favIconSplit?.length - 1]
		HEAD_TAG.prepend(
			createUpdateSpecialTag({
				type: 'link',
				props: {
					rel: `icon${favType === 'ico' ? '' : ' shortcut'}`,
					type: `image/${favType}`,
					href: config?.favIcon
				}
			})
		)
	}

	if (config?.title) {
		HEAD_TAG.append(createOrUpdateTitle(config?.title))
	}

	const acceptedMetaName = [
		'viewport',
		'themeColor',
		'description',
		'keywords',
		'robots',
		'owner',
		'author',
		'copyright'
	]
	for (const property in config) {
		if (acceptedMetaName.includes(property)) {
			HEAD_TAG.append(
				createUpdateMetaTag({ type: 'meta', props: { name: camelToDash(property), content: config[property] } })
			)
		}
	}

	const acceptedOpenGraphName = [
		'locale',
		'type',
		'url',
		'site_name',
		'title',
		'description',
		'image',
		'video',
		'audio',
		'appId'
	]
	for (const property in config?.openGraph) {
		if (acceptedOpenGraphName.includes(property)) {
			HEAD_TAG.append(
				createUpdateMetaTag({
					type: 'meta',
					props: {
						name: property === 'appId' ? `fb:${property}` : `og:${property}`,
						content: config?.openGraph[property]
					}
				})
			)
		}
	}

	const acceptedTwitterName = ['card', 'site', 'creator', 'title', 'description', 'image']
	for (const property in config?.twitter) {
		if (acceptedTwitterName.includes(property)) {
			HEAD_TAG.append(
				createUpdateMetaTag({
					type: 'meta',
					props: { name: `twitter:${property}`, content: config?.twitter[property] }
				})
			)
		}
	}

	if (config?.verification?.google) {
		HEAD_TAG.append(
			createUpdateMetaTag({
				type: 'meta',
				props: { name: 'google-site-verification', content: config?.verification?.google }
			})
		)
	}
	if (config?.verification?.yandex) {
		HEAD_TAG.append(
			createUpdateMetaTag({
				type: 'meta',
				props: { name: 'yandex-verification', content: config?.verification?.yandex }
			})
		)
	}
	if (config?.verification?.bing) {
		HEAD_TAG.append(
			createUpdateMetaTag({
				type: 'meta',
				props: { name: 'msvalidate.01', content: config?.verification?.bing }
			})
		)
	}
	if (config?.verification?.baidu) {
		HEAD_TAG.append(
			createUpdateMetaTag({
				type: 'meta',
				props: { name: 'baidu-site-verification', content: config?.verification?.baidu }
			})
		)
	}

	if (equalTitle) equalTitleHandle(config?.title)
	if (equalDescription) equalDescriptionHandle(config?.description)

	return children
}

MetaProvider.propTypes = {
	config: PropTypes.object.isRequired,
	equalTitle: PropTypes.bool,
	equalDescription: PropTypes.bool,
	children: PropTypes.node
}

MetaProvider.defaultProps = {
	config: {},
	equalTitle: false,
	equalDescription: false,
}

export default MetaProvider
