<template>
  <div class="cluster-details">
    <div class="crumbs">
      <span class="crumbs-item">服务器</span>
      <router-link class="crumbs-item" :to="{name:'Cluster'}">集群</router-link>
      <span class="crumbs-item qingse-text">{{ status.name }}</span>
    </div>
    <div class="v-content">
      <div class="head">
        <div class="avatar">
          <img src="../assets/cluster-avatar.png">
        </div>
        <div class="article">
          <div class="alter-button">
            <button class="comb-btn waves-effect lvse" @click="alter" v-bind:class="{ hide:toAlter }">修改</button>
            <button class="comb-btn waves-effect lvse" @click="submitAlter" v-bind:class="{ hide:altering }">确认</button>
            <button class="comb-btn waves-effect lvse" @click="cancelAlter" v-bind:class="{ hide:altering }">取消</button>
          </div>
    			<h3 class="qingse-text editable">{{ status.name }}</h3>
    			<div class="status"><span>状态：共 {{ status.used + status.free }} GB 内存</span></div>
    			<div class="status">
    				<span class="qingse-text">█</span>
    				<span>已使用 </span>
    				<span class="qingse-text">{{ status.used }} GB</span>
    			</div>
    			<div class="status">
    				<span class="zise-text">█</span>
    				<span>空闲</span>
    				<span class="zise-text">{{ status.free }} GB</span>
    			</div>
    			<br><br>
    			<p>更新时间：20170807</p>
    			<p class="editable">集群1是一个很牛逼的集群，为什么这么牛逼，我不也不知道，直觉！集群1是一个很牛逼的集群，为什么这么牛逼，我不也不知道，直觉！集群1是一个很牛逼的集群，为什么这么牛逼，我不也不知道，直觉！
  牛逼，我不也不知道，直觉！</p>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>

</script>

<style scpoed lang="scss">
  @import "../scss/machine-details";
</style>
