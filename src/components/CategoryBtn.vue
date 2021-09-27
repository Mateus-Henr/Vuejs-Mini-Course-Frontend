<template>
  <button
    :class="['btn', 'w-100', { selected: category._id == idFiltered }]"
    @cllick="filter(category._id)"
    v-text="category.name"
  ></button>
</template>
<script>
export default {
  props: {
    category: { type: Object, required: true }, // Restriction that it will only receive an object
    idFiltered: { type: String }, // When you use camelCase you can call it wtih the "-", "id-filtered".
  },
  methods: {
    filter(id) {
      this.$emit("filter-by", id); // Accessing global objects, specifically $emit
    },
  },
};
</script>
