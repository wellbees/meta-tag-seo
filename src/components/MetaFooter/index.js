import PropTypes from 'prop-types'
import { BODY_TAG, createUpdateMetaTag, getChildWithArray } from '../../utiles'

const MetaFooter = ({ children }) => {
	let elements = getChildWithArray(children)

	elements?.forEach(item => {
		item?.type && BODY_TAG.append(createUpdateMetaTag(item))
	})

	return null
}

MetaFooter.propTypes = {
	children: PropTypes.node
}

MetaFooter.defaultProps = {
	children: []
}

export default MetaFooter
