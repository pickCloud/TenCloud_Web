<template>
  <div class="page-pad page-filehubin">
    <panel class="file-list-box" title="文件列表">
      <div class="path-box clearfix">
      <span class="path-span">
        <span v-if="pid === 0">全部文件</span>
        <ul class="file-mbx" v-else>
          <li><router-link :to="{name:'FileHubIn', params: {id: 0}}">全部文件</router-link></li>
          <li v-for="(item, key) in file_dir">
            <span>/</span>
            <router-link :to="{name:'FileHubIn', params: {id: item[0]}}" v-if="key<(file_dir.length - 1)">{{item[1]}}</router-link>
            <span v-else>{{item[1]}}</span>
          </li>
        </ul>
      </span>
        <div class="btn-group right">
          <div class="formbylabel file theme-dft">
            <input type="file" id="a5wpj6gl9zab" name="file" multiple accept="*/*" @change="fileChange">
            <label for="a5wpj6gl9zab" class="file-label">上传文件</label>
          </div>
          <m-btn class="primary_bg no-radius grey-dark_txt m-r8" @click.native="createNew">新建文件夹</m-btn>
          <m-btn class="primary_bg no-radius grey-dark_txt" @click.native="downFile(-1)">下载</m-btn>
          <m-btn class="pink_bg no-radius grey-dark_txt" @click.native="delFile(-1)">删除</m-btn>
        </div>
      </div>
      <div class="p-lr-16 file-list-body">
        <m-table class="hover striped machines-table">
          <col width="55px">
          <col width="12%">
          <col width="10%">
          <col width="25%">
          <col width="12%">
          <thead>
          <tr>
            <th><m-checkbox class="list-check" :data="{label: '全选'}" v-model="isSelectAll" hideLabel></m-checkbox></th>
            <th>名称</th>
            <th>尺寸</th>
            <th>更新时间</th>
            <th>所有者</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in listts">
            <td><m-checkbox class="list-check" v-model="selects" :data="{label:item.id + ''}" hide-label></m-checkbox></td>
            <td>
              <span v-if="item.type === 0">{{item.filename}}</span>
              <router-link :to="{name: 'FileHubIn', params: {id: item.id, filename: item.filename}}" v-else>{{item.filename}}</router-link>
            </td>
            <td>{{item.size}}</td>
            <td>{{item.update_time}}</td>
            <td>{{item.owner}}</td>
            <td>
              <m-btn class="primary_txt" v-if="item.type === 0" @click.native="preview(item)">预览</m-btn>
              <m-btn class="primary_txt" :data-text="item.filename" :data-params="item.id" v-clipboard="clipboard" v-if="item.type === 0">复制URL</m-btn>
              <m-btn class="primary_txt" @click.native="downFile(item.id)" v-if="item.type === 0">下载</m-btn>
              <m-btn class="pink_txt" @click.native="delFile(item.id)">删除</m-btn>
            </td>
          </tr>
          </tbody>
        </m-table>
      </div>
      <pages :allpage="total_page" :shownum="page_number" :nowpage="now_page" :sizeh="40" :sizew="40" @change="numChange"></pages>
    </panel>
  </div>
</template>

<script>
  import HubInMixin from './FileHubInMixins'
  export default {
    mixins: [HubInMixin]
  }
</script>

<style lang="scss">
  .page-filehubin {
    height: 100%;
    .file {
      display: inline-block;
      vertical-align: middle;
    }
    .file-label {
      display: inline-block;
      background-color: #48bbc0 !important;
      border: none !important;
      height: 32px;
      line-height: 32px;
      color: #282828;
      padding: 0 16px !important;
      &:hover {
        color: #fff !important;
      }
    }
  }
  .file-list-box {
    position: relative;
    height: 100%;
  }
  .file-list-body {
    position: relative;
    width: 100%;
    height: calc(100% - 150px);
    overflow-y: auto;
  }
  .path-box {
    height: 60px;
    line-height: 60px;
    padding: 0 16px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .file-mbx {
    display: inline-block;
    li {
      display: inline-block;
    }
    a {
      color: #4dd1de;
      transition: all 0.2s;
      &:hover {
        color: #fff;
      }
    }
  }
</style>
