import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CadastroProduto from "../views/CadastroProduto.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/produtos/novo",
    name: "Cadastro de Produtos",
    component: Home,
  },
  {
    path: "/produtos/:id",
    name: "Editar Produto",
    component: CadastroProduto,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
