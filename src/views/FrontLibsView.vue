<template>
  <div class="table-page">
    <div class="columns">
      <div class="elements">
        <form>
          <h2>Front-Libs components</h2>
          <fieldset>
            <SelectWithGroups class="mb20" :config="sgConfig"/>
            <LazyUploader class="mb20" v-model="form.lazyUploader" multiple name="lazyUploader" label="LazyUploader"/>
          </fieldset>


        </form>

      </div>
      <div class="column">
        <pre class="data">{{form}}</pre>
      </div>
    </div>



  </div>
</template>
<script>

import {SelectWithGroups, LazyUploader} from "@lms/front-libs";
const mockFiles = [
  {
    "id": "77a9320e-d065-4ce3-a1a5-13224ce95bdd",
    "created_at": "2024-02-28T14:30:04.792+03:00",
    "name": "sample_1.2mb.pdf",
    "link": "https://develop-synergysoft-lms-env2.c4.syndev.ru/assignments/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWsyT1dReVpUazBOQzB4TkdSbExUUTFaR1l0T1RWa1pTMHhPRE13TldNMk5qQmpOR01HT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--052b1c5f6313cac0a26c2176e64cd4dd91325164/sample_1.2mb.pdf",
    "size": 1253607
  },
  {
    "id": "ba85272a-b84f-494d-8787-15aa3ee08398",
    "created_at": "2024-02-28T14:28:25.394+03:00",
    "name": "cat2.jpg",
    "link": "https://develop-synergysoft-lms-env2.c4.syndev.ru/assignments/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxpWlRnNU16ZGlOUzB3TXpoaUxUUmpNVEV0T1RNNFlTMWpNamRrTkRBMlpEWTNZamtHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--1e2d76fa05b10d0763452819de33596b535f7308/cat2.jpg",
    "size": 48504
  },
  {
    "id": "680ddf8d-10d0-4385-a622-a615d2b6a7d2",
    "created_at": "2024-02-28T14:30:04.804+03:00",
    "name": "data_copy.txt",
    "link": "https://develop-synergysoft-lms-env2.c4.syndev.ru/assignments/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxtWVdFeE5HUTJOQzB5WlRjNUxUUTJOVGN0T0RVMFlTMHlZVE0zWmpKbU9HSmxaakVHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--f52631936d729ec11ac8074d6244c2756e29a0b9/data_copy.txt",
    "size": 13847
  }
]

export default {
  name: 'HomeView',
  components: {
    SelectWithGroups,
    LazyUploader
  },
  data() {
    return {
      sgConfig: {
        rootEntity: {
          label: 'Специальность',
          i18nKey: `courses.speciality`,
          nameKey: 'full_name',
          countKey: 'amount_specializations',
          fetchItems: (query) => {
            const params = {
              q: {
                full_name_i_cont: query,
              },
            }
            return this.fetchSpecialities(query ? params : {})
          },
        },
        nestedEntity: {
          label: 'Специализация',
          i18nKey: `courses.specialization`,
          nameKey: 'full_name',
          notSpecifiedLabel: 'Без специализации',
          fetchItems: ({ rootEntityId, query }) => {
            const params = {
              q: {
                speciality_id_eq: rootEntityId,
              },
            }
            if (query) {
              params.q.full_name_i_cont = query
            }
            return this.fetchSpecializations(params)
          },
        },
      },
      form: {
        input: '',
        sgValue: {},
        lazyUploader: mockFiles,
      }
    }
  },
  methods: {
    onCheckboxFnChange(e) {
      this.form.checkboxFn = e.target.checked
    },
    onCheckboxToggleFnChange(e) {
      this.form.checkboxToggleFn = e.target.checked
    },
    fetchDictionary({ name, params }) {
      const headers = {
        'X-Auth-Token': 'secret_token',
      }
      return this.$axios
          .get(`https://develop-synergysoft-lms-catalogs.c4.syndev.ru/${name}`, { params, headers })
          .then((v) => {
            return v.data.data
          })
          .catch((e) => {
            console.warn(e.message)
          })
    },
    fetchSpecialities(payload) {
      const params = {
        per_page: 10000,
        ...payload,
      }

      return this.fetchDictionary({ name: 'custom_specialities', params })
    },
    fetchSpecializations(payload) {
      const params = {
        per_page: 10000,
        ...payload,
      }

      return this.fetchDictionary({ name: 'custom_specializations', params })
    },

  },
  created() {

  }
}
</script>
<style lang="scss" scoped>
.columns {
  display: flex;
  width: 100%;
  gap: 30px;
}
fieldset {
  padding: 10px;
  border: 1px dashed gray;
  margin-bottom: 36px;
}

.elements {
  width: 600px;
}
.column {
  width: 50%;
  padding: 12px;
}
.pb20 {
  padding-bottom: 20px;
}
.mb20 {
  margin-bottom: 20px;
}
.data {
  max-width: 300px;
  font-size: 14px;
}
</style>
