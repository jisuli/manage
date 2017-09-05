<template>
  <div class="hello">
      <p v-focus:test='logname'>
        <label>姓名：</label>
        <input type="text" v-model.lazy="logname.name" placeholder="请输入登录名">
        <span class="tip" v-show="logname.state">{{logname.msg}}</span>
      </p>
      <p v-focus:required='logpwd'>
        <label>密码：</label>
        <input type="password" v-model.lazy="logpwd.name" placeholder="请输入密码" @blur="fn(logpwd)">
        <span class="tip" v-show="logpwd.state">{{logpwd.msg}}</span>
      </p>
      <p><span class="login" @click='login'>登录</span></p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
        logname:{
            name:'',
            oldMsg:'你输入的姓名格式不正确',
            msg:"你输入的姓名格式不正确",
            test:/^[a-zA-Z]+$/,
            state:false
        },
        logpwd:{
            name:'',
            blur:false,
            oldMsg:'你输入的密码格式不正确',
            msg:"你输入的密码格式不正确",
            test:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/i,
            state:false
        }
    }
  },
  methods:{
      fn(val){
          val.blur=true
      },
      login(){
        var that = this
        if(!this.logname.state && !this.logpwd.state && this.logname.name!="" && this.logpwd.name!=""){
            this.axios.post('http://localhost:3000/api',{
              params:{
                  loginame:this.logname.name,
                  loginpw:this.logpwd.name
              }     
          }).then(function(data){
            console.log(data)
              that.$message(data.data.msg)
              if(data.data.code==='1001'){
                  sessionStorage.setItem('userId',data.data.userid)
                  sessionStorage.setItem('userName',that.logname.name)
                  that.$router.push('/main')
              }
          })
        }else{
          alert('用户名或密码不正确')
        }
      }
  },
  directives:{
    focus:{
      componentUpdated(el,option,vnode,oldVnode){
          var test = option.value.test.test(option.value.name)//正则判断名字
          if(option.value.name!=''){
              if(test){
                  option.value.state=false
              }else{
                  option.value.state=true
              }
              option.value.msg=option.value.oldMsg
          }else{
            if(option.arg=='required' && option.value.blur){
                  option.value.state=true
                  option.value.msg="不能为空"
            }else{
                  option.value.state=false
            } 
          }
          
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width:600px;
    height:390px;
    border:1px solid orange;
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-300px;
    margin-top:-195px;
　　margin:auto;
  }
  .hello p{
    width: 100%;
    padding-left:20px;
    padding-top: 30px
  }
   .hello p input{
      width:70%;
      height: 40px;
      margin-left:30px;
   }
   .hello p span{
      padding-left:15px;
   }
   .hello p .tip{
      display: block;
      text-align: center;
      margin-top:10px;
      color:red;
   }
   .hello p:nth-child(3){
      display: flex;
      justify-content: center;
      align-items: center;
   }
  .login{
    width:70%;
    height: 50px;
    background: orange;
    font-size: 20px;
    color:#fff;
    display:inline-block;
    text-align: center;
    line-height: 50px;
    border-radius: 10px;
  }
</style>
