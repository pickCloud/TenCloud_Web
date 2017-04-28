<template>
  <div class="checkbox">
    <input type="checkbox" :class="[theme]" :id="rndid" :name="name">
    <label :for="rndid">{{label}}</label>
  </div>
</template>

<script>
  export default {
    name: 'Checkbox',
    props: {
      label: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      theme: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        rndid: 'v-' + parseInt(Math.random() * Math.random() * 10000)
      }
    }
  }
</script>
