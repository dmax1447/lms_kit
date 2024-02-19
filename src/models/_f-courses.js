import { __service } from '../config.json'
const serviceLink = __service.replaceAll('-', '/')
export default {
  getLinkToItem: (item) => `/subservices/${serviceLink}/${item.id}/edit`,

  association: { name: 'courses', as: 'CourseAssociation', isEditable: true },

  emptyTable: {
    text: 'courses',
    imgSrc: require('../assets/images/table/empty-questions.svg'),
  },

  filtersSection: 'courses',

  type: 'courses',

  icon: 'courses.svg',
}
