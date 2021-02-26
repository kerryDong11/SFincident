<template>
  <el-container>
    <el-header style="line-height: 60px">新建工单 </el-header>
    <el-main>
      
      <el-form class="demo-form-inline" style="margin-top: 20px">
        <el-row :gutter="40">
          <el-col :xs="12" :sm="12" :lg="12">
            <el-form-item label="委托单号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="12">
            <el-form-item label="检测项目">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="12">
            <el-form-item label="* 试验件派工类型：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :xs="12" :sm="12" :lg="12">
            <el-form-item label="检测依据">
              <el-input v-model="form.name"></el-input>
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