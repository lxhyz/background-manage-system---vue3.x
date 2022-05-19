<template>
  <el-card class="box-card">
    <el-row :gutter="20">
      <el-col :span="7" class="header">
        <el-input :placeholder="$t('table.placeholder')" v-model="queryForm.query"></el-input>
      </el-col>
      <el-button type="primary" :icon="Search" @click="search">Search</el-button>
      <el-button type="primary" >添加用户</el-button>
    </el-row>
    <el-table :data="tableData" border stripe style="width: 100%" >
      <el-table-column :prop="item.prop" :label="$t(`table.${item.label}`)" v-for="(item,index) in options" :key="index" :width="item.width" align="center">
        <template v-slot="{row}"  v-if="item.prop === 'mg_state'">
         <el-switch v-model="row.mg_state" @click="changeState(row)"/>
        </template>
        <template  v-slot="{row}" v-else-if="item.prop === 'create_time'" >
          {{$filters.filterTime(row.create_time)}}
        </template>
        <template #default v-else-if="item.prop === 'action'">
          <el-button type="primary" plain>编辑</el-button>
          <el-button type="success" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="queryForm.pagenum"
      :page-sizes="[1,2,5,10]"
      :page-size="queryForm.pagesize"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      class="pagination"
    />
  </el-card>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import {Search} from "@element-plus/icons-vue"
import {getUser,changeUserState} from "@/api/user.js"
import {options} from "./options.js"
import { ElMessage } from 'element-plus'
const queryForm =ref({
  query:'',
  pagenum:1,
  pagesize:1
})

const tableData = ref([])

let total = ref(0)

onMounted(() => {
  getUserList()
})

const getUserList = async() => {
  await getUser(queryForm.value).then(res => {
    tableData.value = res.users
    total.value = res.total 
  }).catch(err => {
    console.log(err,'err1');
  })
}

const handleSizeChange = (pageSize) => {
  queryForm.value.pagesize = pageSize
  getUserList()
}

const handleCurrentChange = (pageNum) => {
  queryForm.value.pagenum = pageNum
  getUserList()

}

const changeState = async ({id,mg_state}) => {
  await changeUserState(id,mg_state).then(res => {
    ElMessage.success('更新成功')
  })
}

const search = () => {
  getUserList()
}
</script>

<style lang="scss" scoped>
.header{
  padding-bottom: 20px;
}
.pagination{
  display: flex;
  justify-content: end;
  padding-top: 20px;
}
</style>
