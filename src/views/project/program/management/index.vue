<template>
  <div class="app-container">
    <el-header style="line-height: 60px"> 试验任务管理 </el-header>
    <el-main>
      <div class="filter-container">
        <el-input
          v-model="listQuery.title"
          placeholder="Title"
          style="width: 200px"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-select
          v-model="listQuery.importance"
          placeholder="Imp"
          clearable
          style="width: 90px"
          class="filter-item"
        >
          <el-option
            v-for="item in importanceOptions"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <el-select
          v-model="listQuery.type"
          placeholder="Type"
          clearable
          class="filter-item"
          style="width: 130px"
        >
          <el-option
            v-for="item in calendarTypeOptions"
            :key="item.key"
            :label="item.display_name + '(' + item.key + ')'"
            :value="item.key"
          />
        </el-select>
        <el-select
          v-model="listQuery.sort"
          style="width: 140px"
          class="filter-item"
          @change="handleFilter"
        >
          <el-option
            v-for="item in sortOptions"
            :key="item.key"
            :label="item.label"
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
          Search
        </el-button>
      </div>
      <div class="tool-button">
        <el-button @click="add">新增</el-button>
        <el-button @click="refresh">刷新</el-button>
        <el-button @click="exportExecel">导出</el-button>
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
          <template slot-scope="{ row, $index }">
            <el-button
              v-if="row.haveNum > 0"
              type="text"
              size="small"
              @click="handleUpdate(row)"
            >
              新建工单
            </el-button>
            <el-button
              v-if="row.waitNum > 0"
              type="text"
              size="small"
              @click="handleModifyStatus(row, 'published')"
            >
              确认入库
            </el-button>
            <el-button
              type="text"
              size="small"
              @click="handleModifyStatus(row, 'draft')"
            >
              查看
            </el-button>
            <el-button
              v-if="row.finishNum > 0"
              type="text"
              size="small"
              @click="handleDelete(row, $index)"
            >
              申请入库
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
export default {
  name: "management",
  data() {
    return {
      tableColumnList: [],
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id",
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    gettableColumnList(list) {
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
        this.gettableColumnList(this.list);
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