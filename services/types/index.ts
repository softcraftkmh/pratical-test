import type { Card, Set } from '@/models/index'

export type GenericResponse = {
	page: number
	pageSize: number
	count: number
	totalCount: number
}

export type CardsGetResponse = GenericResponse & {
	data: Card[]
}

export type CardGetResponse = GenericResponse & {
	data: Card
}

export type TypeGetResponse = GenericResponse & {
	data: string[]
}

export type RarityGetResponse = GenericResponse & {
	data: string[]
}

export type SetGetResponse = GenericResponse & {
	data: Set[]
}
