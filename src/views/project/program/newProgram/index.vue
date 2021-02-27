<template>
  <el-container>
    <el-header style="line-height: 60px">新建试验任务 </el-header>
    <el-main>
      <label>{{form1Des.label}}</label>
      <el-form class="demo-form-inline main-form" style="margin-top: 20px">
        <el-row :gutter="40">
          <el-col
            v-for="item in form1Des.data"
            :key="item.name"
            :xs="12"
            :sm="12"
            :lg="8"
          >
            <el-form-item :label="item.name">
              <el-input v-model="item.value"></el-input>
            </el-form-item>
          </el-col>
          <!-- <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="入库时间">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="试验件数量">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="入库接收人">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="委托单编号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="8">
            <el-form-item label="项目编号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col> -->
        </el-row>
      </el-form>
      <label>{{form2Des.label}}</label>
      <el-form class="demo-form-inline main-form" style="margin-top: 20px">
        <el-row :gutter="40">
          <el-col
            v-for="item in form2Des.data"
            :key="item.name"
            :xs="12"
            :sm="12"
            :lg="8"
          >
            <el-form-item :label="item.name">
              <el-input v-model="item.value"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <label>{{form3Des.label}}</label>
      <el-form class="demo-form-inline main-form" style="margin-top: 20px">
        <el-row :gutter="40">
          <el-col
            v-for="item in form3Des.data"
            :key="item.value"
            :xs="12"
            :sm="12"
            :lg="8"
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
      <el-button @click="cancle">取消</el-button>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      form1Des: {
        label: "合同信息",
        data: [
          {
            name: "合同编码",
            force: true,
            vlaue: "",
          },
          {
            name: "任务书编码",
            force: true,
            vlaue: "",
          },
          {
            name: "签约时间",
            force: true,
            vlaue: "",
          },
          {
            name: "备注信息",
            force: true,
            vlaue: "",
          },
        ],
      },
      form2Des: {
        label: "样品信息",
        data: [
          {
            name: "样品名称",
            force: true,
            vlaue: "",
          },
          {
            name: "样品材料",
            force: true,
            vlaue: "",
          },
          {
            name: "样品数量",
            force: true,
            vlaue: "",
          },
          {
            name: "检测后样品处理",
            force: true,
            vlaue: "",
          },
        
          {
            name: "样品状态",
            force: true,
            vlaue: "",
          },
          {
            name: "样品包装",
            force: true,
            vlaue: "",
          },
        ],
      },
      form3Des: {
        label: "检测要求",
        data: [
          {
            name: "检测项目名称",
            force: true,
            vlaue: "",
          },
          {
            name: "试验任务书名称",
            force: true,
            vlaue: "",
          },
          {
            name: "试验任务书编号",
            force: true,
            vlaue: "",
          },
          {
            name: "试验任务课题组/合同号",
            force: true,
            vlaue: "",
          },
          {
            name: "检测方法",
            force: true,
            vlaue: "",
          },
          {
            name: "检测参数",
            force: true,
            vlaue: "",
          },
          {
            name: "是否需要检测前加工",
            force: true,
            vlaue: "",
          },
          {
            name: "是否需要试验大纲",
            force: true,
            vlaue: "",
          },
          {
            name: "是否需要测量不确定度",
            force: true,
            vlaue: "",
          },
          {
            name: "项目开始时间",
            force: true,
            vlaue: "",
          },
          {
            name: "项目结束时间",
            force: true,
            vlaue: "",
          },
        ],
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
  methods: {
    cancle(){
       this.$confirm('此操作将取消新建任务?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$router.push({path:"/managepro"})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
    },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>