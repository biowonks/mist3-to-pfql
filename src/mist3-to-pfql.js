'use strict'

const bunyan = require('bunyan')

const log = bunyan.createLogger({
	name: 'mist3ToPfql'
})

/**
 * parseTmHmm2_ private method makes DAS output from mist3 compatible with PFQL.
 * This alters the input and produces no return
 * @param {any} input
 */
const parseTmHmm2_ = (input) => {
	input.t.tmhmm2 = []
	for (let i = 0; i < input.tmhmm2.tms.length; i++)
		input.t.tmhmm2.push(['TM'].concat(input.tmhmm2.tms[i]))
}

/**
 * parsePfam30 private methof makes Pfam30 output from mist3 compatible with PFQL.
 * This alters the input and produces no return
 * @param {any} input
 */
const parsePfam30_ = (input) => {
	input.t.pfam30 = []
	for (let i = 0; i < input.pfam30.length; i++)
		input.t.pfam30.push([input.pfam30[i].name, input.pfam30[i].env_from, input.pfam30[i].env_to])
}

/**
 * parsePfam31 private methof makes Pfam30 output from mist3 compatible with PFQL.
 * This alters the input and produces no return
 * @param {any} input
 */
const parsePfam31_ = (input) => {
	input.t.pfam31 = []
	for (let i = 0; i < input.pfam31.length; i++)
		input.t.pfam31.push([input.pfam31[i].name, input.pfam31[i].env_from, input.pfam31[i].env_to])
}

module.exports = (input) => {
	input.t = {}
	if (input.tmhmm2)
		parseTmHmm2_(input)
	if (input.pfam30)
		parsePfam30_(input)
	if (input.pfam31)
		parsePfam31_(input)
	return input
}
