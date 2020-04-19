/*
 * @Author: seth
 * @Date: 2020-04-19 19:04:35
 * @LastEditTime: 2020-04-19 19:46:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-experiment\src\main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App).mount("#app");

/**
 * 1. new Vue 变化为 createApp 的原因：在旧的 API 中，
 * 全局的配置将会影响到全局的状态,比如说以下例子，
 */
// Affects both instances
// Vue.mixin({ ... })

// const app1 = new Vue({ el: '#app-1' })
// const app2 = new Vue({ el: '#app-2' })
/**
 * 2. 新增了 state 属性
 *   data 必须使用函数返回
 * 
 * 3. methods 同 vue2
 * 
 * 4. Composition API
 * 函数式定义个组件，通过 setup 见App.vue
 */

