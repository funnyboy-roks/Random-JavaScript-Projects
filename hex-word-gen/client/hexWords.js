const words = [
	{
		word: 'abased',
		hex: 'aba5ed',
	},
	{
		word: 'abasia',
		hex: 'aba51a',
	},
	{
		word: 'abasic',
		hex: 'aba51c',
	},
	{
		word: 'abatis',
		hex: 'aba715',
	},
	{
		word: 'abbess',
		hex: 'abbe55',
	},
	{
		word: 'abelia',
		hex: 'abe11a',
	},
	{
		word: 'abibis',
		hex: 'ab1b15',
	},
	{
		word: 'ablaze',
		hex: 'ab1a2e',
	},
	{
		word: 'acacia',
		hex: 'acac1a',
	},
	{
		word: 'acadia',
		hex: 'acad1a',
	},
	{
		word: 'accede',
		hex: 'accede',
	},
	{
		word: 'access',
		hex: 'acce55',
	},
	{
		word: 'accost',
		hex: 'acc057',
	},
	{
		word: 'aceite',
		hex: 'ace17e',
	},
	{
		word: 'acetal',
		hex: 'ace7a1',
	},
	{
		word: 'acetic',
		hex: 'ace71c',
	},
	{
		word: 'acidic',
		hex: 'ac1d1c',
	},
	{
		word: 'actaea',
		hex: 'ac7aea',
	},
	{
		word: 'actias',
		hex: 'ac71a5',
	},
	{
		word: 'adagio',
		hex: 'ada610',
	},
	{
		word: 'adalia',
		hex: 'ada11a',
	},
	{
		word: 'addict',
		hex: 'add1c7',
	},
	{
		word: 'addled',
		hex: 'add1ed',
	},
	{
		word: 'adelie',
		hex: 'ade11e',
	},
	{
		word: 'adelig',
		hex: 'ade116',
	},
	{
		word: 'aecial',
		hex: 'aec1a1',
	},
	{
		word: 'aedile',
		hex: 'aed11e',
	},
	{
		word: 'aeolic',
		hex: 'ae011c',
	},
	{
		word: 'aeolis',
		hex: 'ae0115',
	},
	{
		word: 'aestas',
		hex: 'ae57a5',
	},
	{
		word: 'affect',
		hex: 'affec7',
	},
	{
		word: 'afield',
		hex: 'af1e1d',
	},
	{
		word: 'afloat',
		hex: 'af10a7',
	},
	{
		word: 'alalia',
		hex: 'a1a11a',
	},
	{
		word: 'alated',
		hex: 'a1a7ed',
	},
	{
		word: 'albata',
		hex: 'a1ba7a',
	},
	{
		word: 'albedo',
		hex: 'a1bed0',
	},
	{
		word: 'albeit',
		hex: 'a1be17',
	},
	{
		word: 'albite',
		hex: 'a1b17e',
	},
	{
		word: 'alcaic',
		hex: 'a1ca1c',
	},
	{
		word: 'alcaid',
		hex: 'a1ca1d',
	},
	{
		word: 'alcedo',
		hex: 'a1ced0',
	},
	{
		word: 'aldose',
		hex: 'a1d05e',
	},
	{
		word: 'alecto',
		hex: 'a1ec70',
	},
	{
		word: 'algoid',
		hex: 'a1601d',
	},
	{
		word: 'allege',
		hex: 'a11e6e',
	},
	{
		word: 'allele',
		hex: 'a11e1e',
	},
	{
		word: 'allied',
		hex: 'a111ed',
	},
	{
		word: 'allies',
		hex: 'a111e5',
	},
	{
		word: 'alsace',
		hex: 'a15ace',
	},
	{
		word: 'altaic',
		hex: 'a17a1c',
	},
	{
		word: 'aqatic',
		hex: 'a9a71c',
	},
	{
		word: 'assail',
		hex: 'a55a11',
	},
	{
		word: 'assess',
		hex: 'a55e55',
	},
	{
		word: 'assets',
		hex: 'a55e75',
	},
	{
		word: 'assist',
		hex: 'a55157',
	},
	{
		word: 'assize',
		hex: 'a5512e',
	},
	{
		word: 'assoil',
		hex: 'a55011',
	},
	{
		word: 'ateles',
		hex: 'a7e1e5',
	},
	{
		word: 'attest',
		hex: 'a77e57',
	},
	{
		word: 'attica',
		hex: 'a771ca',
	},
	{
		word: 'attila',
		hex: 'a7711a',
	},
	{
		word: 'azalea',
		hex: 'a2a1ea',
	},
	{
		word: 'azolla',
		hex: 'a2011a',
	},
	{
		word: 'azotic',
		hex: 'a2071c',
	},
	{
		word: 'babble',
		hex: 'babb1e',
	},
	{
		word: 'babies',
		hex: 'bab1e5',
	},
	{
		word: 'babist',
		hex: 'bab157',
	},
	{
		word: 'badaga',
		hex: 'bada6a',
	},
	{
		word: 'baffle',
		hex: 'baff1e',
	},
	{
		word: 'bailee',
		hex: 'ba11ee',
	},
	{
		word: 'baited',
		hex: 'ba17ed',
	},
	{
		word: 'balais',
		hex: 'ba1a15',
	},
	{
		word: 'balata',
		hex: 'ba1a7a',
	},
	{
		word: 'balboa',
		hex: 'ba1b0a',
	},
	{
		word: 'balize',
		hex: 'ba112e',
	},
	{
		word: 'ballad',
		hex: 'ba11ad',
	},
	{
		word: 'ballet',
		hex: 'ba11e7',
	},
	{
		word: 'ballot',
		hex: 'ba1107',
	},
	{
		word: 'baltic',
		hex: 'ba171c',
	},
	{
		word: 'balzac',
		hex: 'ba12ac',
	},
	{
		word: 'baobab',
		hex: 'ba0bab',
	},
	{
		word: 'basalt',
		hex: 'ba5a17',
	},
	{
		word: 'basics',
		hex: 'ba51c5',
	},
	{
		word: 'basset',
		hex: 'ba55e7',
	},
	{
		word: 'bassia',
		hex: 'ba551a',
	},
	{
		word: 'battle',
		hex: 'ba771e',
	},
	{
		word: 'beaded',
		hex: 'beaded',
	},
	{
		word: 'beadle',
		hex: 'bead1e',
	},
	{
		word: 'beagle',
		hex: 'bea61e',
	},
	{
		word: 'beasts',
		hex: 'bea575',
	},
	{
		word: 'beatae',
		hex: 'bea7ae',
	},
	{
		word: 'beatic',
		hex: 'bea71c',
	},
	{
		word: 'bedded',
		hex: 'bedded',
	},
	{
		word: 'beetle',
		hex: 'bee71e',
	},
	{
		word: 'befall',
		hex: 'befa11',
	},
	{
		word: 'befool',
		hex: 'bef001',
	},
	{
		word: 'begilt',
		hex: 'be6117',
	},
	{
		word: 'belial',
		hex: 'be11a1',
	},
	{
		word: 'belief',
		hex: 'be11ef',
	},
	{
		word: 'belize',
		hex: 'be112e',
	},
	{
		word: 'belles',
		hex: 'be11e5',
	},
	{
		word: 'bellis',
		hex: 'be1115',
	},
	{
		word: 'belted',
		hex: 'be17ed',
	},
	{
		word: 'beside',
		hex: 'be51de',
	},
	{
		word: 'bested',
		hex: 'be57ed',
	},
	{
		word: 'betide',
		hex: 'be71de',
	},
	{
		word: 'betise',
		hex: 'be715e',
	},
	{
		word: 'biased',
		hex: 'b1a5ed',
	},
	{
		word: 'bibbed',
		hex: 'b1bbed',
	},
	{
		word: 'biface',
		hex: 'b1face',
	},
	{
		word: 'bifold',
		hex: 'b1f01d',
	},
	{
		word: 'bildet',
		hex: 'b11de7',
	},
	{
		word: 'bilges',
		hex: 'b116e5',
	},
	{
		word: 'billed',
		hex: 'b111ed',
	},
	{
		word: 'billet',
		hex: 'b111e7',
	},
	{
		word: 'biotic',
		hex: 'b1071c',
	},
	{
		word: 'bisect',
		hex: 'b15ec7',
	},
	{
		word: 'bladed',
		hex: 'b1aded',
	},
	{
		word: 'blatta',
		hex: 'b1a77a',
	},
	{
		word: 'blazed',
		hex: 'b1a2ed',
	},
	{
		word: 'bletia',
		hex: 'b1e71a',
	},
	{
		word: 'bobble',
		hex: 'b0bb1e',
	},
	{
		word: 'bobcat',
		hex: 'b0bca7',
	},
	{
		word: 'bocage',
		hex: 'b0ca6e',
	},
	{
		word: 'bodega',
		hex: 'b0de6a',
	},
	{
		word: 'bodice',
		hex: 'b0d1ce',
	},
	{
		word: 'bodied',
		hex: 'b0d1ed',
	},
	{
		word: 'bodies',
		hex: 'b0d1e5',
	},
	{
		word: 'boggle',
		hex: 'b0661e',
	},
	{
		word: 'bogota',
		hex: 'b0607a',
	},
	{
		word: 'boidae',
		hex: 'b01dae',
	},
	{
		word: 'boiled',
		hex: 'b011ed',
	},
	{
		word: 'bolete',
		hex: 'b01e7e',
	},
	{
		word: 'bolide',
		hex: 'b011de',
	},
	{
		word: 'booboo',
		hex: 'b00b00',
	},
	{
		word: 'boodle',
		hex: 'b00d1e',
	},
	{
		word: 'boogie',
		hex: 'b0061e',
	},
	{
		word: 'booted',
		hex: 'b007ed',
	},
	{
		word: 'bootee',
		hex: 'b007ee',
	},
	{
		word: 'bootes',
		hex: 'b007e5',
	},
	{
		word: 'bossed',
		hex: 'b055ed',
	},
	{
		word: 'bottes',
		hex: 'b077e5',
	},
	{
		word: 'bottle',
		hex: 'b0771e',
	},
	{
		word: 'cabala',
		hex: 'caba1a',
	},
	{
		word: 'caddie',
		hex: 'cadd1e',
	},
	{
		word: 'caecal',
		hex: 'caeca1',
	},
	{
		word: 'calaba',
		hex: 'ca1aba',
	},
	{
		word: 'calced',
		hex: 'ca1ced',
	},
	{
		word: 'calcic',
		hex: 'ca1c1c',
	},
	{
		word: 'calico',
		hex: 'ca11c0',
	},
	{
		word: 'called',
		hex: 'ca11ed',
	},
	{
		word: 'calote',
		hex: 'ca107e',
	},
	{
		word: 'casaba',
		hex: 'ca5aba',
	},
	{
		word: 'cassia',
		hex: 'ca551a',
	},
	{
		word: 'castle',
		hex: 'ca571e',
	},
	{
		word: 'catalo',
		hex: 'ca7a10',
	},
	{
		word: 'cattle',
		hex: 'ca771e',
	},
	{
		word: 'celiac',
		hex: 'ce11ac',
	},
	{
		word: 'celtic',
		hex: 'ce171c',
	},
	{
		word: 'celtis',
		hex: 'ce1715',
	},
	{
		word: 'cicada',
		hex: 'c1cada',
	},
	{
		word: 'cities',
		hex: 'c171e5',
	},
	{
		word: 'cledge',
		hex: 'c1ed6e',
	},
	{
		word: 'cloaca',
		hex: 'c10aca',
	},
	{
		word: 'closed',
		hex: 'c105ed',
	},
	{
		word: 'closes',
		hex: 'c105e5',
	},
	{
		word: 'closet',
		hex: 'c105e7',
	},
	{
		word: 'coated',
		hex: 'c0a7ed',
	},
	{
		word: 'coatee',
		hex: 'c0a7ee',
	},
	{
		word: 'cobalt',
		hex: 'c0ba17',
	},
	{
		word: 'cobble',
		hex: 'c0bb1e',
	},
	{
		word: 'coccal',
		hex: 'c0cca1',
	},
	{
		word: 'coddle',
		hex: 'c0dd1e',
	},
	{
		word: 'coffea',
		hex: 'c0ffea',
	},
	{
		word: 'coffee',
		hex: 'c0ffee',
	},
	{
		word: 'cogged',
		hex: 'c066ed',
	},
	{
		word: 'cogito',
		hex: 'c06170',
	},
	{
		word: 'coiled',
		hex: 'c011ed',
	},
	{
		word: 'coital',
		hex: 'c017a1',
	},
	{
		word: 'collet',
		hex: 'c011e7',
	},
	{
		word: 'collie',
		hex: 'c0111e',
	},
	{
		word: 'cooled',
		hex: 'c001ed',
	},
	{
		word: 'coolie',
		hex: 'c0011e',
	},
	{
		word: 'cosset',
		hex: 'c055e7',
	},
	{
		word: 'costal',
		hex: 'c057a1',
	},
	{
		word: 'costia',
		hex: 'c0571a',
	},
	{
		word: 'dabble',
		hex: 'dabb1e',
	},
	{
		word: 'dacelo',
		hex: 'dace10',
	},
	{
		word: 'dacoit',
		hex: 'dac017',
	},
	{
		word: 'daddle',
		hex: 'dadd1e',
	},
	{
		word: 'daedal',
		hex: 'daeda1',
	},
	{
		word: 'daggle',
		hex: 'da661e',
	},
	{
		word: 'dalasi',
		hex: 'da1a51',
	},
	{
		word: 'dallas',
		hex: 'da11a5',
	},
	{
		word: 'dazzle',
		hex: 'da221e',
	},
	{
		word: 'debase',
		hex: 'deba5e',
	},
	{
		word: 'debate',
		hex: 'deba7e',
	},
	{
		word: 'debile',
		hex: 'deb11e',
	},
	{
		word: 'debole',
		hex: 'deb01e',
	},
	{
		word: 'decade',
		hex: 'decade',
	},
	{
		word: 'deceit',
		hex: 'dece17',
	},
	{
		word: 'decide',
		hex: 'dec1de',
	},
	{
		word: 'decies',
		hex: 'dec1e5',
	},
	{
		word: 'deface',
		hex: 'deface',
	},
	{
		word: 'defeat',
		hex: 'defea7',
	},
	{
		word: 'defect',
		hex: 'defec7',
	},
	{
		word: 'deffle',
		hex: 'deff1e',
	},
	{
		word: 'defile',
		hex: 'def11e',
	},
	{
		word: 'degage',
		hex: 'de6a6e',
	},
	{
		word: 'deific',
		hex: 'de1f1c',
	},
	{
		word: 'deiist',
		hex: 'de1157',
	},
	{
		word: 'delice',
		hex: 'de11ce',
	},
	{
		word: 'desist',
		hex: 'de5157',
	},
	{
		word: 'desole',
		hex: 'de501e',
	},
	{
		word: 'dessai',
		hex: 'de55a1',
	},
	{
		word: 'detail',
		hex: 'de7a11',
	},
	{
		word: 'detect',
		hex: 'de7ec7',
	},
	{
		word: 'detest',
		hex: 'de7e57',
	},
	{
		word: 'diable',
		hex: 'd1ab1e',
	},
	{
		word: 'dibble',
		hex: 'd1bb1e',
	},
	{
		word: 'diddle',
		hex: 'd1dd1e',
	},
	{
		word: 'diesel',
		hex: 'd1e5e1',
	},
	{
		word: 'digest',
		hex: 'd16e57',
	},
	{
		word: 'diglot',
		hex: 'd16107',
	},
	{
		word: 'dilate',
		hex: 'd11a7e',
	},
	{
		word: 'discet',
		hex: 'd15ce7',
	},
	{
		word: 'discit',
		hex: 'd15c17',
	},
	{
		word: 'distal',
		hex: 'd157a1',
	},
	{
		word: 'docile',
		hex: 'd0c11e',
	},
	{
		word: 'dogged',
		hex: 'd066ed',
	},
	{
		word: 'doodad',
		hex: 'd00dad',
	},
	{
		word: 'doodia',
		hex: 'd00d1a',
	},
	{
		word: 'doodle',
		hex: 'd00d1e',
	},
	{
		word: 'doolie',
		hex: 'd0011e',
	},
	{
		word: 'dossil',
		hex: 'd05511',
	},
	{
		word: 'dotage',
		hex: 'd07a6e',
	},
	{
		word: 'dotted',
		hex: 'd077ed',
	},
	{
		word: 'dottle',
		hex: 'd0771e',
	},
	{
		word: 'eacles',
		hex: 'eac1e5',
	},
	{
		word: 'eagles',
		hex: 'ea61e5',
	},
	{
		word: 'eaglet',
		hex: 'ea61e7',
	},
	{
		word: 'eatage',
		hex: 'ea7a6e',
	},
	{
		word: 'edible',
		hex: 'ed1b1e',
	},
	{
		word: 'editio',
		hex: 'ed1710',
	},
	{
		word: 'efface',
		hex: 'efface',
	},
	{
		word: 'effect',
		hex: 'effec7',
	},
	{
		word: 'effete',
		hex: 'effe7e',
	},
	{
		word: 'egesta',
		hex: 'e6e57a',
	},
	{
		word: 'egoist',
		hex: 'e60157',
	},
	{
		word: 'elaeis',
		hex: 'e1ae15',
	},
	{
		word: 'elated',
		hex: 'e1a7ed',
	},
	{
		word: 'eldest',
		hex: 'e1de57',
	},
	{
		word: 'elicit',
		hex: 'e11c17',
	},
	{
		word: 'elodea',
		hex: 'e10dea',
	},
	{
		word: 'estate',
		hex: 'e57a7e',
	},
	{
		word: 'etoile',
		hex: 'e7011e',
	},
	{
		word: 'fabled',
		hex: 'fab1ed',
	},
	{
		word: 'facade',
		hex: 'facade',
	},
	{
		word: 'facial',
		hex: 'fac1a1',
	},
	{
		word: 'facias',
		hex: 'fac1a5',
	},
	{
		word: 'facile',
		hex: 'fac11e',
	},
	{
		word: 'faddle',
		hex: 'fadd1e',
	},
	{
		word: 'faeces',
		hex: 'faece5',
	},
	{
		word: 'faggot',
		hex: 'fa6607',
	},
	{
		word: 'fagots',
		hex: 'fa6075',
	},
	{
		word: 'faible',
		hex: 'fa1b1e',
	},
	{
		word: 'failed',
		hex: 'fa11ed',
	},
	{
		word: 'faille',
		hex: 'fa111e',
	},
	{
		word: 'falsie',
		hex: 'fa151e',
	},
	{
		word: 'fasces',
		hex: 'fa5ce5',
	},
	{
		word: 'fascia',
		hex: 'fa5c1a',
	},
	{
		word: 'fatted',
		hex: 'fa77ed',
	},
	{
		word: 'feeble',
		hex: 'feeb1e',
	},
	{
		word: 'felice',
		hex: 'fe11ce',
	},
	{
		word: 'felled',
		hex: 'fe11ed',
	},
	{
		word: 'felloe',
		hex: 'fe110e',
	},
	{
		word: 'felted',
		hex: 'fe17ed',
	},
	{
		word: 'feodal',
		hex: 'fe0da1',
	},
	{
		word: 'festal',
		hex: 'fe57a1',
	},
	{
		word: 'fettle',
		hex: 'fe771e',
	},
	{
		word: 'fiasco',
		hex: 'f1a5c0',
	},
	{
		word: 'fiddle',
		hex: 'f1dd1e',
	},
	{
		word: 'fideli',
		hex: 'f1de11',
	},
	{
		word: 'fidget',
		hex: 'f1d6e7',
	},
	{
		word: 'fields',
		hex: 'f1e1d5',
	},
	{
		word: 'fiesta',
		hex: 'f1e57a',
	},
	{
		word: 'figlia',
		hex: 'f1611a',
	},
	{
		word: 'filial',
		hex: 'f111a1',
	},
	{
		word: 'filled',
		hex: 'f111ed',
	},
	{
		word: 'fillet',
		hex: 'f111e7',
	},
	{
		word: 'fiscal',
		hex: 'f15ca1',
	},
	{
		word: 'fisted',
		hex: 'f157ed',
	},
	{
		word: 'fitted',
		hex: 'f177ed',
	},
	{
		word: 'fizgig',
		hex: 'f12616',
	},
	{
		word: 'fizzle',
		hex: 'f1221e',
	},
	{
		word: 'flecti',
		hex: 'f1ec71',
	},
	{
		word: 'fledge',
		hex: 'f1ed6e',
	},
	{
		word: 'fleece',
		hex: 'f1eece',
	},
	{
		word: 'floats',
		hex: 'f10a75',
	},
	{
		word: 'foaled',
		hex: 'f0a1ed',
	},
	{
		word: 'fogged',
		hex: 'f066ed',
	},
	{
		word: 'foible',
		hex: 'f01b1e',
	},
	{
		word: 'foiled',
		hex: 'f011ed',
	},
	{
		word: 'folded',
		hex: 'f01ded',
	},
	{
		word: 'footed',
		hex: 'f007ed',
	},
	{
		word: 'fossil',
		hex: 'f05511',
	},
	{
		word: 'gabble',
		hex: '6abb1e',
	},
	{
		word: 'gabled',
		hex: '6ab1ed',
	},
	{
		word: 'gadaba',
		hex: '6adaba',
	},
	{
		word: 'gadget',
		hex: '6ad6e7',
	},
	{
		word: 'gadoid',
		hex: '6ad01d',
	},
	{
		word: 'gaelic',
		hex: '6ae11c',
	},
	{
		word: 'gaggle',
		hex: '6a661e',
	},
	{
		word: 'gaiete',
		hex: '6a1e7e',
	},
	{
		word: 'galago',
		hex: '6a1a60',
	},
	{
		word: 'galega',
		hex: '6a1e6a',
	},
	{
		word: 'galiot',
		hex: '6a1107',
	},
	{
		word: 'galled',
		hex: '6a11ed',
	},
	{
		word: 'gallic',
		hex: '6a111c',
	},
	{
		word: 'galoot',
		hex: '6a1007',
	},
	{
		word: 'gasbag',
		hex: '6a5ba6',
	},
	{
		word: 'gazebo',
		hex: '6a2eb0',
	},
	{
		word: 'gelebt',
		hex: '6e1eb7',
	},
	{
		word: 'geotic',
		hex: '6e071c',
	},
	{
		word: 'gestic',
		hex: '6e571c',
	},
	{
		word: 'gibbet',
		hex: '61bbe7',
	},
	{
		word: 'gibcat',
		hex: '61bca7',
	},
	{
		word: 'giblet',
		hex: '61b1e7',
	},
	{
		word: 'gidgee',
		hex: '61d6ee',
	},
	{
		word: 'gifted',
		hex: '61f7ed',
	},
	{
		word: 'giggle',
		hex: '61661e',
	},
	{
		word: 'gigolo',
		hex: '616010',
	},
	{
		word: 'gilded',
		hex: '611ded',
	},
	{
		word: 'gilead',
		hex: '611ead',
	},
	{
		word: 'gillie',
		hex: '61111e',
	},
	{
		word: 'glacis',
		hex: '61ac15',
	},
	{
		word: 'gladii',
		hex: '61ad11',
	},
	{
		word: 'gladio',
		hex: '61ad10',
	},
	{
		word: 'glazed',
		hex: '61a2ed',
	},
	{
		word: 'gleboe',
		hex: '61eb0e',
	},
	{
		word: 'global',
		hex: '610ba1',
	},
	{
		word: 'goatee',
		hex: '60a7ee',
	},
	{
		word: 'gobbet',
		hex: '60bbe7',
	},
	{
		word: 'gobble',
		hex: '60bb1e',
	},
	{
		word: 'goblet',
		hex: '60b1e7',
	},
	{
		word: 'goggle',
		hex: '60661e',
	},
	{
		word: 'goldes',
		hex: '601de5',
	},
	{
		word: 'googol',
		hex: '600601',
	},
	{
		word: 'icebag',
		hex: '1ceba6',
	},
	{
		word: 'icicle',
		hex: '1c1c1e',
	},
	{
		word: 'idesia',
		hex: '1de51a',
	},
	{
		word: 'illoff',
		hex: '1110ff',
	},
	{
		word: 'iodide',
		hex: '10d1de',
	},
	{
		word: 'isatis',
		hex: '15a715',
	},
	{
		word: 'italic',
		hex: '17a11c',
	},
	{
		word: 'itself',
		hex: '175e1f',
	},
	{
		word: 'labial',
		hex: '1ab1a1',
	},
	{
		word: 'labile',
		hex: '1ab11e',
	},
	{
		word: 'lablab',
		hex: '1ab1ab',
	},
	{
		word: 'lactea',
		hex: '1ac7ea',
	},
	{
		word: 'lactic',
		hex: '1ac71c',
	},
	{
		word: 'laelia',
		hex: '1ae11a',
	},
	{
		word: 'laical',
		hex: '1a1ca1',
	},
	{
		word: 'laisse',
		hex: '1a155e',
	},
	{
		word: 'lassie',
		hex: '1a551e',
	},
	{
		word: 'lassoo',
		hex: '1a5500',
	},
	{
		word: 'latest',
		hex: '1a7e57',
	},
	{
		word: 'leaded',
		hex: '1eaded',
	},
	{
		word: 'leafed',
		hex: '1eafed',
	},
	{
		word: 'legate',
		hex: '1e6a7e',
	},
	{
		word: 'legato',
		hex: '1e6a70',
	},
	{
		word: 'legged',
		hex: '1e66ed',
	},
	{
		word: 'legist',
		hex: '1e6157',
	},
	{
		word: 'lesbos',
		hex: '1e5b05',
	},
	{
		word: 'lessee',
		hex: '1e55ee',
	},
	{
		word: 'liable',
		hex: '11ab1e',
	},
	{
		word: 'libido',
		hex: '11b1d0',
	},
	{
		word: 'lidded',
		hex: '11dded',
	},
	{
		word: 'listed',
		hex: '1157ed',
	},
	{
		word: 'listel',
		hex: '1157e1',
	},
	{
		word: 'litote',
		hex: '11707e',
	},
	{
		word: 'little',
		hex: '11771e',
	},
	{
		word: 'loaded',
		hex: '10aded',
	},
	{
		word: 'lobata',
		hex: '10ba7a',
	},
	{
		word: 'lobate',
		hex: '10ba7e',
	},
	{
		word: 'locale',
		hex: '10ca1e',
	},
	{
		word: 'locate',
		hex: '10ca7e',
	},
	{
		word: 'loggia',
		hex: '10661a',
	},
	{
		word: 'loligo',
		hex: '101160',
	},
	{
		word: 'looted',
		hex: '1007ed',
	},
	{
		word: 'oblate',
		hex: '0b1a7e',
	},
	{
		word: 'oblige',
		hex: '0b116e',
	},
	{
		word: 'oboist',
		hex: '0b0157',
	},
	{
		word: 'obtest',
		hex: '0b7e57',
	},
	{
		word: 'ocelot',
		hex: '0ce107',
	},
	{
		word: 'odessa',
		hex: '0de55a',
	},
	{
		word: 'odiosa',
		hex: '0d105a',
	},
	{
		word: 'office',
		hex: '0ff1ce',
	},
	{
		word: 'offset',
		hex: '0ff5e7',
	},
	{
		word: 'oglala',
		hex: '061a1a',
	},
	{
		word: 'oldest',
		hex: '01de57',
	},
	{
		word: 'ossete',
		hex: '055e7e',
	},
	{
		word: 'osteal',
		hex: '057ea1',
	},
	{
		word: 'otides',
		hex: '071de5',
	},
	{
		word: 'otiose',
		hex: '07105e',
	},
	{
		word: 'otitis',
		hex: '071715',
	},
	{
		word: 'sabbat',
		hex: '5abba7',
	},
	{
		word: 'saddle',
		hex: '5add1e',
	},
	{
		word: 'sadist',
		hex: '5ad157',
	},
	{
		word: 'salade',
		hex: '5a1ade',
	},
	{
		word: 'sallet',
		hex: '5a11e7',
	},
	{
		word: 'scaled',
		hex: '5ca1ed',
	},
	{
		word: 'scales',
		hex: '5ca1e5',
	},
	{
		word: 'scalic',
		hex: '5ca11c',
	},
	{
		word: 'scilla',
		hex: '5c111a',
	},
	{
		word: 'seabag',
		hex: '5eaba6',
	},
	{
		word: 'sealed',
		hex: '5ea1ed',
	},
	{
		word: 'seated',
		hex: '5ea7ed',
	},
	{
		word: 'secale',
		hex: '5eca1e',
	},
	{
		word: 'secede',
		hex: '5ecede',
	},
	{
		word: 'sedate',
		hex: '5eda7e',
	},
	{
		word: 'sedile',
		hex: '5ed11e',
	},
	{
		word: 'seeded',
		hex: '5eeded',
	},
	{
		word: 'seidel',
		hex: '5e1de1',
	},
	{
		word: 'seized',
		hex: '5e12ed',
	},
	{
		word: 'select',
		hex: '5e1ec7',
	},
	{
		word: 'seseli',
		hex: '5e5e11',
	},
	{
		word: 'sestet',
		hex: '5e57e7',
	},
	{
		word: 'setoff',
		hex: '5e70ff',
	},
	{
		word: 'setose',
		hex: '5e705e',
	},
	{
		word: 'settee',
		hex: '5e77ee',
	},
	{
		word: 'settle',
		hex: '5e771e',
	},
	{
		word: 'siaats',
		hex: '51aa75',
	},
	{
		word: 'sialia',
		hex: '51a11a',
	},
	{
		word: 'sialis',
		hex: '51a115',
	},
	{
		word: 'siesta',
		hex: '51e57a',
	},
	{
		word: 'silage',
		hex: '511a6e',
	},
	{
		word: 'silica',
		hex: '5111ca',
	},
	{
		word: 'sissoo',
		hex: '515500',
	},
	{
		word: 'sizzle',
		hex: '51221e',
	},
	{
		word: 'slates',
		hex: '51a7e5',
	},
	{
		word: 'sledge',
		hex: '51ed6e',
	},
	{
		word: 'sliced',
		hex: '511ced',
	},
	{
		word: 'socage',
		hex: '50ca6e',
	},
	{
		word: 'social',
		hex: '50c1a1',
	},
	{
		word: 'sociis',
		hex: '50c115',
	},
	{
		word: 'soiled',
		hex: '5011ed',
	},
	{
		word: 'solace',
		hex: '501ace',
	},
	{
		word: 'soleil',
		hex: '501e11',
	},
	{
		word: 'solito',
		hex: '501170',
	},
	{
		word: 'sossle',
		hex: '50551e',
	},
	{
		word: 'sozzle',
		hex: '50221e',
	},
	{
		word: 'stable',
		hex: '57ab1e',
	},
	{
		word: 'staged',
		hex: '57a6ed',
	},
	{
		word: 'stages',
		hex: '57a6e5',
	},
	{
		word: 'stalls',
		hex: '57a115',
	},
	{
		word: 'stasis',
		hex: '57a515',
	},
	{
		word: 'stated',
		hex: '57a7ed',
	},
	{
		word: 'states',
		hex: '57a7e5',
	},
	{
		word: 'static',
		hex: '57a71c',
	},
	{
		word: 'stelis',
		hex: '57e115',
	},
	{
		word: 'stifle',
		hex: '571f1e',
	},
	{
		word: 'stille',
		hex: '57111e',
	},
	{
		word: 'stilts',
		hex: '571175',
	},
	{
		word: 'stodge',
		hex: '570d6e',
	},
	{
		word: 'stolid',
		hex: '57011d',
	},
	{
		word: 'stooge',
		hex: '57006e',
	},
	{
		word: 'stools',
		hex: '570015',
	},
	{
		word: 'tabble',
		hex: '7abb1e',
	},
	{
		word: 'tabita',
		hex: '7ab17a',
	},
	{
		word: 'tables',
		hex: '7ab1e5',
	},
	{
		word: 'tablet',
		hex: '7ab1e7',
	},
	{
		word: 'tactic',
		hex: '7ac71c',
	},
	{
		word: 'tailed',
		hex: '7a11ed',
	},
	{
		word: 'taoist',
		hex: '7a0157',
	},
	{
		word: 'tassel',
		hex: '7a55e1',
	},
	{
		word: 'tasset',
		hex: '7a55e7',
	},
	{
		word: 'tastes',
		hex: '7a57e5',
	},
	{
		word: 'tattle',
		hex: '7a771e',
	},
	{
		word: 'tattoo',
		hex: '7a7700',
	},
	{
		word: 'teased',
		hex: '7ea5ed',
	},
	{
		word: 'teasel',
		hex: '7ea5e1',
	},
	{
		word: 'tested',
		hex: '7e57ed',
	},
	{
		word: 'testee',
		hex: '7e57ee',
	},
	{
		word: 'testis',
		hex: '7e5715',
	},
	{
		word: 'tibial',
		hex: '71b1a1',
	},
	{
		word: 'tidbit',
		hex: '71db17',
	},
	{
		word: 'tilled',
		hex: '7111ed',
	},
	{
		word: 'tilted',
		hex: '7117ed',
	},
	{
		word: 'titbit',
		hex: '717b17',
	},
	{
		word: 'titled',
		hex: '7171ed',
	},
	{
		word: 'tittle',
		hex: '71771e',
	},
	{
		word: 'tobago',
		hex: '70ba60',
	},
	{
		word: 'toddle',
		hex: '70dd1e',
	},
	{
		word: 'toetoe',
		hex: '70e70e',
	},
	{
		word: 'togged',
		hex: '7066ed',
	},
	{
		word: 'toggle',
		hex: '70661e',
	},
	{
		word: 'toilet',
		hex: '7011e7',
	},
	{
		word: 'toledo',
		hex: '701ed0',
	},
	{
		word: 'tootle',
		hex: '70071e',
	},
	{
		word: 'toties',
		hex: '7071e5',
	},
	{
		word: 'zealot',
		hex: '2ea107',
	},
	{
		word: 'zeidae',
		hex: '2e1dae',
	},
	{
		word: 'zigzag',
		hex: '2162a6',
	},
	{
		word: 'zodiac',
		hex: '20d1ac',
	},
	{
		word: 'zoetic',
		hex: '20e71c',
	},
];
