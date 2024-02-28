<template>
  <div class="table-page">
    <h1>Table page</h1>
    <STableWithHeader
        :actions="actions"
        :columns="tableConfig.columns"
        :empty-table="tableConfig.emptyTable"
        :get-link-to-item="tableConfig.getLinkToItem"
        heading="Test table"
        :icon="iconContent"
        :list="list"
        :pagination="pagination"
        :sort="sort"
        back-trigger-is-visible
        :resource-name="tableConfig.type"
        service="courses"
        :table-actions="tableActions"
        :should-store-params-in-url="false"
        class="course-table"
        @changePage="onChangePage"
        @changePerPage="onChangePerPage"
        @changeSort="onChangeSort"
    >

    </STableWithHeader>
  </div>
</template>
<script>
// @ is an alias to /src
import {SButton, SInput, STableWithHeader } from '@synergy/lms-ui-kit'
import tableConfig from '../models/_t-courses'
export default {
  name: 'HomeView',
  components: {
    SButton,
    SInput,
    STableWithHeader
  },
  data() {
    return {
      actions: [{
        name: 'course',
        path: `/course/new`,
        fn: () => {},
      }],
      tableConfig,
      tabConfig: [
        {
          placeholder: `my-courses`,
          value: 'my-courses',
        },
        {
          placeholder: `all-courses`,
          value: 'all-courses',
        },
        {
          placeholder: `archive-courses`,
          value: 'archive-courses',
        },
      ],
      iconContent: require('../assets/icons/courses.svg'),
      list: [
        {
          "id": "59d0d724-827b-4485-be7f-99630e68c385",
          "created_at": "2024-02-13T17:46:48.727+03:00",
          "updated_at": "2024-02-13T17:53:12.035+03:00",
          "name": "Копия Курс по графике",
          "description": "",
          "is_published": true,
          "client_id": "799f7e3c-cd33-4c38-b938-1e23af365d93",
          "is_archived": false,
          "status": "ready",
          "items_count": 1,
          "author": {
            "id": "799f7e3c-cd33-4c38-b938-1e23af365d93",
            "fio": "test-service-manager"
          },
          "language": {
            "id": "32d977db-8f0f-4998-b988-8e8546cb1dc4",
            "full_name": "Русский язык"
          },
          "level": {
            "id": "1deae754-7b5c-451e-b209-407a65ae5779",
            "full_name": "Магистратура"
          },
          "cover": {
            "id": "ea308606-e42a-4a1e-b129-b9f0d49997dd",
            "created_at": "2024-02-13T17:46:48.739+03:00",
            "updated_at": "2024-02-13T17:46:48.748+03:00",
            "url": "https://develop-synergysoft-lms-env2.c4.syndev.ru/courses/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWszT0RZNU5URm1aaTA0WkRrM0xUUXlNVEl0WWpCak1pMHlNRFZrWTJZMk16VmlObVFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--d31946717a895051ef70d54905619fab32f6ecd4/1021405512.jpg",
            "original_filename": "1021405512.jpg",
            "size": 124734
          },
          "subdivisions": [
            {
              "id": "6f9194f8-fad0-437c-9eb7-5bd85163d521",
              "full_name": "МОИ-МТИ 069",
              "name_with_parents": "МОИ-МТИ/МОИ-МТИ 069",
              "parent_id": "22bb38a6-d6ff-4ddf-9838-a93a1b0f205b"
            }
          ],
          "specialities": [
            {
              "id": "1a7a7cd6-1165-44d5-a7b7-7ec5e37a8dfc",
              "full_name": "Шрифт и типографика в WEB,ФДиР, 87"
            }
          ],
          "specializations": [
            {
              "id": "1a7a7cd6-1165-44d5-a7b7-7ec5e37a8dfc_0",
              "full_name": "Без специализации",
              "name_with_speciality": "Шрифт и типографика в WEB,ФДиР, 87/Без специализации",
              "speciality_id": "1a7a7cd6-1165-44d5-a7b7-7ec5e37a8dfc"
            }
          ],
          "disciplines": false,
          "sum_points": 100
        },
        {
          "id": "85f1fceb-4b9f-4c7c-8ea9-19b5ff8f3b51",
          "created_at": "2024-02-02T09:22:36.472+03:00",
          "updated_at": "2024-02-13T16:31:58.477+03:00",
          "name": "Курс по графике",
          "description": "",
          "is_published": true,
          "client_id": "799f7e3c-cd33-4c38-b938-1e23af365d93",
          "is_archived": false,
          "status": "ready",
          "items_count": 1,
          "author": {
            "id": "799f7e3c-cd33-4c38-b938-1e23af365d93",
            "fio": "test-service-manager"
          },
          "language": {
            "id": "32d977db-8f0f-4998-b988-8e8546cb1dc4",
            "full_name": "Русский язык"
          },
          "level": {
            "id": "1deae754-7b5c-451e-b209-407a65ae5779",
            "full_name": "Магистратура"
          },
          "cover": {
            "id": "60658e95-95b2-4cba-8787-cb49ea7633df",
            "created_at": "2024-02-02T09:22:49.361+03:00",
            "updated_at": "2024-02-02T09:22:49.557+03:00",
            "url": "https://develop-synergysoft-lms-env2.c4.syndev.ru/courses/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWszT0RZNU5URm1aaTA0WkRrM0xUUXlNVEl0WWpCak1pMHlNRFZrWTJZMk16VmlObVFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--d31946717a895051ef70d54905619fab32f6ecd4/1021405512.jpg",
            "original_filename": "1021405512.jpg",
            "size": 124734
          },
          "subdivisions": [
            {
              "id": "6f9194f8-fad0-437c-9eb7-5bd85163d521",
              "full_name": "МОИ-МТИ 069",
              "name_with_parents": "МОИ-МТИ/МОИ-МТИ 069",
              "parent_id": "22bb38a6-d6ff-4ddf-9838-a93a1b0f205b"
            }
          ],
          "specialities": [
            {
              "id": "1a7a7cd6-1165-44d5-a7b7-7ec5e37a8dfc",
              "full_name": "Шрифт и типографика в WEB,ФДиР, 87"
            }
          ],
          "specializations": [
            {
              "id": "1a7a7cd6-1165-44d5-a7b7-7ec5e37a8dfc_0",
              "full_name": "Без специализации",
              "name_with_speciality": "Шрифт и типографика в WEB,ФДиР, 87/Без специализации",
              "speciality_id": "1a7a7cd6-1165-44d5-a7b7-7ec5e37a8dfc"
            }
          ],
          "disciplines": false,
          "sum_points": 100
        },
        {
          "id": "62226f77-16a6-49d3-9e60-34347c29d1ef",
          "created_at": "2024-02-01T20:09:33.932+03:00",
          "updated_at": "2024-02-01T20:09:33.932+03:00",
          "name": "Teaching 110",
          "description": "Accusantium aliquam deleniti quos.",
          "is_published": true,
          "client_id": "08cd306b-b9b0-4808-bdd9-6ec3923e7adf",
          "is_archived": false,
          "status": "ready",
          "items_count": 2,
          "author": {
            "id": "b48a44fd-c675-44dd-88f6-3eb8604d6cd1",
            "fio": "Валерия Дорофеев Зайцева"
          },
          "language": {
            "id": "3cf3825f-c1e9-45ae-a769-50f0e2464844",
            "full_name": "English"
          },
          "level": {
            "id": "4c606c30-41ac-420a-b35c-bded152b9b56",
            "full_name": "Magistracy"
          },
          "cover": null,
          "subdivisions": [],
          "specialities": [],
          "specializations": [],
          "disciplines": true,
          "sum_points": 100
        },
        {
          "id": "5e972862-1c3b-414b-96f7-9f581778f354",
          "created_at": "2024-02-01T20:09:33.922+03:00",
          "updated_at": "2024-02-14T16:48:53.980+03:00",
          "name": "Communications 359",
          "description": "Quis et voluptate aperiam.",
          "is_published": false,
          "client_id": "08cd306b-b9b0-4808-bdd9-6ec3923e7adf",
          "is_archived": false,
          "status": "in work",
          "items_count": 1,
          "author": {
            "id": "b48a44fd-c675-44dd-88f6-3eb8604d6cd1",
            "fio": "Валерия Дорофеев Зайцева"
          },
          "language": {
            "id": "9bcbb9f0-0aef-48aa-ad01-1a6f4d8ab951",
            "full_name": "French"
          },
          "level": {
            "id": "136a436c-ba1f-40c5-8d01-c72559e678c9",
            "full_name": "Bachelor"
          },
          "cover": null,
          "subdivisions": [],
          "specialities": [],
          "specializations": [],
          "disciplines": false,
          "sum_points": 100
        },
        {
          "id": "0dedaee7-51ca-4e3e-95b0-f2de56447f92",
          "created_at": "2024-02-01T20:09:33.911+03:00",
          "updated_at": "2024-02-13T16:45:34.525+03:00",
          "name": "Information Systems 123",
          "description": "Et laborum tenetur aliquam.",
          "is_published": true,
          "client_id": "08cd306b-b9b0-4808-bdd9-6ec3923e7adf",
          "is_archived": false,
          "status": "ready",
          "items_count": 2,
          "author": {
            "id": "e8fc33f1-b62a-458e-bfbc-5bdd325d93ca",
            "fio": "Иванов Иван Иванович"
          },
          "language": {
            "id": "374bc7fa-ab93-4241-8ad3-95b4843f3d74",
            "full_name": "Russian"
          },
          "level": {
            "id": "a0567c31-c5d7-40d0-90b1-281853239a5e",
            "full_name": "College"
          },
          "cover": null,
          "subdivisions": [],
          "specialities": [],
          "specializations": [],
          "disciplines": false,
          "sum_points": 100
        },
        {
          "id": "1d49611d-962d-4234-85f9-1bec46f1bffe",
          "created_at": "2024-02-01T20:09:33.900+03:00",
          "updated_at": "2024-02-01T20:09:33.900+03:00",
          "name": "Information Systems 426",
          "description": "Laborum rerum inventore minima.",
          "is_published": false,
          "client_id": "08cd306b-b9b0-4808-bdd9-6ec3923e7adf",
          "is_archived": true,
          "status": "draft",
          "items_count": 0,
          "author": {
            "id": "b7fb8047-3f26-470e-83e7-44a04342eef7",
            "fio": "Семён Фомин Яковлев"
          },
          "language": {
            "id": "3cf3825f-c1e9-45ae-a769-50f0e2464844",
            "full_name": "English"
          },
          "level": {
            "id": "4c606c30-41ac-420a-b35c-bded152b9b56",
            "full_name": "Magistracy"
          },
          "cover": null,
          "subdivisions": [],
          "specialities": [],
          "specializations": [],
          "disciplines": false,
          "sum_points": 0
        },
        {
          "id": "855fde21-b4db-4215-8a08-25df7885c83c",
          "created_at": "2024-02-01T20:09:33.889+03:00",
          "updated_at": "2024-02-01T20:09:33.889+03:00",
          "name": "Engineering 152",
          "description": "Accusantium corrupti asperiores dolorem.",
          "is_published": false,
          "client_id": "08cd306b-b9b0-4808-bdd9-6ec3923e7adf",
          "is_archived": true,
          "status": "draft",
          "items_count": 0,
          "author": {
            "id": "e8fc33f1-b62a-458e-bfbc-5bdd325d93ca",
            "fio": "Иванов Иван Иванович"
          },
          "language": {
            "id": "9bcbb9f0-0aef-48aa-ad01-1a6f4d8ab951",
            "full_name": "French"
          },
          "level": {
            "id": "136a436c-ba1f-40c5-8d01-c72559e678c9",
            "full_name": "Bachelor"
          },
          "cover": null,
          "subdivisions": [],
          "specialities": [],
          "specializations": [],
          "disciplines": false,
          "sum_points": 0
        },
        {
          "id": "126fa95b-c7cb-41f3-8b08-c3a783dfbad7",
          "created_at": "2024-02-01T20:09:33.877+03:00",
          "updated_at": "2024-02-01T20:09:33.877+03:00",
          "name": "Creative Arts 489",
          "description": "Est error dicta a.",
          "is_published": false,
          "client_id": "08cd306b-b9b0-4808-bdd9-6ec3923e7adf",
          "is_archived": true,
          "status": "draft",
          "items_count": 0,
          "author": {
            "id": "e8fc33f1-b62a-458e-bfbc-5bdd325d93ca",
            "fio": "Иванов Иван Иванович"
          },
          "language": {
            "id": "374bc7fa-ab93-4241-8ad3-95b4843f3d74",
            "full_name": "Russian"
          },
          "level": {
            "id": "a0567c31-c5d7-40d0-90b1-281853239a5e",
            "full_name": "College"
          },
          "cover": null,
          "subdivisions": [],
          "specialities": [],
          "specializations": [],
          "disciplines": false,
          "sum_points": 0
        },
        {
          "id": "feb2efb2-1027-4efc-8c70-47486bc5e2f3",
          "created_at": "2024-02-01T20:09:33.866+03:00",
          "updated_at": "2024-02-01T20:09:33.866+03:00",
          "name": "Arts 362",
          "description": "Et asperiores atque voluptas.",
          "is_published": false,
          "client_id": "08cd306b-b9b0-4808-bdd9-6ec3923e7adf",
          "is_archived": false,
          "status": "draft",
          "items_count": 0,
          "author": {
            "id": "a91bd085-4987-47ef-9513-71a94e5be5d9",
            "fio": "Клавдия Коновалов Самойлов"
          },
          "language": {
            "id": "56b51dc5-8709-4694-89bc-25053491c393",
            "full_name": "Korean"
          },
          "level": {
            "id": "17d42d9e-e3b9-481f-a2d1-5cab8cae6c3c",
            "full_name": "Postgraduate"
          },
          "cover": null,
          "subdivisions": [],
          "specialities": [],
          "specializations": [],
          "disciplines": false,
          "sum_points": 0
        },
        {
          "id": "5205cfca-0ef8-421d-a80e-4a2898996727",
          "created_at": "2024-02-01T20:09:33.854+03:00",
          "updated_at": "2024-02-01T20:09:33.854+03:00",
          "name": "Biological Science 143",
          "description": "Laboriosam accusamus iusto neque.",
          "is_published": false,
          "client_id": "08cd306b-b9b0-4808-bdd9-6ec3923e7adf",
          "is_archived": false,
          "status": "draft",
          "items_count": 0,
          "author": {
            "id": "39071262-eb6f-4acd-837f-919b38076e92",
            "fio": "Вера Кононов Родионов"
          },
          "language": {
            "id": "e5ab3ca2-ce40-4ab0-82ed-7f57082cf36b",
            "full_name": "Japanese"
          },
          "level": {
            "id": "1f9118ac-9309-45da-989c-e10ea308e64d",
            "full_name": "Specialty"
          },
          "cover": null,
          "subdivisions": [],
          "specialities": [],
          "specializations": [],
          "disciplines": false,
          "sum_points": 0
        },
        {
          "id": "715a8431-bc16-47d9-9044-e931930e5110",
          "created_at": "2024-02-01T20:09:33.842+03:00",
          "updated_at": "2024-02-01T20:09:33.842+03:00",
          "name": "Forensic Science 280",
          "description": "Cupiditate dolores in sit.",
          "is_published": false,
          "client_id": "08cd306b-b9b0-4808-bdd9-6ec3923e7adf",
          "is_archived": false,
          "status": "draft",
          "items_count": 0,
          "author": {
            "id": "e8fc33f1-b62a-458e-bfbc-5bdd325d93ca",
            "fio": "Иванов Иван Иванович"
          },
          "language": {
            "id": "3cf3825f-c1e9-45ae-a769-50f0e2464844",
            "full_name": "English"
          },
          "level": {
            "id": "4c606c30-41ac-420a-b35c-bded152b9b56",
            "full_name": "Magistracy"
          },
          "cover": null,
          "subdivisions": [],
          "specialities": [],
          "specializations": [],
          "disciplines": false,
          "sum_points": 0
        }
      ],
      tableActions: [],
      pagination: {
        page: 1,
        perPage: 25,
      },
      sort: {},
    }
  },
  methods: {
    applyFilters() {
      this.filterState = cloneDeep(this.currentFilterState)
      this.pagination.page = 1
      this.fetchData()
    },
    resetFilters() {
      this.currentFilterState = this.getDefaultState(this.config)
    },
    onChangePage(val) {
      this.pagination.page = val
      this.fetchData()
    },
    onChangePerPage(val) {
      this.pagination.page = 1
      this.pagination.perPage = val
      this.fetchData()
    },
    onChangeSort(sort) {
      this.pagination.page = 1
      this.sort = sort
      this.fetchData()
    },
  }
}
</script>
<style lang="scss" scoped>

.wrap {
  padding: 10px;
  outline: 1px dashed red;
  & > * {
    margin-bottom: 20px;
  }
}
.header {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
