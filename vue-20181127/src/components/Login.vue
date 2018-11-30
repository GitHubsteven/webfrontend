<template>
  <div>
    <el-row style="margin-top: 1%">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>登录</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row style="margin-top: 9%">
      <el-col span="5">
        <div style="margin: 20px"></div>
      </el-col>
      <el-col span="10">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm"
                 label-position="top">
          <el-form-item label="账号" prop="account" style="text-align: left">
            <el-input type="password" v-model="ruleForm2.account" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass" style="text-align: left">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
          <el-form-item style="float: left">
            <label>没有账号？<a>
              <router-link to="/register">注册</router-link>
            </a></label>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col span="5">
        <div style="margin: 20px"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'Login',
    data() {
      // let checkAge = (rule, value, callback) => {
      //   if (!value) {
      //     return callback(new Error('年龄不能为空'))
      //   }
      //   setTimeout(() => {
      //     if (!Number.isInteger(value)) {
      //       callback(new Error('请输入数字值'))
      //     } else {
      //       if (value < 18) {
      //         callback(new Error('必须年满18岁'))
      //       } else {
      //         callback();
      //       }
      //     }
      //   }, 1000);
      // };
      let validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
          callback();
        }
      };

      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
          callback();
        }
      };
      // let validatePass2 = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请再次输入密码'))
      //   } else if (value !== this.ruleForm2.pass) {
      //     callback(new Error('两次输入密码不一致!'))
      //   } else {
      //     callback();
      //   }
      // };
      return {
        ruleForm2: {
          account: '',
          pass: ''
        },
        rules2: {
          account: [
            {validator: validatePass, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style
  scoped>

</style>
