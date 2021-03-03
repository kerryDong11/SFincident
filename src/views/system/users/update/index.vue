<template>
  <el-container>
    <el-header style="line-height: 60px">编辑用户 </el-header>
    <el-main>
      <label>用户详细信息</label>
      <el-form label-width="80px" class="main-form">
        <el-row :gutter="40">
          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="用户名">
              <el-input v-model="form.accout"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="工号">
              <el-input v-model="form.accout"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="部门">
              <el-select placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="姓名">
              <el-input v-model="form.accout"></el-input>
            </el-form-item>
          </el-col>

          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="电话">
              <el-input v-model="form.accout"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="角色">
              <el-select placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="邮箱">
              <el-input v-model="form.accout"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <label>用户权限</label>
      <el-checkbox-group
        class="check-group"
        v-model="checkedRoles"
        @change="handleCheckedCitiesChange"
      >
        <el-checkbox
          v-for="role in roles"
          :label="role.name"
          :key="role.key"
          border
          >{{ role.name }}</el-checkbox
        >
      </el-checkbox-group>
    </el-main>
    <el-footer>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="onCancle">取消</el-button>
    </el-footer>
  </el-container>
</template>

<script>
const roles = [
  { name: "仓库", key: "warehouse" },
  { name: "仓库", key: "warehouse" },
  { name: "仓库", key: "warehouse" },
  { name: "仓库", key: "warehouse" },
  { name: "仓库", key: "warehouse" },
  { name: "仓库", key: "warehouse" },
];
export default {
  data() {
    return {
      roles,
      checkedRoles: [],
      form: {
        accout: "",
      },
      formDes: {
        lable: "用户基础信息",
        data: [
          {
            name: "用户名",
            key: "account",
            force: true,
            vlaue: "",
          },
          {
            name: "工号",
            force: true,
            key: "id",
            vlaue: "",
          },
          {
            name: "角色",
            force: true,
            key: "role",
            vlaue: "",
          },
          {
            name: "姓名",
            key: "name",
            force: true,
            vlaue: "",
          },
          {
            name: "电话",
            force: true,

            vlaue: "",
          },

          {
            name: "邮箱",
            force: true,
            vlaue: "",
          },
        ],
      },
    };
  },
  methods: {
    onCancle() {
      this.$confirm("此操作将取消新建账号?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$router.push({ path: "/users" });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
          });
        });
    },
  },
};
</script>

<style>
.check-group {
  margin-top: 20px;
}
</style> 