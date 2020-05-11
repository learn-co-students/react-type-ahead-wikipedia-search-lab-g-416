"use strict"

const Store = require("./Store")

class ResultStore extends Store {
	isOutdated(updated) {
		return updated < this.getState().updated
	}
}

module.exports = new ResultStore({
	results: [],
	updated: new Date()
})
