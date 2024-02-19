import { getAvatar } from '../../helpers/user-helper'
import { __service } from '../../config.json'
import {envByServiceName} from "~/utils/utils";
const serviceLink = __service.replaceAll('-', '/')
const serviceName = __service
const ENV = envByServiceName(null, serviceName)
export default {
  // getLinkToItem: (item) => `/subservices/${serviceLink}/lectures/${item.id}/edit`,

  columns: [
    { name: 'radio', position: 1, hasOwnAction: true, isCustom: true, width: 48, type: 'Radio', isSortable: false },
    { name: 'name', position: 2, type: 'Text', isSortable: true, target: "_blank",
      hasOwnAction: true,
      linkTo() {
        const modulePath = ENV.ASSIGNMENT_MODULE_NAME.replaceAll('-', '/')
        return `/subservices/${modulePath}/assignments/${this.id}/preview`
      }
    },
    {
      name: 'category_name',
      position: 3,
      type: 'Text',
      hasOwnAction: true,
      getValue() {
        return this.category.parent?.name || this.category.name || ''
      },
    },
    {
      name: 'subcategory_name',
      position: 4,
      type: 'Text',
      hasOwnAction: true,
      getValue() {
        return this.category.parent && this.category?.name
      },
    },
    {
      name: 'author_fio',
      isSortable: true,
      position: 5,
      type: 'User',
      hasOwnAction: true,
      width: 300,
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
    {
      name: 'language',
      position: 6,
      width: 150,
      type: 'Text',
      getValue() {
        return this.language?.full_name
      },
    },
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

    { name: 'created_at', position: 11, type: 'DateTime', width: 200, isSortable: true, hasOwnAction: true },
    { name: 'updated_at', position: 12, type: 'DateTime', width: 200, isSortable: true, hasOwnAction: true },
  ],

  columnsInMobile: 4,

  attributes: [],

  emptyTable: {
    text: 'assignments_not_found',
    imgSrc: require('../../assets/images/table/empty_search.svg'),
  },

  filtersSection: 'assignment',

  type: 'assignments',
  nameKey: 'name',
  icon: 'lections.svg',
}
