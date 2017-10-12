<template>
  <div class="page-pad page-build">
    <panel class="m-b16">
      <div class="panel-title" slot="title">
        项目构建
        <small>(代码经过构建，可生成能适合部署上线的版本，版本文件以镜像的形式存在。)</small>
      </div>
      <div class="p-16">
        <ul class="clearfix build-step">
          <li>1.编写Dockerfile文件</li>
          <li>2.输入版本号</li>
          <li>3.选择代码分支</li>
          <li>4.开始构建</li>
        </ul>
        <ul class="build-intro clearfix" :class="{'open':isOpen}">
          <li>
            <div class="__txt">镜像：由多层文件系统联合组成，除了提供运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数。</div>
            <div class="__icon"></div>
          </li>
          <li>
            <div class="__txt">镜像的构建就是定制每一层的配置、文件。我们把每一层的修改、安装、构建、操作的命令写入Dockerfile脚本文件，方便重复操作、透明化构建过程。</div>
            <div class="__icon"></div>
          </li>
          <li>
            <div class="__txt">Dockerfile文件可存于代码仓库的项目文件夹根目录</div>
            <div class="__icon"></div>
          </li>
          <li>
            <div class="__txt">Dockerfile语法规则参考：<a href="https://yeasy.gitbooks.io/docker_practice/content/image/dockerfile/" target="_blank" class="primary_txt">https://yeasy.gitbooks.io/docker_practice/content/image/dockerfile/</a></div>
            <div class="__icon"></div>
          </li>
          <li>
            <div class="__txt">我们的私有镜像：<a href="https://hub.10.com" target="_blank" class="primary_txt">https://hub.10.com</a></div>
            <div class="__icon"></div>
          </li>
          <li>
            <div class="__txt">公有镜像参考地址：<a href="https://hub.docker.com" target="_blank" class="primary_txt m-r8">https://hub.docker.com</a> <a href="https://dashboard.daocloud.io/packages/explore" target="_blank" class="primary_txt">https://dashboard.daocloud.io/packages/explore</a></div>
            <div class="__icon"></div>
          </li>
          <li>
            <div class="__txt">以上，仍然不知道Dockerfile如何写的，可以联系我们的工程师，@洪炯腾 @洪国安</div>
            <div class="__icon"></div>
          </li>
          <li class="build-intro__open-btn" @click="openIntro"><i class="iconfont icon-menudown"></i></li>
        </ul>
        <div class="build-form">
          <div class="build-form__select-ver clearfix m-b16">
            <div class="left __ver"><div class="title">版本号</div></div>
            <div class="left __inp"><dlist v-model="version" :items="verdata" okey="version"></dlist></div>
          </div>
          <m-row class="branch m-b16">
            <m-col class="xs-12"><div class="title">选择分支</div></m-col>
            <m-col class="xs-12">
              <div class="title">
                <m-radio v-model="branch" :data="{label:item.branch_name}" v-for="(item, key) in branchs" :key="key"></m-radio>
              </div>
            </m-col>
          </m-row>
          <div class="save-box text-center" v-if="!isDoing">
            <m-btn class="primary_bg grey-dark_txt" @click.native="startBuild">开始构建</m-btn>
          </div>
          <div class="text-center" v-else>
            <img class="vam" src="../assets/spin.gif"></img> <span class="vam">构建中请耐心等待...</span>
          </div>
        </div>
      </div>
    </panel>
    <panel title="构建过程" class="build-note">
      <div class="p-16" style="overflow-y: auto;max-height: 300px;" id="scroll">
        <p v-for="item in notes">{{item}}</p>
      </div>
    </panel>
  </div>
</template>

<script>
  import BuildMixin from './BuildMixin.js'
  export default {
    mixins: [BuildMixin]
  }
</script>

<style>
  .build-note p {
    margin-bottom: 8px;
  }
</style>
