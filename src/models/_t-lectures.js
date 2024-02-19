import { getAvatar } from '../helpers/user-helper'
import { shortText } from '../helpers/text-helper'
import { __service } from '../config.json'
const serviceLink = __service.replaceAll('-', '/')
function getCellType({ is_archived, category }) {
  const isArchived = category.is_archived || category.parent?.is_archived
  return { tertiary: is_archived || isArchived }
}
export default {
  getLinkToItem: (item) => `/subservices/${serviceLink}/lectures/${item.id}/view`,

  columns: [
    {
      name: 'name',
      position: 1,
      type: 'Text',
      isSortable: true,
      getCellType,
    },
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
      getCellType,
    },
    {
      name: 'lecture_type',
      position: 3,
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
      getCellType,
    },
    {
      name: 'language',
      position: 4,
      width: 150,
      type: 'Text',
      getValue() {
        return this.language?.full_name
      },
      getCellType,
    },
    {
      name: 'level',
      position: 5,
      width: 200,
      type: 'Text',
      getValue() {
        return this.level?.full_name
      },
      getCellType,
    },
    {
      name: 'subdivisions',
      position: 6,
      type: 'Text',
      getValue() {
        if (!this.subdivisions?.length) return '-'
        return this.subdivisions.map((v) => v.name_with_parents).join(', ')
      },
      getCellType,
    },
    {
      name: 'specialties',
      position: 7,
      type: 'Text',
      getValue() {
        if (!this.specialities?.length) return '-'
        return this.specialities.map((v) => v.full_name).join(', ')
      },
      getCellType,
    },
    {
      name: 'specializations',
      position: 8,
      type: 'Text',
      getValue() {
        if (!this.specializations?.length) return '-'
        return this.specializations.map((v) => v.name_with_speciality).join(', ')
      },
      getCellType,
    },
    {
      name: 'created_at',
      position: 9,
      type: 'DateTime',
      width: 200,
      isSortable: true,
      getCellType,
    },
    {
      name: 'updated_at',
      position: 10,
      type: 'DateTime',
      width: 200,
      isSortable: true,
      getCellType,
    },
    {
      name: 'actions',
      position: 11,
      type: 'Actions',
      hasOwnAction: true,
      hiddenInMobile: true,
      width: 48,
      isSortable: false,
      getCellType,
    },
  ],

  columnsInMobile: 4,

  tableAction: {
    // пока не нужно
    // getDuplicateAction(context) {
    //   return {
    //     name: 'duplicate',
    //     action: 'emit',
    //     modalConfirmConfig: {
    //       header: this.context.$t(
    //         `${__service}.pages.subservices.testing.table.actions.duplicate-confirm.${this.context.Model.type}-header`,
    //       ),
    //       text: this.context.$t(
    //         `${__service}.pages.subservices.testing.table.actions.duplicate-confirm.${this.context.Model.type}-text`,
    //       ),
    //       actionLabel: this.context.$t(`${__service}.layout.card.actions.clone`),
    //     },
    //     fn: async (payload) => {
    //       this.context.$wait.start(`clone_${this.context.Model.type}`)
    //       try {
    //         await this.context.$store.dispatch(`${__service}/${this.context.Model.type}/DUPLICATE`, payload.item)
    //         this.context.$toast.success(`${__service}.toasts.questions.successfully_duplicated`)
    //       } catch (e) {
    //         this.context.$toast.error(`${__service}.toasts.questions.generic_error`)
    //       }
    //       this.context.$wait.end(`clone_${this.context.Model.type}`)
    //     },
    //   }
    // }
    getEditAction(context, getUrl) {
      return {
        name: 'edit',
        isAvailable: ({ is_archived, parent, category }) => {
          let result = !is_archived
          if (parent?.is_archived && !is_archived) {
            result = !parent.is_archived
          }
          if (category?.is_archived || category?.parent?.is_archived) {
            const categoryIsArchived = category.is_archived || category.parent.is_archived
            result = !categoryIsArchived
          }
          return result
        },
        fn: (e) => {
          context.$router.push(getUrl(e.id, context.type))
        },
      }
    },
    getArchiveAction(context) {
      return {
        name: 'archive',
        isAvailable: ({ is_archived, parent, category }) => {
          let result = !is_archived
          if (parent?.is_archived && !is_archived) {
            result = !parent.is_archived
          }
          if (category?.is_archived || category?.parent?.is_archived) {
            const categoryIsArchived = category.is_archived || category.parent.is_archived
            result = !categoryIsArchived
          }
          return result
        },
        fn: async (payload) => {
          const { name } = payload
          const shortName =  context.getShortText(name)
          const typeModal = context.MAP_TABLE_ACTION_HELPER.ARCHIVE
          const iconSource = require('../assets/icons/emoji/smile.png')
          const modalParams = {
            title: context.$t(`${__service}.layout.modal.confirmation.lectures-archive-header`),
            iconSource,
            text: context.$t(`${__service}.layout.modal.confirmation.lectures-archive`, { name: shortName }),
            rejectButtonText: context.$t(`${__service}.layout.modal.actions.cancel`),
            resolveButtonText: context.$t(`${__service}.layout.modal.actions.archive`),
          }
          context
            .$openModal('confirm_modal', modalParams)
            .then(() => {
              context.confirmActionFetch(context, typeModal, payload)
            })
            .catch((err) => {})
        },
      }
    },
    getUnArchiveAction(context) {
      return {
        name: 'unarchive',
        isAvailable: ({ is_archived, parent, category }) => {
          let result = is_archived
          if (parent?.is_archived && !category) {
            result = !parent.is_archived
          }
          if (category?.is_archived || category?.parent?.is_archived) {
            const categoryIsArchived = category.is_archived || category.parent.is_archived
            result = !categoryIsArchived
          }
          return result
        },
        fn: async (payload) => {
          const { name } = payload
          const shortName =  context.getShortText(name)
          const typeModal = context.MAP_TABLE_ACTION_HELPER.UNARCHIVE
          const iconSource = require('../assets/icons/emoji/smile.png')
          const modalParams = {
            title: context.$t(`${__service}.layout.modal.confirmation.lectures-unarchive-header`),
            iconSource,
            text: context.$t(`${__service}.layout.modal.confirmation.lectures-unarchive`, { name: shortName }),
            rejectButtonText: context.$t(`${__service}.layout.modal.actions.cancel`),
            resolveButtonText: context.$t(`${__service}.layout.modal.actions.unarchive`),
          }
          context
            .$openModal('confirm_modal', modalParams)
            .then(() => {
              context.confirmActionFetch(context, typeModal, payload)
            })
            .catch((err) => {})
        },
      }
    },
    getDeleteAction(context) {
      return {
        name: 'delete',
        fn: async (payload) => {
          const { name } = payload
          const shortName =  context.getShortText(name)
          const typeModal = context.MAP_TABLE_ACTION_HELPER.DELETE
          const iconSource = require('../assets/icons/emoji/sad.png')
          const modalParams = {
            title: context.$t(`${__service}.layout.modal.confirmation.lectures-remove-header`),
            iconSource,
            text: context.$t(`${__service}.layout.modal.confirmation.lectures-remove`, { name: shortName }),
            rejectButtonText: context.$t(`${__service}.layout.modal.actions.cancel`),
            resolveButtonText: context.$t(`${__service}.layout.modal.actions.delete`),
          }
          context
            .$openModal('confirm_modal', modalParams)
            .then(() => {
              context.confirmActionFetch(context, typeModal, payload)
            })
            .catch((err) => {})
        },
      }
    },
  },

  confirmActionFetch(context, typeModal, payload) {
    const { id } = payload
    const { action, toast_success, toast_failed } = typeModal
    context.$wait.start(`modal_${id}`)
    action(context, payload)
      .then(() => context.fetchDataWithCustomParams())
      .then(() => context.$toast.success(`${__service}.toasts.modal.${toast_success}`))
      .catch((err) => {
        context.$toast.error(err?.response?.data?.message || `${__service}.toasts.modal.${toast_failed}`)
      })
      .finally(() => {
        context.$wait.end(`modal_${id}`)
      })
  },
  getShortText(text) {
    return shortText(text, 110)
  },

  MAP_TABLE_ACTION_HELPER: {
    ARCHIVE: {
      action: (context, payload) => context.$store.dispatch(`${__service}/${context.type}/ARCHIVE`, payload.id),
      toast_success: 'archived',
      toast_failed: 'failed_archive',
    },
    UNARCHIVE: {
      action: (context, payload) => context.$store.dispatch(`${__service}/${context.type}/UNARCHIVE`, payload.id),
      toast_success: 'unarchived',
      toast_failed: 'failed_unarchive',
    },
    DELETE: {
      action: (context, payload) => context.$store.dispatch(`${__service}/${context.type}/DESTROY`, payload),
      toast_success: 'deleted',
      toast_failed: 'failed_deleted',
    },
  },

  attributes: [],

  emptyTable: {
    text: 'lectures',
    imgSrc: require('../assets/images/table/empty-courses.png'),
  },
  emptyTableArchived: {
    text: 'lectures-archived',
    imgSrc: require('../assets/images/table/empty-courses.png'),
  },

  filtersSection: 'lectures',

  type: 'lectures',

  icon: require('../assets/icons/lections.svg'),
}
