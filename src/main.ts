import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
// 自定义字体
import "@/assets/font/font.css";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).use(ElementPlus).mount("#app");
