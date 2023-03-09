export const HTML_TAG = document.querySelector('html')
export const HEAD_TAG = document.querySelector('head')
export const BODY_TAG = document.querySelector('body')

const findElementInDocument = ({ type, props }) => {
	if (!type) return
	
	const { name, property } = props
	let element = document.createElement(type)

	if (type === 'meta' && typeof name !== 'undefined') {
		if (document.querySelector(`meta[name="${name}"]`)) {
			element = document.querySelector(`meta[name="${name}"]`)
		}
	} else if (type === 'meta' && typeof property !== 'undefined') {
		if (document.querySelector(`meta[property="${property}"]`)) {
			element = document.querySelector(`meta[property="${property}"]`)
		}
	}

	return element
}

export const createUpdateMetaTag = item => {
	let tag = ''

	tag = findElementInDocument(item)

	if (item?.props) {
		for (const property in item?.props) {
			if (property !== 'children') {
				tag.setAttribute(property, item?.props[property])
			} else {
				tag.innerHTML = item?.props[property]
			}
		}
	}

	return tag
}

export const createUpdateSpecialTag = item => {
	let tag = document.querySelector(`${item?.type}[${Object.keys(item?.props)[0]}="${Object.values(item?.props)[0]}"]`)

	if (tag === null) {
		tag = document.createElement(item?.type)
	}

	if (item?.props) {
		for (const property in item?.props) {
			if (property !== 'children') {
				tag.setAttribute(property, item?.props[property])
			} else {
				tag.innerHTML = item?.props[property]
			}
		}
	}

	return tag
}

export const createOrUpdateTitle = title => {
	document.title = title
	return createUpdateMetaTag({ type: 'meta', props: { name: 'title', content: title } })
}

export const camelToDash = str => {
	if (str != str.toLowerCase()) {
		str = str.replace(/[A-Z]/g, m => '-' + m.toLowerCase())
	}
	return str
}

export const equalTitleHandle = title => {
	HEAD_TAG.append(createUpdateMetaTag({ type: 'meta', props: { name: `twitter:title`, content: title } }))
	HEAD_TAG.append(createUpdateMetaTag({ type: 'meta', props: { name: `og:title`, content: title } }))
}

export const equalDescriptionHandle = description => {
	HEAD_TAG.append(createUpdateMetaTag({ type: 'meta', props: { name: `twitter:description`, content: description } }))
	HEAD_TAG.append(createUpdateMetaTag({ type: 'meta', props: { name: `og:description`, content: description } }))
}

export const getChildWithArray = children => {
	let elementArray

	if (children.length > 0) {
		elementArray = children
	} else {
		elementArray = [children]
	}

	return elementArray
}
