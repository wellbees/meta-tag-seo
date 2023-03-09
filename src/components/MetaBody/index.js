import PropTypes from 'prop-types'
import { BODY_TAG, createUpdateMetaTag, getChildWithArray } from '../../utiles'

const MetaBody = ({ children }) => {
	let elements = getChildWithArray(children)

	elements?.forEach(item => {
		item?.type && BODY_TAG.prepend(createUpdateMetaTag(item))
	})

	return null
}

MetaBody.propTypes = {
	children: PropTypes.node
}

MetaBody.defaultProps = {
	children: []
}

export default MetaBody
