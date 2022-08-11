import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import naive from 'naive-ui'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from "./router/index";
createApp(App).use(router).use(Antd).use(naive).use(ElementPlus).mount('#app')
