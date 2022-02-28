import type { Card } from '@/models/index'

export type GenericResponse = {
	page: number
	pageSize: number
	count: number
	totalCount: number
}

export type CardGetResponse = GenericResponse & {
	data: Card[]
}
