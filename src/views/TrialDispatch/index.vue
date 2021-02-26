
<template>
 <el-container>
     <el-header style="line-height: 60px">
         实验派工管理
     </el-header>
    
        <simple-table/>
    
 </el-container>
</template>

<script>

import simpleTable from "../table/simpleTable";
import ComplexTable from "../table/complex-table";

export default {
  name: "outStore",
  components: {
    ComplexTable,
   simpleTable
  },
};
</script>

<style>
</style>