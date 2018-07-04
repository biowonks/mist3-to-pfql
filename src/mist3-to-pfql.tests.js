/* eslint no-magic-numbers: 0 */
'use strict'

const expect = require('chai').expect

const mist3ToPfql = require('./mist3-to-pfql')

describe('mist3-to-pfql', function() {
	it('should parse correctly but not interact with anything else', function() {
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
	it('should parse correctly this one too', function() {
		const input = {
			pfam31:
			[ { name: 'Bac_DnaA',
				score: 332.8,
				bias: 0.4,
				c_evalue: 4e-103,
				i_evalue: 9.5e-100,
				hmm_from: 1,
				hmm_to: 218,
				hmm_cov: '[.',
				ali_from: 179,
				ali_to: 396,
				ali_cov: '..',
				env_from: 179,
				env_to: 397,
				env_cov: '..',
				acc: 0.99 },
			  { name: 'Bac_DnaA_C',
				score: 108.8,
				bias: 0.1,
				c_evalue: 3.9e-35,
				i_evalue: 9.3e-32,
				hmm_from: 1,
				hmm_to: 69,
				hmm_cov: '[]',
				ali_from: 423,
				ali_to: 491,
				ali_cov: '..',
				env_from: 423,
				env_to: 491,
				env_cov: '..',
				acc: 0.99 },
			  { name: 'DnaA_N',
				score: 73.8,
				bias: 0.1,
				c_evalue: 2.7e-24,
				i_evalue: 6.4e-21,
				hmm_from: 2,
				hmm_to: 62,
				hmm_cov: '..',
				ali_from: 4,
				ali_to: 63,
				ali_cov: '..',
				env_from: 3,
				env_to: 65,
				env_cov: '..',
				acc: 0.93 },
			  { name: 'IstB_IS21',
				score: 33.7,
				bias: 0,
				c_evalue: 1.1e-11,
				i_evalue: 2.5e-8,
				hmm_from: 49,
				hmm_to: 150,
				hmm_cov: '..',
				ali_from: 214,
				ali_to: 318,
				ali_cov: '..',
				env_from: 169,
				env_to: 325,
				env_cov: '..',
				acc: 0.83 },
			  { name: 'AAA',
				score: 25.4,
				bias: 0,
				c_evalue: 5.9e-9,
				i_evalue: 0.000014,
				hmm_from: 2,
				hmm_to: 124,
				hmm_cov: '..',
				ali_from: 216,
				ali_to: 329,
				ali_cov: '..',
				env_from: 215,
				env_to: 337,
				env_cov: '..',
				acc: 0.8 } ],
		   agfam2: [],
		   ecf1: [],
		   id: 'apSuJKn2HhqNtG570pB-TA',
		   length: 514,
		   sequence: 'MSVELWQQCVDLLRDELPSQQFNTWIRPLQVEAEGDELRVYAPNRFVLDWVNEKYLGRLLELLGERGEGQLPALSLLIGSKRSRTPRAAIVPSQTHVAPPPPVAPPPAPVQPVSAAPVVVPREELPPVTTAPSVSSDPYEPEEPSIDPLAAAMPAGAAPAVRTERNVQVEGALKHTSYLNRTFTFENFVEGKSNQLARAAAWQVADNLKHGYNPLFLYGGVGLGKTHLMHAVGNHLLKKNPNAKVVYLHSERFVADMVKALQLNAINEFKRFYRSVDALLIDDIQFFARKERSQEEFFHTFNALLEGGQQVILTSDRYPKEIEGLEERLKSRFGWGLTVAVEPPELETRVAILMKKAEQAKIELPHDAAFFIAQRIRSNVRELEGALKRVIAHSHFMGRPITIELIRESLKDLLALQDKLVSIDNIQRTVAEYYKIKISDLLSKRRSRSVARPRQVAMALSKELTNHSLPEIGVAFGGRDHTTVLHACRKIAQLRESDADIREDYKNLLRTLTT',
		   segs: [ [ 56, 69 ], [ 97, 128 ], [ 148, 160 ] ],
		   coils: [],
		   tmhmm2: null 
		}
		const expected = {
			pfam31: [
				['Bac_DnaA', 179, 397],
			  	['Bac_DnaA_C', 423, 491],
			  	['DnaA_N', 3, 65],
			  	['IstB_IS21', 169, 325],
				['AAA', 215, 337]
			]
		}
		const output = mist3ToPfql(input)
		expect(output.t).eql(expected)
	})
})


