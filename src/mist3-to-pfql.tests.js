/* eslint no-magic-numbers: 0 */
'use strict'

const expect = require('chai').expect

const mist3ToPfql = require('./mist3-to-pfql')

describe('mist3-to-pfql', function() {
	it('should parse das correctly but not interact with anything else', function() {
		const input = {
			pfam30: [
				{
					name: 'E1-E2_ATPase',
					score: 140.6,
					bias: 0.6,
					c_evalue: 7.3e-45,
					i_evalue: 3.9e-41,
					hmm_from: 3,
					hmm_to: 221,
					hmm_cov: '.]',
					ali_from: 72,
					ali_to: 296,
					ali_cov: '..',
					env_from: 70,
					env_to: 296,
					env_cov: '..',
					acc: 0.94
				},
				{
					name: 'Hydrolase',
					score: 132.6,
					bias: 4.1,
					c_evalue: 3.8e-42,
					i_evalue: 2e-38,
					hmm_from: 1,
					hmm_to: 210,
					hmm_cov: '[]',
					ali_from: 301,
					ali_to: 530,
					ali_cov: '..',
					env_from: 301,
					env_to: 530,
					env_cov: '..',
					acc: 0.9
				}
			],
			id: 'SSYJSGHiGYZVlFVpPJ-sdA',
			tmhmm2: {
				tms: [
					[
					36,
					58
					],
					[
					63,
					85
					],
					[
					220,
					242
					],
					[
					252,
					274
					],
					[
					578,
					600
					],
					[
					615,
					634
					],
					[
					654,
					676
					]
				],
				topology: [
					[
						'i',
						1,
						35
					]
				]
			}
		}
		const expected = {
			tmhmm2: [
				['TM', 36, 58],
				['TM', 63, 85],
				['TM', 220, 242],
				['TM', 252, 274],
				['TM', 578, 600],
				['TM', 615, 634],
				['TM', 654, 676]					
			],
			pfam30: [
				['E1-E2_ATPase', 70, 296],
				['Hydrolase', 301, 530]
			]
		}
		const output = mist3ToPfql(input)
		expect(output.t).eql(expected)
	})
})

