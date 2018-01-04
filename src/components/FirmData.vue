<template>
    <div>
      <div class="page-pad page-machine-detail">
        <m-row :gutter="8">
          <m-col class="xs-12">
            <panel class="m-b16">
              <div class="panel-title flex-space-between" slot="title" style="padding: 0px 16px">
                <div class="p-lr-16">
                  <input type="text" class="inp-editor input-height" style="line-height:30px;text-overflow: ellipsis;" :disabled="!isEditor" :class="{'editor':isEditor}" v-model="form.name">
                </div>
                  <div v-if="isShow('modify_company_info')">
                  <m-btn  @click.native="changeData" v-if="!isEditor"><i class="iconfont icon-xiugai"></i>修改</m-btn>
                  <div v-else>
                  <m-btn  @click.native="saveData">保存</m-btn>
                  <m-btn  @click.native="cancel">取消</m-btn>
                  </div>
                </div>
              </div>
              <div class="flex-flex" style="flex-wrap: nowrap">
                <div class=""></div>
              <div class="xs-4">
                <table class="list-table">
                  <col width="40%">
                  <col width="60%">
                  <tbody>
                  <tr >
                    <td class="text-center" style="padding:0 16px">联系人</td>
                    <td style="padding:0  16px "><input type="text" class="inp-editor input-height" :disabled="!isEditor" :class="{'editor':isEditor}" v-model="form.contact"></td>
                  </tr>
                  <tr>
                    <td class="text-center" style="padding: 0 16px ">联系方式</td>
                    <td style="padding:0 16px"><input type="text" class="inp-editor input-height" :disabled="!isEditor" :class="{'editor':isEditor}" v-model="form.mobile"></td>
                  </tr>
                  <tr>
                    <td class="text-center">添加时间</td>
                    <td>{{form.create_time}}</td>
                  </tr>
                  <tr>
                    <td class="text-center">认证时间</td>
                    <td>{{form.update_time}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="xs-8 flex-table">
                  <div  class="tr">
                    <div class="text-center" style="padding:0 16px">认证资料</div>
                    <div style="padding:0  16px "><div class="input_image" :style="{width:inputW+'px',height:inputH+'px'}"> <input type="file" alt="Submit" accept="image/*" /></div> </div>
                    <div style="padding:0  16px "><div class="input_image" :style="{width:inputW+'px',height:inputH+'px'}"> <input type="file" alt="Submit" accept="image/*" /></div> </div>
                    <div style="padding:0  16px "><div class="input_image" :style="{width:inputW+'px',height:inputH+'px'}"> <input type="file" alt="Submit" accept="image/*" /></div> </div>
                  </div>
              </div>
              </div>
            </panel>
          </m-col>
        </m-row>

      <m-row :gutter="8">
      <m-col class="col xs-12 lg-8">
        <!--日志-->
        <panel class="m-b16">
          <div class="panel-title flex-space-between btn-group" slot="title">
            <div>员工列表</div>
            <div>
            <m-btn v-if="!isAdmin" class="btn primary_txt" @click.native="leaveCompany">离开企业</m-btn>
            <m-btn class="primary_txt" v-if="isShow('invite_new_employee')"  @click.native="invite">邀请员工</m-btn>
            <m-btn class="primary_txt" v-if="isShow('set_join_conditions')" @click.native="inviteCondition"  >设置</m-btn>
            <m-btn class="primary_txt" v-if="isShow('set_admin')" @click.native="permissionChange">更换管理员</m-btn>
            </div>
          </div>
          <div class="panel-body p-b16">
            <table class="table hover striped theme-dft pad-table ">
              <col width="10%">
              <col width="10%">
              <col width="15%">
              <col width="15%">
              <col width="15%">
              <col width="10%">
              <col width="15%">
              <thead>
              <tr>
                <th>姓名</th>
                <th>手机号码</th>
                <th>身份证号</th>
                <th>申请时间</th>
                <th>加入时间</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody >
              <tr v-for="item in employees">
                <td><i v-if="item.is_admin" class="iconfont icon-guanliyuan yellow_txt" style="padding-right: 5px"></i>{{item.name}}</td>
                <td>{{item.mobile}}</td>
                <td>{{item.id_card}}</td>
                <td>{{item.create_time}}</td>
                <td>{{item.update_time}}</td>
                <td :class="item.status===0?'pass_tip':''">{{item.status===1 || item.status===2?'已通过审核':item.status===0?'待审核':'审核不通过'}}</td>
                <td ><div ><m-btn v-if="isShow('audit_employee')" @click.native="company_reject(item.id)">拒绝</m-btn><m-btn v-if="isShow('audit_employee')" @click.native="company_accept(item.id)">允许</m-btn><m-btn v-if="isShow('set_employee_permission')" @click.native="changeUserTemp(item.uid,isAdmin)">权限</m-btn><m-btn v-if="isShow('dismiss_employee')"  @click.native="company_dismission(item.id)">解除</m-btn></div></td>
              </tr>
              </tbody>
            </table>
          </div>
        </panel>
      </m-col>
      <m-col class="col xs-12 lg-4">
        <panel class="p-b16 m-b16">
          <div class="panel-title flex-space-between" slot="title">
              <div>权限模板</div>
              <div>
                <m-btn v-if="isShow('add_permission_template')" @click.native="addTemp">新增权限模板</m-btn>
              </div>
          </div>
          <div class="panel-body">
            <m-table class="hover striped block-table pad-table">
              <col width="30%">
              <col width="30%">
              <col width="40%">
              <thead>
              <tr>
                <th>模板名称</th>
                <th>备注</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in module">
                <td>{{item.name}}</td>
                <td>{{item[0]}}</td>
                <td>
                  <m-btn v-if="isShow('modify_permission_template')" @click.native="changeTemp(item.id)">修改</m-btn>
                  <!--<m-btn @click.native="moduleMame(item)">重命名</m-btn>-->
                  <m-btn v-if="isShow('delete_permission_template')" @click.native="deleteTemp(item)">删除</m-btn></td>
              </tr>
              </tbody>
            </m-table>
          </div>
        </panel>
      </m-col>
      </m-row>
      </div>
    </div>
</template>

<script>
  import FirmDataMixin from './FirmDataMixin.js'
  export default {
    mixins: [FirmDataMixin]
  }

</script>

<style lang="scss">
  .input-editor {
    display: block;
    width: calc(100% + 32px);
    height: 100%;
    border: none;
    background: none;
    color: #7f8da4;
    font-size: 0.7rem;
    margin: 0 -16px;
    padding: 0 16px;
  }
  .input-height {
    ine-height: 50px;
    height: 50px;
  }
  .input_image{
    position: relative;
    height: 200px;
    width: 300px;
    border-radius: 5px;
    background-color: #1D202A;
    overflow: hidden;
    input {
      font-size: 100px;
      position: absolute;
      height: 100%;
      opacity:0;
      width: 100%;
      background-color: transparent;
    }
  }
  .pass_tip {
    color: #48bbc0;
  }
</style>
