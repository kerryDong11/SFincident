
<template>
 <el-container>
     <el-header style="line-height: 60px">
         委托商管理
     </el-header>
    
        <complex-table/>
    
 </el-container>
</template>

<script>

import myTable from "../table/simpleTable";
import ComplexTable from "../table/complex-table";

export default {
  name: "outStore",
  components: {
    ComplexTable
   
  },
};
</script>

<style>
</style>