import { getAvatar } from '../helpers/user-helper'
import { __service } from '../config.json'
const serviceLink = __service.replaceAll('-', '/')
export default {
  getLinkToItem: (item) => `/subservices/${serviceLink}/lectures/${item.id}/edit`,

  columns: [
    { name: 'radio', position: 1, hasOwnAction: true, isCustom: true, width: 48, type: 'Radio', isSortable: false },
    { name: 'name', position: 2, type: 'Text', isSortable: true },
    {
      name: 'author_id',
      position: 3,
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
      name: 'lecture_type',
      position: 4,
      type: 'Translated',
      width: 300,
      isSortable: true,
      getTranslateSetup(value) {
        return {
          translate: true,
          translateGroup: 'pages.subservices.testing.attributes.lectures.list',
          name: value,
        }
      },
    },
    {
      name: 'category_name',
      position: 5,
      type: 'Text',
      isSortable: true,
      getValue() {
        return this.category.parent?.name || this.category?.name || ''
      },
    },
    { name: 'created_at', position: 5, type: 'DateTime', width: 200, isSortable: true },
    { name: 'updated_at', position: 6, type: 'DateTime', width: 200, isSortable: true },
    {
      name: 'actions',
      position: 6,
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
    text: 'lectures',
    imgSrc: require('../assets/images/table/empty-questions.svg'),
  },

  filtersSection: 'lectures',

  type: 'lectures',

  icon: 'lections.svg',
}
