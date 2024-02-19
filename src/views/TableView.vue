<template>
  <div class="table-page">
    <h1>Table page</h1>
    <STableWithHeader
        :actions="actions"
        :columns="columns"
        :empty-table="emptyTable"
        :get-link-to-item="getLinkToItem"
        :heading="$t(`${service}.pages.studio-courses.title`)"
        :icon="iconContent"
        :list="list"
        :pagination="pagination"
        :sort="sort"
        back-trigger-is-visible
        :resource-name="type"
        :service="service"
        :table-actions="tableActions"
        :tabs="tabConfig"
        :should-store-params-in-url="false"
        class="course-table"
        @changePage="onChangePage"
        @changePerPage="onChangePerPage"
        @changeSort="onChangeSort"
        @changeTab="onChangeTab"
    >

    </STableWithHeader>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {SButton, SInput, STableWithHeader } from '@synergy/lms-ui-kit'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    SButton,
    SInput,
    STableWithHeader
  },
  data() {
    return {
      actions: {
        name: 'course',
        path: `/course/new`,
        fn: () => {},
      },
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

    }
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
