import { createApp } from "vue";
import "./style.css";
// 自定义字体
import "@/assets/font/font.css";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
