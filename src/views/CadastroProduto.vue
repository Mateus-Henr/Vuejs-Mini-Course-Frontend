<template>
  <div>
    <a href="" class="arrow-back"
      ><img src="../assets/img/arrow-back.svg" alt="arrow-back"
    /></a>
    <form>
      <div class="form-header">
        <div class="title">
          <img src="../assets/img/feather-shopping-bag.svg" alt="bag" />
          <span>Cadastrar novo produto</span>
        </div>
        <div class="step">Etapa {{ step }} de 2</div>
      </div>
      <div v-if="step === 1">
        <div class="group-form-input">
          <input type="text" v-model="product.name" class="input-form" />
          <label :class="{ 'hasValue': product.name }">Product Name</label
          >
        </div>
        <div class="group-form-input">
          <input type="text" v-model="product.description" class="input-form" />
          <label :class="{ 'hasValue': product.description }">Decription</label
          >
        </div>
        <div class="group-form-input">
          <input
            type="text"
            v-model="product.price"
            v-money="'money'"
            class="input-form"
          />
          <label :class="{ 'hasValue': product.price }">Price ($)</label
          >
        </div>
        <div class="group-form-input">
          <select v-model="product.category" class="input-form">
            <option v-for="c in categories" :value="c._id" :key="c.id">{{
              c.name
            }}</option>
          </select>
          <label :class="{ 'hasValue': product.name }">Category</label
          >
        </div>

        <div class="group-form-radio">
          <div>Diponibilidade do produto para o público</div>
          <label for="count-servers1">
            <input
              type="radio"
              id="count_servers1"
              value="Serve 1 pessoas"
              v-model="product.count_server"
            />
            <span class="check"></span>
          </label>

          <label for="count-servers2">
            <input
              type="radio"
              id="count_servers2"
              value="Serve 2 pessoas"
              v-model="product.count_server"
            />
            <span class="check"></span>
          </label>

          <label for="count-servers3">
            <input
              type="radio"
              id="count_servers3"
              value="Família - Até 4 pessoas"
              v-model="product.count_server"
            />
            <span class="check"></span>
          </label>
        </div>

        <div class="group-form-radio">
          <div>Diponibilidade do produto para o público</div>
          <label for="count-servers1">
            <input
              type="radio"
              id="is-available1"
              value="Serve 1 pessoas"
              v-model="product.count_server"
            />
            <span class="check"></span>
          </label>

          <label for="count-servers2">
            <input
              type="radio"
              id="is-available2"
              value="Serve 2 pessoas"
              v-model="product.count_server"
            />
            <span class="check"></span>
          </label>
        </div>

        <div class="float-right">
          <button class="btn btn-laranja btn-large" @click="step = 2">
            Next
          </button>
        </div>
      </div>
      <div v-else>
        <div class="text-laranja">Selecione a foto do produto</div>
        <div class="photo-select">
          <DropImage v-for="img in product.image" :key="img.idx" :image="img" @image="setImage"/>
        </div>
      </div>
      <!--- Not rendered if the condition is not valid --->
    </form>
  </div>
</template>

<script>
import DropImage from "@/components/DropImage";
import { request } from "@/plugins/axios-plugins";

export default {
  components: {
    DropImage,
  },
  data() {
    return {
      step: 1,
      product: {
        name: null,
        description: null,
        price: null,
        category: null,
        count_server: "Serve 1 pessoa",
        is_avaliable: true,
        image: [
          { idx: 0, content: null },
          { idx: 1, content: null },
          { idx: 2, content: null },
        ],
      },
      categories: [],
    };
  },
  methods: {
    setImage(image) {
      this.product.image[image.idx].content = image.content;
    },
  },
  mounted() {
    request
      .get("categories")
      .then((resp) => {
        this.categories = resp.data;
      })
      .catch((err) => {
        console.log("Error");
      })
      .finally(() => {
        console.log("Qualquer coisa");
      });
  },
};
</script>

<style scoped>
.arrow-back {
  position: absolute;
  cursor: pointer;
}

form {
  position: relative;
  width: 100%;
  max-width: 635px;
  margin: 0 auto;
}

.form-header .title {
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-size: 20px;
  margin-bottom: 14px;
  color: var(--preto);
}

.form-header .step {
  font-size: 17px;
  margin-bottom: 20px;
  color: var(--cinza-escuro);
}

.photo-select {
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px;
  margin-bottom: 24px;
}

.photo-select > div {
  height: 186px;
  font-size: 17px;
}

.photo-select > div:first-child {
  grid-column: span 2;
  height: 296px;
}
</style>
