<template>
  <div class="pop-window" v-if="pop_all">
    <div class="shadow"></div>
    <div class="pop-box" :class="pop_all===4?'width-plus':''">
        <div class="panel line-50 " style="align-items: center">
          <div class="pad-lr16 flex-space-between">
          <span>{{tietle[pop_all]}}</span>
          <div class="close" @click="closePop"></div>
          </div>
        </div>
      <div class="">
       <Invite v-if="pop_all===1"></Invite>
       <InviteCondition v-else-if="pop_all===2"></InviteCondition>
       <Permission v-else-if="pop_all===3 || pop_all===5 || pop_all===6"></Permission>
        <PermissionLook v-else-if="pop_all===7"></PermissionLook>
        <ApplyTip v-else-if="pop_all===8"></ApplyTip>
       <PermissionChange v-else-if="pop_all===4"></PermissionChange>
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
  import Permission from '../../components/popx/Permission.vue'
  import PermissionChange from '../../components/popx/PermissionChange.vue'
  import PermissionLook from '../../components/popx/PermissionLook.vue'
  import ApplyTip from '../../components/popx/ApplyTip.vue'
  export default {
    components: {Invite, Apply, InviteCondition, Permission, PermissionChange, PermissionLook, ApplyTip},
    mixins: [PopMixin]
  }
</script>
<style lang="scss">


</style>
