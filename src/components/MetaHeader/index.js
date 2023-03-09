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

const MetaHeader = ({ equalTitle, equalDescription, children }) => {
	let elements = getChildWithArray(children)

	elements?.forEach(item => {
		if (equalTitle && ['twitter:title', 'og:title'].includes(item?.props?.name)) {
			return
		}
		if (item?.type === 'title' || item?.props?.name === 'title') {
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

MetaHeader.propTypes = {
	equalTitle: PropTypes.bool,
	equalDescription: PropTypes.bool,
	children: PropTypes.node
}

MetaHeader.defaultProps = {
	equalTitle: false,
	equalDescription: false,
	children: []
}

export default MetaHeader
