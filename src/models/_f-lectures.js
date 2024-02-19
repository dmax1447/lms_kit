import { __service } from '../config.json'
const serviceLink = __service.replaceAll('-', '/')
export default {
  getLinkToItem: (item) => `/subservices/${serviceLink}/lectures/${item.id}/edit`,

  association: { name: 'lectures', as: 'LectureAssociation', isEditable: true },

  emptyTable: {
    text: 'lectures',
    imgSrc: require('../assets/images/table/empty-questions.svg'),
  },

  filtersSection: 'lectures',

  type: 'lectures',

  icon: 'lections.svg',
}
