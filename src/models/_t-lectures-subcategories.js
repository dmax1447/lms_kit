import { getAvatar } from '../helpers/user-helper'
import { __service } from '../config.json'
const serviceLink = __service.replaceAll('-', '/')
function getCellType({ is_archived, parent }) {
  return { tertiary: parent?.is_archived || is_archived }
}
export default {
  getLinkToItem: (item) => `/subservices/${serviceLink}/lectures/categories/${item.id}/lectures`,

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
      name: 'created_at',
      position: 3,
      type: 'DateTime',
      width: 200,
      isSortable: true,
      getCellType,
    },
    {
      name: 'updated_at',
      position: 4,
      type: 'DateTime',
      width: 200,
      isSortable: true,
      getCellType,
    },
    {
      name: 'actions',
      position: 5,
      type: 'Actions',
      hasOwnAction: true,
      hiddenInMobile: true,
      width: 48,
      isSortable: false,
      getCellType,
    },
  ],

  tableAction: {
    getCategoryEditAction(context) {
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
        fn: async (payload) => {
          const { name } = payload
          const typeModal = context.MAP_TABLE_ACTION_HELPER.EDIT
          const modalParams = {
            title: context.$t(`${__service}.layout.modal.titles.update-subcategory`),
            label: context.$t(`${__service}.attributes.subcategories.name`),
            value: name,
            validationRules: {
              required: true,
              max: 110,
            },
            rejectButtonText: context.$t(`${__service}.layout.modal.actions.cancel`),
            resolveButtonText: context.$t(`${__service}.layout.modal.actions.edit`),
          }
          context
            .$openModal('edit_modal', modalParams)
            .then((response) => {
              if (!response.value) {
                context.$toast.error(`${__service}.toasts.category.not_written`)
                return
              }
              if (response.value.length > 110) {
                context.$toast.error(`${__service}.toasts.category.too_big`)
                return
              }
              context.editActionFetch(context, typeModal, payload, response)
            })
            .catch((err) => {})
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
          const typeModal = context.MAP_TABLE_ACTION_HELPER.ARCHIVE
          const iconSource = require('../assets/icons/emoji/smile.png')
          const modalParams = {
            title: context.$t(`${__service}.layout.modal.confirmation.subcategories-archive-header`),
            iconSource,
            text: context.$t(`${__service}.layout.modal.confirmation.subcategories-archive`, { name }),
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
          const typeModal = context.MAP_TABLE_ACTION_HELPER.UNARCHIVE
          const iconSource = require('../assets/icons/emoji/smile.png')
          const modalParams = {
            title: context.$t(`${__service}.layout.modal.confirmation.subcategories-unarchive-header`),
            iconSource,
            text: context.$t(`${__service}.layout.modal.confirmation.subcategories-unarchive`, { name }),
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
          const typeModal = context.MAP_TABLE_ACTION_HELPER.DELETE
          const iconSource = require('../assets/icons/emoji/sad.png')
          const modalParams = {
            title: context.$t(`${__service}.layout.modal.confirmation.subcategories-remove-header`),
            iconSource,
            text: context.$t(`${__service}.layout.modal.confirmation.subcategories-remove`, { name }),
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

  editActionFetch(context, typeModal, payload, response) {
    const { id } = payload
    const { action, toast_success, toast_failed } = typeModal
    context.$wait.start(`modal_${id}`)
    action(context, payload, response)
      .then(() => context.fetchDataWithCustomParams())
      .then(() => context.$toast.success(`${__service}.toasts.modal.${toast_success}`))
      .catch((err) => {
        context.$toast.error(err?.response?.data?.message || `${__service}.toasts.modal.${toast_failed}`)
      })
      .finally(() => {
        context.$wait.end(`modal_${id}`)
      })
  },

  MAP_TABLE_ACTION_HELPER: {
    EDIT: {
      action: (context, payload, response) => {
        return context.$store.dispatch(`${__service}/${context.type}/UPDATE`, {
          id: payload.id,
          name: response.value,
          author_id: context.$store.state?.auth?.user?.sub,
          client_id: context.$store.state?.auth?.user?.sub,
        })
      },
      toast_success: 'edited',
      toast_failed: 'failed_edited',
    },
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
    text: 'subcategories',
    imgSrc: require('../assets/images/table/empty-courses.png'),
  },
  emptyTableArchived: {
    text: 'subcategories-archived',
    imgSrc: require('../assets/images/table/empty-courses.png'),
  },

  filtersSection: 'categories',

  type: 'subcategories',

  ownerType: 'Category',

  icon: require('../assets/icons/lections.svg'),

  dontLoadCustomAttributes: true,
}
