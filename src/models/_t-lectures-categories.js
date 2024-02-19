import { getAvatar } from '../helpers/user-helper'
import { __service } from '../config.json'
const serviceLink = __service.replaceAll('-', '/')
export default {
  getLinkToItem: (item) => `/subservices/${serviceLink}/lectures/categories/${item.id}`,

  columns: [
    {
      name: 'name',
      position: 1,
      type: 'Text',
      isSortable: true,
      getCellType({ is_archived }) {
        return { tertiary: is_archived }
      },
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
      getCellType({ is_archived }) {
        return { tertiary: is_archived }
      },
    },
    {
      name: 'created_at',
      position: 3,
      type: 'DateTime',
      width: 200,
      isSortable: true,
      getCellType({ is_archived }) {
        return { tertiary: is_archived }
      },
    },
    {
      name: 'updated_at',
      position: 4,
      type: 'DateTime',
      width: 200,
      isSortable: true,
      getCellType({ is_archived }) {
        return { tertiary: is_archived }
      },
    },
    {
      name: 'actions',
      position: 5,
      type: 'Actions',
      hasOwnAction: true,
      hiddenInMobile: true,
      width: 48,
      isSortable: false,
      getCellType({ is_archived }) {
        return { tertiary: is_archived }
      },
    },
  ],

  attributes: [],

  emptyTable: {
    text: 'categories',
    imgSrc: require('../assets/images/table/empty-courses.png'),
  },
  emptyTableArchived: {
    text: 'categories-archived',
    imgSrc: require('../assets/images/table/empty-courses.png'),
  },

  tableAction: {
    getCategoryEditAction(context) {
      return {
        name: 'edit',
        fn: async (payload) => {
          const { name } = payload
          const typeModal = context.MAP_TABLE_ACTION_HELPER.EDIT
          const modalParams = {
            title: context.$t(`${__service}.layout.modal.titles.update-category`),
            label: context.$t(`${__service}.attributes.categories.name`),
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
        fn: async (payload) => {
          const { name } = payload
          const typeModal = context.MAP_TABLE_ACTION_HELPER.ARCHIVE
          const iconSource = require('../assets/icons/emoji/smile.png')
          const modalParams = {
            title: context.$t(`${__service}.layout.modal.confirmation.categories-archive-header`),
            iconSource,
            text: context.$t(`${__service}.layout.modal.confirmation.categories-archive`, { name }),
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
        fn: async (payload) => {
          const { name } = payload
          const typeModal = context.MAP_TABLE_ACTION_HELPER.UNARCHIVE
          const iconSource = require('../assets/icons/emoji/smile.png')
          const modalParams = {
            title: context.$t(`${__service}.layout.modal.confirmation.categories-unarchive-header`),
            iconSource,
            text: context.$t(`${__service}.layout.modal.confirmation.categories-unarchive`, { name }),
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
        isAvailable: ({ is_archived }) => {
          return !is_archived
        },
        fn: async (payload) => {
          const { name } = payload
          const typeModal = context.MAP_TABLE_ACTION_HELPER.DELETE
          const iconSource = require('../assets/icons/emoji/sad.png')
          const modalParams = {
            title: context.$t(`${__service}.layout.modal.confirmation.categories-remove-header`),
            iconSource,
            text: context.$t(`${__service}.layout.modal.confirmation.categories-remove`, { name }),
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
      .then(() => context.fetchData())
      .then(() => context.$toast.success(`${__service}.toasts.modal.${toast_success}`))
      .catch((err) => {
        context.$toast.error(err?.response?.data?.message || `${__service}.toasts.modal.${toast_failed}`)
      })
      .finally(() => {
        context.$wait.end(`modal_${id}`)
      })
  },

  async editActionFetch(context, typeModal, payload, response) {
    const { id } = payload
    const { action, toast_success, toast_failed } = typeModal
    context.$wait.start(`modal_${id}`)
    action(context, payload, response)
      .then(() => context.fetchData())
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

  filtersSection: 'categories',

  type: 'categories',

  ownerType: 'Category',

  icon: require('../assets/icons/lections.svg'),

  dontLoadCustomAttributes: true,
}
