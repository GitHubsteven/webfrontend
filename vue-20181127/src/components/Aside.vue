<template>
  <el-container>
    <el-header class="el-header">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Tom</span>
    </el-header>
  </el-container>
</template>

<style scoped>
  .el-header {
    background-color: #ffffff;
    color: #333;
    line-height: 60px;
    text-align: left;
    font-size: 12px
  }
</style>

<script>
  export default {
    name: 'Aside',
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
      return {
        tableData: Array(20).fill(item)
      }
    }
  }
</script>
