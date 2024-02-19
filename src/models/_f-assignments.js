import { __service } from '../config.json'
const serviceLink = __service.replaceAll('-', '/')
export default {
  getLinkToItem: (item) => `/subservices/${serviceLink}/assignments/${item.id}/edit`,

  association: { name: 'assignments', as: 'AssignmentAssociation', isEditable: true },
  emptyTable: {
    text: 'assignments',
    imgSrc: require('../assets/images/table/empty-questions.svg'),
  },

  filtersSection: 'assignments',

  type: 'assignments',

  icon: 'assignments.svg',
}
