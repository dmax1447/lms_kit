import { SORT_ATTRIBUTE_CREATED, SORT_ORDER_DESC } from './sort-consts'

export const WITHOUT_RESOURCE = true
export const DEFAULT_SORT_ORDER = SORT_ORDER_DESC
export const DEFAULT_SORT_PARAMS = {
  sort_attribute: SORT_ATTRIBUTE_CREATED,
  sort_order: DEFAULT_SORT_ORDER,
}

export const PER_PAGE_ITEMS = [25, 50, 100]
export const PER_PAGE_ITEMS_STUDENT = [15, 30, 45]
