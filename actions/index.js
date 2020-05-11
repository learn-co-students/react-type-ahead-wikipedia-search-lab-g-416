"use strict"

const resultStore = require("../stores/resultStore");
const wikipedia = require("../utils/wikipedia");

const search = query => {
	const updated = new Date()

	return wikipedia.search(query).then(data => {
		if (!resultStore.isOutdated(updated)) {
			const [query, titles, descriptions, links] = data;
			const results = titles.map((title, i) => ({
				title,
				description: descriptions[i],
				link: links[i]
			}));

			resultStore.setState({updated, results})
		} else {
			return
		}
	})
}

module.exports = {search}
