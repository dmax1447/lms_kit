import { getAvatar } from '../helpers/user-helper'
import { __service } from '../config.json'
const serviceLink = __service.replaceAll('-', '/')
export default {
  getLinkToItem: (item) => `/subservices/${serviceLink}/assignments/${item.id}/preview`,

  columns: [
    { name: 'name', position: 1, type: 'Text', width: 300, isSortable: true },
    {
      name: 'author_fio',
      position: 2,
      type: 'User',
      hasOwnAction: true,
      width: 300,
      isSortable: true,
      getValue() {
        if (this.author) {
          // eslint-disable-next-line camelcase
          const { first_name, last_name, middle_name, type, id } = this.author
          return {
            first_name,
            middle_name,
            last_name,
            type,
            id,
          }
        } else {
          return 'multiselect.author.reset_option'
        }
      },
      image() {
        return getAvatar(this.author)
      },
    },
    {
      name: 'category_name',
      position: 4,
      type: 'Text',
      width: 300,
      isSortable: true,
      getValue() {
        return this.category?.parent?.name || this.category?.name || ''
      },
    },
    { name: 'created_at', position: 5, type: 'DateTime', width: 200, isSortable: true },
    { name: 'updated_at', position: 6, type: 'DateTime', width: 200, isSortable: true },
    {
      name: 'actions',
      position: 7,
      type: 'Actions',
      hasOwnAction: true,
      hiddenInMobile: true,
      width: 48,
      isSortable: false,
    },
  ],

  columnsInMobile: 4,

  attributes: [],
  emptyTable: {
    text: 'assignments',
    imgSrc: require('../assets/images/table/empty-courses.png'),
  },

  filtersSection: 'assignments',

  type: 'assignments',

  icon: 'lections.svg',
}
