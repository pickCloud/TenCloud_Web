<template>
  <div class="page-machines">
    <div class="page-top">
      <m-btn :sizew="70" class="white_bg">新增</m-btn>
      <m-btn :sizew="70" class="white_bg">删除</m-btn>
    </div>
    <m-table class="bordered hover striped">
      <col width="55px">
      <col width="15%">
      <col width="15%">
      <col width="15%">
      <col width="15%">
      <col width="15%">
      <thead>
        <tr>
          <th><m-checkbox class="list-check" :data="{label:'全选'}" hideLabel></m-checkbox></th>
          <th>名称</th>
          <th>服务商</th>
          <th>地址</th>
          <th>IP</th>
          <th>状态</th>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><m-checkbox class="list-check" :data="{label:'1'}" hideLabel></m-checkbox></td>
          <td>机器1</td>
          <td>阿里云</td>
          <td>华南</td>
          <td>1.1.1.1</td>
          <td>正常</td>
          <td>
            <m-btn>详情</m-btn>
            <m-btn>删除</m-btn>
          </td>
        </tr>
        <tr>
          <td><m-checkbox class="list-check" :data="{label:'1'}" hideLabel></m-checkbox></td>
          <td>机器1</td>
          <td>阿里云</td>
          <td>华南</td>
          <td>1.1.1.1</td>
          <td>正常</td>
          <td>
            <m-btn>详情</m-btn>
            <m-btn>删除</m-btn>
          </td>
        </tr>
        <tr>
          <td><m-checkbox class="list-check" :data="{label:'1'}" hideLabel></m-checkbox></td>
          <td>机器1</td>
          <td>阿里云</td>
          <td>华南</td>
          <td>1.1.1.1</td>
          <td>正常</td>
          <td>
            <m-btn>详情</m-btn>
            <m-btn>删除</m-btn>
          </td>
        </tr>
        <tr>
          <td><m-checkbox class="list-check" :data="{label:'1'}" hideLabel></m-checkbox></td>
          <td>机器1</td>
          <td>阿里云</td>
          <td>华南</td>
          <td>1.1.1.1</td>
          <td>正常</td>
          <td>
            <m-btn>详情</m-btn>
            <m-btn>删除</m-btn>
          </td>
        </tr>
      </tbody>
    </m-table>
  </div>
</template>
