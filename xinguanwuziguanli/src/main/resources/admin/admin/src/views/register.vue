<template>
    <div>
        <div class="container">
            <div class="login-form">
                <h1 class="h1" style="color:#000;fontSize:28px;">新冠物资管理系统注册</h1>
                <el-form class="rgs-form">
                    <el-form-item label="账号" class="input">
                        <el-input v-model="ruleForm.username" autocomplete="off" placeholder="账号"  />
                    </el-form-item>
                    <el-form-item label="密码" class="input">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off" show-password/>
                    </el-form-item>
                    <el-form-item label="重复密码" class="input">
                        <el-input type="passwo   rd" v-model="ruleForm.repetitionPassword" autocomplete="off" show-password/>
                    </el-form-item>
                        <el-form-item label="小区管理员姓名" class="input" v-if="tableName=='xiaoquguanli'">
                            <el-input v-model="ruleForm.xiaoquguanliName" autocomplete="off" placeholder="小区管理员姓名"  />
                        </el-form-item>
                        <!--
                            <el-form-item v-if="xiaoquguanliPhotoFlag">
                            </el-form-item>
                            <el-form-item label="头像" class="input" v-if="tableName=='xiaoquguanli'">
                                    <file-upload
                                        tip="点击上传头像"
                                        action="file/upload"
                                        :limit="1"
                                        :multiple="true"
                                        :fileUrls="ruleForm.xiaoquguanliPhoto?$base.url+ruleForm.xiaoquguanliPhoto:''"
                                        @change="xiaoquguanliPhotoUploadChange"
                                    ></file-upload>
                           </el-form-item>
                        -->
                        <el-form-item label="联系方式" class="input" v-if="tableName=='xiaoquguanli'">
                            <el-input v-model="ruleForm.xiaoquguanliPhone" autocomplete="off" placeholder="联系方式"  />
                        </el-form-item>
                        <el-form-item label="身份证号" class="input" v-if="tableName=='xiaoquguanli'">
                            <el-input v-model="ruleForm.xiaoquguanliIdNumber" autocomplete="off" placeholder="身份证号"  />
                        </el-form-item>
                        <el-form-item label="邮箱" class="input" v-if="tableName=='xiaoquguanli'">
                            <el-input v-model="ruleForm.xiaoquguanliEmail" autocomplete="off" placeholder="邮箱"  />
                        </el-form-item>
                        <!--
                            <el-form-item label="假删" class="input" v-if="tableName=='xiaoquguanli'">
                                <el-input v-model="ruleForm.xiaoquguanliDelete" autocomplete="off" placeholder="假删"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="创建时间" class="input" v-if="tableName=='xiaoquguanli'">
                                <el-input v-model="ruleForm.createTime" autocomplete="off" placeholder="创建时间"  />
                           </el-form-item>
                        -->
                        <el-form-item label="采购员姓名" class="input" v-if="tableName=='yonghu'">
                            <el-input v-model="ruleForm.yonghuName" autocomplete="off" placeholder="采购员姓名"  />
                        </el-form-item>
                        <!--
                            <el-form-item v-if="yonghuPhotoFlag">
                            </el-form-item>
                            <el-form-item label="头像" class="input" v-if="tableName=='yonghu'">
                                    <file-upload
                                        tip="点击上传头像"
                                        action="file/upload"
                                        :limit="1"
                                        :multiple="true"
                                        :fileUrls="ruleForm.yonghuPhoto?$base.url+ruleForm.yonghuPhoto:''"
                                        @change="yonghuPhotoUploadChange"
                                    ></file-upload>
                           </el-form-item>
                        -->
                        <el-form-item label="采购员手机号" class="input" v-if="tableName=='yonghu'">
                            <el-input v-model="ruleForm.yonghuPhone" autocomplete="off" placeholder="采购员手机号"  />
                        </el-form-item>
                        <el-form-item label="采购员身份证号" class="input" v-if="tableName=='yonghu'">
                            <el-input v-model="ruleForm.yonghuIdNumber" autocomplete="off" placeholder="采购员身份证号"  />
                        </el-form-item>
                        <el-form-item label="邮箱" class="input" v-if="tableName=='yonghu'">
                            <el-input v-model="ruleForm.yonghuEmail" autocomplete="off" placeholder="邮箱"  />
                        </el-form-item>
                        <!--
                            <el-form-item label="单位" class="input" v-if="tableName=='yonghu'">
                                <el-input v-model="ruleForm.yonghuDanwei" autocomplete="off" placeholder="单位"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="假删" class="input" v-if="tableName=='yonghu'">
                                <el-input v-model="ruleForm.yonghuDelete" autocomplete="off" placeholder="假删"  />
                           </el-form-item>
                        -->
                        <!--
                            <el-form-item label="创建时间" class="input" v-if="tableName=='yonghu'">
                                <el-input v-model="ruleForm.createTime" autocomplete="off" placeholder="创建时间"  />
                           </el-form-item>
                        -->
                    <div style="display: flex;flex-wrap: wrap;width: 100%;justify-content: center;">
                        <el-button class="btn" type="primary" @click="login()">注册</el-button>
                        <el-button class="btn close" type="primary" @click="close()">取消</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                },
                tableName:"",
                rules: {},
                sexTypesOptions : [],
                xiaoquguanliPhotoFlag:false,//用于刷新文件上传
                yonghuPhotoFlag:false,//用于刷新文件上传
            };
        },
        mounted(){
            let table = this.$storage.get("loginTable");
            this.tableName = table;

            //级联表的下拉框查询

        },
        methods: {
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            xiaoquguanliPhotoUploadChange(fileUrls) {
               this.ruleForm.xiaoquguanliPhoto = fileUrls;
                if(this.xiaoquguanliPhotoFlag){
                    this.xiaoquguanliPhotoFlag=false;
                }else{
                    this.xiaoquguanliPhotoFlag=true;
                }
            },
            yonghuPhotoUploadChange(fileUrls) {
               this.ruleForm.yonghuPhoto = fileUrls;
                if(this.yonghuPhotoFlag){
                    this.yonghuPhotoFlag=false;
                }else{
                    this.yonghuPhotoFlag=true;
                }
            },
            close(){
                this.$router.push({ path: "/login" });
            },
            // 注册
            login() {

                            if((!this.ruleForm.username)){
                                this.$message.error('账号不能为空');
                                return
                            }
                            if((!this.ruleForm.password)){
                                this.$message.error('密码不能为空');
                                return
                            }
                            if((!this.ruleForm.repetitionPassword)){
                                this.$message.error('重复密码不能为空');
                                return
                            }
                            if(this.ruleForm.repetitionPassword != this.ruleForm.password){
                                this.$message.error('密码和重复密码不一致');
                                return
                            }
                            if((!this.ruleForm.xiaoquguanliName)&& 'xiaoquguanli'==this.tableName){
                                this.$message.error('小区管理员姓名不能为空');
                                return
                            }
                            // xiaoquguanli 中的 头像 判空处理
                            // if('xiaoquguanli' == this.tableName && (this.ruleForm.xiaoquguanliPhoto== null ||this.ruleForm.xiaoquguanliPhoto== "")){
                            //     this.$message.error("头像不能为空");
                            //     return
                            // }
                             if('xiaoquguanli' == this.tableName && this.ruleForm.xiaoquguanliPhone&&(!this.$validate.isMobile(this.ruleForm.xiaoquguanliPhone))){
                                 this.$message.error('手机应输入手机格式');
                                 return
                             }
                            if((!this.ruleForm.xiaoquguanliIdNumber)&& 'xiaoquguanli'==this.tableName){
                                this.$message.error('身份证号不能为空');
                                return
                            }
                            if('xiaoquguanli' == this.tableName && this.ruleForm.xiaoquguanliEmail&&(!this.$validate.isEmail(this.ruleForm.xiaoquguanliEmail))){
                                this.$message.error("邮箱应输入邮件格式");
                                return
                            }
                            // xiaoquguanli 中的 假删 判空处理
                            // if('xiaoquguanli' == this.tableName && (this.ruleForm.xiaoquguanliDelete== null ||this.ruleForm.xiaoquguanliDelete== "")){
                            //     this.$message.error("假删不能为空");
                            //     return
                            // }
                            // xiaoquguanli 中的 创建时间 判空处理
                            // if('xiaoquguanli' == this.tableName && (this.ruleForm.createTime== null ||this.ruleForm.createTime== "")){
                            //     this.$message.error("创建时间不能为空");
                            //     return
                            // }
                            if((!this.ruleForm.yonghuName)&& 'yonghu'==this.tableName){
                                this.$message.error('采购员姓名不能为空');
                                return
                            }
                            // yonghu 中的 头像 判空处理
                            // if('yonghu' == this.tableName && (this.ruleForm.yonghuPhoto== null ||this.ruleForm.yonghuPhoto== "")){
                            //     this.$message.error("头像不能为空");
                            //     return
                            // }
                             if('yonghu' == this.tableName && this.ruleForm.yonghuPhone&&(!this.$validate.isMobile(this.ruleForm.yonghuPhone))){
                                 this.$message.error('手机应输入手机格式');
                                 return
                             }
                            if((!this.ruleForm.yonghuIdNumber)&& 'yonghu'==this.tableName){
                                this.$message.error('采购员身份证号不能为空');
                                return
                            }
                            if('yonghu' == this.tableName && this.ruleForm.yonghuEmail&&(!this.$validate.isEmail(this.ruleForm.yonghuEmail))){
                                this.$message.error("邮箱应输入邮件格式");
                                return
                            }
                            // yonghu 中的 单位 判空处理
                            // if('yonghu' == this.tableName && (this.ruleForm.yonghuDanwei== null ||this.ruleForm.yonghuDanwei== "")){
                            //     this.$message.error("单位不能为空");
                            //     return
                            // }
                            // yonghu 中的 假删 判空处理
                            // if('yonghu' == this.tableName && (this.ruleForm.yonghuDelete== null ||this.ruleForm.yonghuDelete== "")){
                            //     this.$message.error("假删不能为空");
                            //     return
                            // }
                            // yonghu 中的 创建时间 判空处理
                            // if('yonghu' == this.tableName && (this.ruleForm.createTime== null ||this.ruleForm.createTime== "")){
                            //     this.$message.error("创建时间不能为空");
                            //     return
                            // }
                this.$http({
                    url: `${this.tableName}/register`,
                    method: "post",
                    data:this.ruleForm
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                    this.$message({
                        message: "注册成功,请登录后在个人中心页面补充个人数据",
                        type: "success",
                        duration: 1500,
                        onClose: () => {
                        this.$router.replace({ path: "/login" });
                }
                });
                } else {
                    this.$message.error(data.msg);
                }
            });
            }
        }
    };
</script>
<style lang="scss" scoped>
	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.h1 {
		margin-top: 10px;
	}

	body {
		padding: 0;
		margin: 0;
	}
	.nk-navigation {
		margin-top: 15px;

		a {
			display: inline-block;
			color: #fff;
			background: rgba(255, 255, 255, .2);
			width: 100px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;
		}

		.icon {
			margin-left: 10px;
			width: 30px;
			height: 30px;
		}
	}

	.register-container {
		margin-top: 10px;

		a {
			display: inline-block;
			color: #fff;
			max-width: 500px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;

			div {
				margin-left: 10px;
			}
		}
	}

	.container {
		height: 100vh;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url(/xinguanwuziguanli/img/back-img-bg.jpg);

		.login-form {
			right: 50%;
			top: 50%;
			transform: translate3d(50%, -50%, 0);
			border-radius: 10px;
			background-color: rgba(255,255,255,.5);
			font-size: 14px;
			font-weight: 500;
      box-sizing: border-box;

			width: 450px;
			height: auto;
			padding: 15px;
			margin: 0 auto;
			border-radius: 30px 30px 0 0 ;
			border-width: 21px 20px 0 20px;
			border-style: solid;
			border-color: rgba(255, 255, 255, 1);
			background-color: var(--publicSubColor);
			box-shadow: 0px 0px 0px 15px var(--publicMainColor);

			.h1 {
				width: 80%;
				height: auto;
				line-height:auto;
				color: rgba(255, 255, 255, 1);
				font-size: 28px;
				padding: 0;
				margin: 10px auto 25px;
				border-radius: 0;
				border-width: 0;
				border-style: solid;
				border-color: rgba(255,0,0,0);
				background-color: rgba(255,0,0,0);
				box-shadow: 0 0 6px rgba(255,0,0,0);
				text-align: center;
			}

			.rgs-form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

        .el-form-item {
          width: 100%;
          display: flex;

          & /deep/ .el-form-item__content {
            flex: 1;
            display: flex;
          }
        }

				.input {
          width: 90%;
          height:auto;
          padding: 0;
          margin: 0 0 12px 0;
          border-radius: 0;
          border-width: 0;
          border-style: solid;
          border-color: rgba(255,0,0,0);
          background-color: rgba(255,0,0,0);
          box-shadow: 0 0 6px rgba(255,0,0,0);

					& /deep/ .el-form-item__label {
            width: 70px;
            line-height:44px;
            color: rgba(255, 255, 255, 1);
            font-size: 14px;
            padding: 0 10px 0 0;
            margin: 0;
            border-radius: 0;
            border-width: 0;
            border-style: solid;
            border-color: rgba(255,0,0,0);
            background-color: rgba(255,0,0,0);
            box-shadow: 0 0 6px rgba(255,0,0,0);
					}

					& /deep/ .el-input__inner {
            width: 100%;
            height: 44px;
            line-height:44px;
            color: #606266;
            font-size: 14px;
            padding: 0 12px;
            margin: 0;
            border-radius: 4px;
            border-width: 1px;
            border-style: solid;
            border-color: #606266;
            background-color: #fff;
            box-shadow: 0 0 6px rgba(255,0,0,0);
            text-align: left;
					}
				}

        .send-code {
          & /deep/ .el-input__inner {
            width: 180px;
            height: 44px;
            line-height:44px;
            color: #606266;
            font-size: 14px;
            padding: 0 12px;
            margin: 0;
            border-radius: 0;
            border-width: 0;
            border-style: solid;
            border-color: #606266;
            background-color: #fff;
            box-shadow: 0 0 6px rgba(255,0,0,0);
            text-align: left;
          }

          .register-code {
            margin: 0;
            padding: 0;
            width: 90px;
            height: 44px;
            line-height:44px;
            color: #fff;
            font-size: 14px;
            border-width: 2px;
            border-style: solid;
            border-color: rgba(255, 255, 255, 1);
            border-radius: 0;
            background-color: var(--publicMainColor);
            box-shadow: 0 0 6px rgba(255,0,0,0);
          }
        }

				.btn {
					margin: 0 10px;
          padding: 0;
					width: 88px;
					height: 44px;
          line-height:44px;
					color: var(--publicMainColor);
					font-size: 14px;
					border-width: 1px;
					border-style: solid;
					border-color: rgba(255, 255, 255, 1);
					border-radius: 4px;
					background-color: rgba(255, 255, 255, 1);
          box-shadow: 0 0 6px rgba(255,0,0,0);
				}

				.close {
          margin: 0 10px;
          padding: 0;
          width: 88px;
          height: 44px;
          line-height:44px;
          color: rgba(116, 116, 116, 1);
          font-size: 14px;
          border-width: 1px;
          border-style: solid;
          border-color: var(--publicMainColor);
          border-radius: 4px;
          background-color: #FFF;
          box-shadow: 0 0 6px rgba(255,0,0,0);
				}

			}
		}
	}
</style>


