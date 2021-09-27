<template>
  <div class="empty-list">
    <img src="../assets/img/leaves.svg" alt="leaves" />
    <div class="text-laranja text-center">Ops!<br />No products</div>
    <div class="padding-box">
      Register your product and start selling it right now!
    </div>

    <router-link :to="{ name: 'Cadastro de Produtos' }">
      <button
        class="btn btn-laranja w-100"
        v-text="'Cadastrar Produto'"
      ></button>
    </router-link>
  </div>
</template>

<style scoped>
.empty-list {
  background-color: transparent;
  position: relative;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  max-width: 336px;
  width: 100%;
}

.padding-box {
  padding: 0 36px;
}
</style>
