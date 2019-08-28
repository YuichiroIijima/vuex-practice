<template>
  <div>
    <p class="error">{{error}}</p>
    <textarea v-model="impression"></textarea>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'textareaComp',
  data () {
    return {
      error: "入力は必須です。"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
