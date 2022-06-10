<!--
 * @Description:
 * @version:
 * @Author: xiaowen
 * @Date: 2022-06-09 15:40:49
-->
<template>
    <div class="test-container page-container">
      <div class="page-title">Unit home</div>
      <p>count is: {{ count }}</p>
      <button @click="increment">increment</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const count = ref<number>(0);
    const increment = () => {
      count.value += 1;
    };
    return { count, increment };
  },
});
</script>
