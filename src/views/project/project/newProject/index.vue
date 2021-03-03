<template>
  <el-container>
    <el-header style="line-height: 60px">新建项目</el-header>
    <el-main>
      <label>{{ form1.label }}</label>
      <el-form class="demo-form-inline main-form" style="margin-top: 20px">
        <el-row :gutter="40">
          <el-col
            v-for="item in form1.data"
            :key="item.name"
            :xs="12"
            :sm="12"
            :lg="8"
          >
            <el-form-item :label="item.name" :required="item.force">
              <el-input v-model="item.value"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
       <label>{{ form2.label }}</label>
      <el-form class="demo-form-inline main-form" style="margin-top: 20px">
        <el-row :gutter="40">
          <el-col
            v-for="item in form2.data"
            :key="item.name"
            :xs="12"
            :sm="12"
            :lg="8"
          >
            <el-form-item :label="item.name" :required="item.force">
              <el-input v-model="item.value"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="tool-button">
        <el-button @click="add">下载检查单</el-button>
        <el-button @click="refresH">上传签字检查单</el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      form1: {
        lable: "项目信息",
        data: [
          {
            name: "项目名称",
            force: true,
            value: "",
            key: "",
          },
          {
            name: "试验主管",
            force: true,
            value: "",
            key: "",
          },
          {
            name: "项目计划完成时间",
            force: true,
            value: "",
            key: "",
          },
        ],
      },
      form2: {
        lable: "客户信息",
        data: [
          {
            name: "委托公司名称",
            force: true,
            value: "",
            key: "",
          },
          {
            name: "行业类型",
            force: true,
            value: "",
            key: "",
          },
          {
            name: "邮编",
            force: true,
            value: "",
            key: "",
          },
          {
            name: "联系人",
            force: true,
            value: "",
            key: "",
          },
           {
            name: "邮编",
            force: true,
            value: "",
            key: "",
          },
          {
            name: "联系方式",
            force: true,
            value: "",
            key: "",
          },
           {
            name: "详细地址",
            force: true,
            value: "",
            key: "",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>