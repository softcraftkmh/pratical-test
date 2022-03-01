type Attack = {
	name: string
	cost: string[]
	convertedEnergyCost: number
	damage: string
	text: string
}

type Weakness = {
	type: string
	value: string
}

type Resistance = {
	type: string
	value: string
}

type Legalities = {
	unlimited: string
	expanded: string
	standard: string
}

type Images = {
	symbol: string
	logo: string
}

export type Set = {
	id: string
	name: string
	series: string
	printedTotal: number
	total: number
	legalities: Legalities
	ptcgoCode: string
	releaseDate: string
	updatedAt: string
	images: Images
}

type Legalities2 = {
	unlimited: string
	expanded: string
	standard: string
}

type Images2 = {
	small: string
	large: string
}

type Holofoil = {
	low: number
	mid: number
	high: number
	market: number
	directLow?: number
}

type ReverseHolofoil = {
	low: number
	mid: number
	high: number
	market: number
	directLow?: number
}

type Normal = {
	low: number
	mid: number
	high: number
	market: number
	directLow?: number
}

type UnlimitedHolofoil = {
	low: number
	mid: number
	high: number
	market: number
	directLow?: number
}

type Prices = {
	holofoil: Holofoil
	reverseHolofoil: ReverseHolofoil
	normal: Normal
	unlimitedHolofoil: UnlimitedHolofoil
}

type Tcgplayer = {
	url: string
	updatedAt: string
	prices: Prices
}

type Prices2 = {
	averageSellPrice: number
	lowPrice: number
	trendPrice: number
	reverseHoloSell: number
	reverseHoloLow: number
	reverseHoloTrend: number
	lowPriceExPlus: number
	avg1: number
	avg7: number
	avg30: number
	reverseHoloAvg1: number
	reverseHoloAvg7: number
	reverseHoloAvg30: number
}

type Cardmarket = {
	url: string
	updatedAt: string
	prices: Prices2
}

type Ability = {
	name: string
	text: string
	type: string
}

export type Card = {
	id: string
	name: string
	supertype: string
	subtypes: string[]
	level: string
	hp: string
	types: string[]
	attacks: Attack[]
	weaknesses: Weakness[]
	resistances: Resistance[]
	retreatCost: string[]
	convertedRetreatCost: number
	set: Set
	number: string
	artist: string
	rarity: string
	nationalPokedexNumbers: number[]
	legalities: Legalities2
	images: Images2
	tcgplayer: Tcgplayer
	cardmarket: Cardmarket
	evolvesFrom: string
	abilities: Ability[]
	evolvesTo: string[]
	flavorText: string
	rules: string[]
	regulationMark: string
}
