<template>
  <div>
    <el-row style="margin-top: 1%">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>注册</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row style="margin-top: 4%">
      <el-col span="5">
        <div style="margin: 20px"></div>
      </el-col>
      <el-col span="10">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px"
                 class="demo-ruleForm"
                 label-position="top">
          <el-form-item label="账号" prop="account" style="text-align: left">
            <el-input type="account" v-model="ruleForm2.account" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="Email" style="text-align: left">
            <el-input type="email" v-model="ruleForm2.Email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass" style="text-align: left">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass" style="text-align: left">
            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age" style="text-align: left">
            <el-input v-model.number="ruleForm2.age"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
          <el-form-item style="float: left">
            <label>已有账号？<a>
              <router-link to="/login">登录</router-link>
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
    name: 'Register',
    data() {
      let checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'))
            } else {
              callback();
            }
          }
        }, 1000);
      };
      let checkAccount = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'))
        }
        setTimeout(() => {
          callback();
        }, 1000);
      };
      let checkEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮件不能为空'))
        }
        setTimeout(() => {
          if (value.indexOf('@') < 0) {
            callback(new Error('请输入正确的邮箱地址'))
          } else {
            callback();
          }
        }, 0);
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass')
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          account: '',
          pass: '',
          checkPass: '',
          Email: '',
          age: ''
        },
        rules2: {
          account: [
            {validator: checkAccount, trigger: 'blur'}
          ],
          Email: [
            {validator: checkEmail, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          age: [
            {validator: checkAge, trigger: 'blur'}
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
