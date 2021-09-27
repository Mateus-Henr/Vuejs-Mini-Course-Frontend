<template>
  <div>
    <div class="categories-buttons-box">
      <CategoryBtn
        v-for="(c, index) in categories"
        :id-filtered="idProduct"
        category="c"
        :key="index"
        @filter-by="getCatalogByCategory"
      />
    </div>
    <EmptyList />
  </div>
</template>

<script>
import EmptyList from "@/components/EmptyList";
import CategoryBtn from "@/components/CategoryBtn";
import { request } from "@/plugins/axios-plugin";

export default {
  components: {
    EmptyList,
    CategoryBtn,
  },
  name: "Home",
  data() {
    return {
      idProduct: null,
      categories: [],
    };
  },
  methods: {
    getCatalogByCategory() {},
  },

  mounted() {
    request.get("categories").then((resp) => {
      this.categories = resp.data;
    });
  },
};
</script>

<style scoped>
.categories-buttons-box {
  display: flex;
  justify-content: space-between;
  column-gap: 32px;
}
</style>
