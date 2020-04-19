<!--
 * @Author: your name
 * @Date: 2020-04-19 19:24:10
 * @LastEditTime: 2020-04-19 19:40:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-experiment\src\App.vue
 -->
 <template>
  <span>Button clicked {{ count }} times.</span>
  <button @click="inc">Inc</button>
</template>
<script>
import { ref } from "vue";
export default {
  setup () {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };
    return {
      count,
      inc
    }
  }
};
/**
 * 1. 引入 ref 函数，使得我们可定义一个响应式的变量 count，等同于 this.count
 * 2. inc 方法只是一个简单的函数，注意，要更改方法主体中的count值，我们需要更改其子属性值。
   这是因为使用ref创建的反应变量被包装在一个对象中。
   这对于保持它们的响应式是必要的。
   3. 最后，我们在setup 中 return count 和 inc，因为这些是在渲染模板时传递给模板的值。
   4. 改变的理由： 这是一个可选的方法，他的初衷是为了更好的组织代码和在组件中复用，
 */
// export default {
//   // data: () => ({
//   //   count: 0
//   // }),
//   // methods: {
//   //   inc() {
//   //     this.count++;
//   //   }
//   // }
// };
</script>