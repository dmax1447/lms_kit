<template>
  <div class="table-page">
    <div class="columns">
      <div class="elements">
        <form>
          <h2>Front-Libs components</h2>
          <fieldset>
            <SelectWithGroups :config="sgConfig"/>
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

import {SelectWithGroups} from "@lms/front-libs";


export default {
  name: 'HomeView',
  components: {
    SelectWithGroups
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
        sgValue: {}
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
