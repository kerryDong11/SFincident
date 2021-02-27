<template>
  <el-container>
    <el-header style="line-height: 60px">新建工单 </el-header>
    <el-main>
      
      <el-form class="demo-form-inline" style="margin-top: 20px">
        <el-row :gutter="40">
          <el-col
            v-for="item in formDes.data"
            :key="item.name"
            :xs="12"
            :sm="12"
            :lg="12"
          >
            <el-form-item :label="item.name">
              <el-input v-model="item.value"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      
      </el-form>
        
    </el-main>
    <el-footer>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      formDes:{
        data:[
          {
            name: "委托单号",
            force: true,
            vlaue: "",
          },
           {
            name: "检测项目",
            force: false,
            vlaue: "",
          },
           {
            name: "试验件派工类型",
            force: true,
            vlaue: "",
          },
           {
            name: "检测依据",
            force: true,
            vlaue: "",
          },
        ]
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
};
</script>

<style>
</style>