<template>
  <el-container>
    <el-header style="line-height: 60px">新增入库单 </el-header>
    <el-main>
      <label>{{ form.label }}</label>
      <el-form class="demo-form-inline main-form" style="margin-top: 20px">
        <el-row :gutter="40">
          <el-col
            v-for="item in form.data"
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
     <el-footer>
      <el-button type="primary" @click="onSubmit">确认入库</el-button>
      <el-button  @click="cancle">取消</el-button>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        lable: "入库基础信息",
        data: [
          {
            name: "入库类型",
            force: true,
            value: "",
            key: "",
          },
          {
            name: "入库日期",
            force: true,
            value: "",
            key: "",
          },
          {
            name: "试验件数量",
            force: true,
            value: "",
            key: "",
          },
          {
            name: "入库接收人",
            force: true,
            value: "",
            key: "",
          },
          {
            name: "委托单编号",
            force: true,
            value: "",
            key: "",
          },
          {
            name: "大纲编号",
            force: true,
            value: "",
            key: "",
          },
          {
            name: "入库位置",
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