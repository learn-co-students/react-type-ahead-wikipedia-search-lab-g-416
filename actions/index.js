"use strict"

const resultStore = require("../stores/resultStore");
const wikipedia = require("../utils/wikipedia");

const search = query => {
	const updated = new Date()

	return wikipedia.search(query).then(data => {
		if (!resultStore.isOutdated(updated)) {
			const results = []

			data[1].map(title => {
				const obj = {}

				obj["title"] = title;
				results.push(obj);
			});
			data[2].map((desc, i) => {
				results[i]["description"] = desc
			});
			data[3].map((link, i) => {
				results[i]["link"] = link
			});

			resultStore.setState({updated, results})
		} else {
			return
		}
	})
}

module.exports = {search}
