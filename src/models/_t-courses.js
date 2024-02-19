import { getAvatar } from '../helpers/user-helper'
import { __service } from '../config.json'
const serviceLink = __service.replaceAll('-', '/')
export default {
  getLinkToItem: (item) => `/subservices/${serviceLink}/course/${item.id}`,

  columns: [
    {
      name: 'actions',
      position: 1,
      type: 'Actions',
      hasOwnAction: true,
      hiddenInMobile: true,
      width: 48,
      isSortable: false,
    },
    { name: 'name', position: 2, type: 'Text', isSortable: true },
    { name: 'cover', position: 3, width: 104, type: 'Image' },
    {
      name: 'language',
      position: 4,
      width: 150,
      type: 'Text',
      getValue() {
        return this.language?.full_name
      },
    },
    { name: 'is_published', position: 5, width: 132, type: 'Boolean', isSortable: true },
    { name: 'status', position: 6, width: 134, type: 'Status', isSortable: true },
    {
      name: 'level',
      position: 7,
      width: 200,
      type: 'Text',
      getValue() {
        return this.level?.full_name
      },
    },
    {
      name: 'subdivisions',
      position: 8,
      type: 'Text',
      getValue() {
        if (!this.subdivisions?.length) return '-'
        return this.subdivisions.map((v) => v.name_with_parents).join(', ')
      },
    },
    {
      name: 'specialties',
      position: 9,
      type: 'Text',
      getValue() {
        if (!this.specialities?.length) return '-'
        return this.specialities.map((v) => v.full_name).join(', ')
      },
    },
    {
      name: 'specializations',
      position: 10,
      type: 'Text',
      getValue() {
        if (!this.specializations?.length) return '-'
        return this.specializations.map((v) => v.name_with_speciality).join(', ')
      },
    },
    {
      name: 'author_fio',
      position: 11,
      type: 'User',
      hasOwnAction: true,
      width: 300,
      isSortable: true,
      getValue() {
        if (this.author) {
          // eslint-disable-next-line camelcase
          const { id, fio } = this.author
          return {
            last_name: fio,
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
    { name: 'created_at', position: 12, type: 'DateTime', width: 200, isSortable: true },
    { name: 'updated_at', position: 13, type: 'DateTime', width: 200, isSortable: true },
    {
      name: 'disciplines',
      position: 14,
      type: 'Status',
      width: 205,
      isSortable: false,
      getValue() {
        return this.disciplines ? 'linked' : 'not_linked'
      },
    },
  ],

  columnsInMobile: 4,

  attributes: [],

  emptyTable: {
    text: 'courses',
    imgSrc: require('../assets/images/table/empty-courses.png'),
  },

  filtersSection: 'courses',

  type: 'courses',

  icon: 'courses',
}
