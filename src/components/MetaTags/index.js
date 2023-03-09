import PropTypes from 'prop-types'
import {
	BODY_TAG,
	createOrUpdateTitle,
	createUpdateMetaTag,
	equalDescriptionHandle,
	equalTitleHandle,
	getChildWithArray,
	HEAD_TAG
} from '../../utiles'

const MetaTags = ({ equalTitle, equalDescription, children, ...props }) => {
	let elements = getChildWithArray(children)

	if (props?.title) {
		HEAD_TAG.append(createOrUpdateTitle(props?.title))
		if (equalTitle) equalTitleHandle(props?.title)
	}

	if (props?.description) {
		HEAD_TAG.append(
			createUpdateMetaTag({ type: 'meta', props: { name: 'description', content: props?.description } })
		)
		if (equalDescription) equalDescriptionHandle(props?.description)
	}

	if (props?.keywords) {
		HEAD_TAG.append(createUpdateMetaTag({ type: 'meta', props: { name: 'keywords', content: props?.keywords } }))
	}

	const acceptedOpenGraphName = ['type', 'title', 'description', 'image', 'video', 'audio']
	for (const property in props?.openGraph) {
		if (acceptedOpenGraphName.includes(property)) {
			HEAD_TAG.append(
				createUpdateMetaTag({
					type: 'meta',
					props: { name: `og:${property}`, content: props?.openGraph[property] }
				})
			)
		}
	}

	const acceptedTwitterName = ['card', 'title', 'description', 'image']
	for (const property in props?.twitter) {
		if (acceptedTwitterName.includes(property)) {
			HEAD_TAG.append(
				createUpdateMetaTag({
					type: 'meta',
					props: { name: `twitter:${property}`, content: props?.twitter[property] }
				})
			)
		}
	}

	elements?.forEach(item => {
		if (equalTitle && ['twitter:title', 'og:title'].includes(item?.props?.name)) {
			return
		}
		if (item?.type === 'title' || item?.props?.name === 'title') {
			console.log(item)
			HEAD_TAG.append(createOrUpdateTitle(item?.props?.children || item?.props?.content))
			if (equalTitle) equalTitleHandle(item?.props?.children || item?.props?.content)
			return
		}

		if (equalDescription && ['twitter:description', 'og:description'].includes(item?.props?.name)) {
			return
		}
		if (item?.props?.name === 'description') {
			HEAD_TAG.append(createUpdateMetaTag(item))
			if (equalDescription) equalDescriptionHandle(item?.props?.content)
			return
		}
		item?.type && HEAD_TAG.append(createUpdateMetaTag(item))
	})

	return null
}

MetaTags.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.string,
	openGraph: PropTypes.shape({
		type: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string,
		video: PropTypes.string,
		audio: PropTypes.string
	}),
	twitter: PropTypes.shape({
		card: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string
	}),
	equalTitle: PropTypes.bool,
	equalDescription: PropTypes.bool,
	children: PropTypes.node
}

MetaTags.defaultProps = {
	equalTitle: false,
	equalDescription: false,
	children: []
}

export default MetaTags
