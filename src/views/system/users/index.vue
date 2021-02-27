<template>
  <div class="app-container">
    <el-header class="app-header">用户管理</el-header>
    <el-main>
      <div class="filter-container">
        <el-input
          v-model="listQuery.projectId"
          placeholder="用户名"
          style="width: 200px"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-input
          v-model="listQuery.orderNumber"
          placeholder="工号"
          style="width: 200px"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-select
          v-model="listQuery.projectStatus"
          placeholder="部门"
          clearable
          class="filter-item"
          style="width: 130px"
        >
          <el-option
            v-for="item in statusTypeOptions"
            :key="item.key"
            :label="item.display_name"
            :value="item.key"
          />
        </el-select>
        <el-select
          v-model="listQuery.projectStatus"
          placeholder="角色"
          clearable
          class="filter-item"
          style="width: 130px"
        >
          <el-option
            v-for="item in statusTypeOptions"
            :key="item.key"
            :label="item.display_name"
            :value="item.key"
          />
        </el-select>
        <el-button
          v-waves
          class="filter-item"
          type="primary"
          icon="el-icon-search"
          @click="handleFilter"
        >
          搜索
        </el-button>
      </div>
      <div class="tool-button">
        <el-button type="primary" @click="add" icon="el-icon-plus"></el-button>
        <el-button
          type="primary"
          @click="refresh"
          icon="el-icon-refresh"
        ></el-button>
        <el-button
          type="primary"
          @click="exportExecel"
          icon="el-icon-download"
        ></el-button>
      </div>
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
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="{ row }">
            <el-button
              type="text"
              size="small"
              @click="updateRole(row)"
            >
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script>
//import myTable from "../table/simpleTable";
//import ComplexTable from "@/views/table/complex-table";
import { fetchList } from "@/api/project";
const statusTypeOptions = [
  { display_name: "未创建任务", key: "0" },
  { display_name: "已创建任务", key: "1" },
  { display_name: "任务中", key: "2" },
  { display_name: "完成", key: "3" },
];

export default {
  name: "users",
  data() {
    return {
      dialogPvVisible: false,
      tableColumnList: [],
      list: null,
      pvData: {},
      statusTypeOptions,
      listLoading: true,
      listQuery: {
        projectId: undefined,
        orderNumber: undefined,
        projectStatus: undefined,
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    updateRole(row) {
      //查看任务具体内容
     this.$router.push({ path: "/updateUser" });
    },
    add() {
      this.$router.push({ path: "/addUser" });
    },
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
      fetchList().then((response) => {
        this.list = response.data.items;
        this.getTableColumnList(this.list);
        this.total = response.data.total;
        this.listLoading = false;
        // Just to simulate the time of the request
        // setTimeout(() => {
        //   this.listLoading = false;
        // }, 1.5 * 1000);
      });
    },
  },
};
</script>

<style>
.tool-button {
  float: right;
  margin-bottom: 0.5rem;
}
</style>