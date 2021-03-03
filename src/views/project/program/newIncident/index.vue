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
      <el-table
        v-loading="listLoading"
        ref="filterTable"
        :data="list"
        border
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column
          :key="col.prop"
          :label="col.label"
          :prop="col.prop"
          v-for="col in tableColumnList"
        >
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="{ row }">
            <el-button type="text" size="small" @click="updateRole(row)">
              下载试验单
            </el-button>
            <el-button type="text" size="small" @click="deleteeRole(row)">
              上传试验单
            </el-button>
            <el-button type="text" size="small" @click="deleteeRole(row)">
              添加工序
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="tool-button" style="margin-top:20px">
        <el-button type="primary" @click="add">新增试验件</el-button>
      
      </div>
      <el-table :data="testList">
        <el-table-column label=""></el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-footer>
  </el-container>
</template>

<script>
import { getUsersList } from "@/api/user";

export default {
  data() {
    return {
      dialogPvVisible: false,
      tableColumnList: [],
      testColumn:[],
      listLoading: true,
      testList:null,
      list: null,
      formDes: {
        data: [
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
  created() {
    this.getList();
  },
  methods: {
    getTableColumnList(list) {
      var obj = list[0];
      for (var v in obj) {
        this.tableColumnList.push({
          prop: v,
          label: v,
        });
      }
      console.log(this.tableColumnList);
    },
    getList() {
      this.listLoading = true;

      getUsersList().then((response) => {
        console.log(response);
        this.listLoading = false;
        this.list = response;
        this.getTableColumnList(this.list);
        console.log(response);
      });
      // this.$axios.get("http://127.0.0.1:8000/up/users").then((response) => {
      //   //let data = response.data;

      // });
      // getUsersList().then((response) => {
      //   console.log(response)
      // this.list = response.data.items;
      // this.getTableColumnList(this.list);
      // this.total = response.data.total;
      // this.listLoading = false;
      // Just to simulate the time of the request
      // setTimeout(() => {
      //   this.listLoading = false;
      // }, 1.5 * 1000);
      //});
    },
  },
};
</script>

<style>
</style>