<template>
  <div class="pop-window" v-if="pop_all">
    <div class="shadow"></div>
    <div class="pop-box">
        <div class="panel line-50 " style="align-items: center">
          <div class="pad-lr16 flex-space-between">
          <span>{{tietle[pop_all]}}</span>
          <div class="close" @click="closePop"></div>
          </div>
        </div>
      <div class="p-16">
       <Invite v-if="pop_all===1"></Invite>
       <InviteCondition v-else-if="pop_all===2"></InviteCondition>
      </div>
    </div>
  </div>
</template>


<script>
//  import axios from '../../store/request/axios'
  import PopMixin from './PopMixin'
  import Apply from '../../components/popx/Apply.vue'
  import Invite from '../../components/popx/Invite.vue'
  import InviteCondition from '../../components/popx/InviteCondition.vue'
  export default {
    components: {Invite, Apply, InviteCondition},
    mixins: [PopMixin]
  }
</script>
<style lang="scss">


</style>
