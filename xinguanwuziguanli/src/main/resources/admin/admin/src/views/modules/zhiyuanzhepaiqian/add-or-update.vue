<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='zhiyaunzhe'">
                    <el-form-item class="select" v-if="type!='info'"  label="自愿者" prop="zhiyaunzheId">
                        <el-select v-model="ruleForm.zhiyaunzheId" :disabled="ro.zhiyaunzheId" filterable placeholder="请选择自愿者" @change="zhiyaunzheChange">
                            <el-option
                                    v-for="(item,index) in zhiyaunzheOptions"
                                    v-bind:key="item.id"
                                    :label="item.zhiyaunzheName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='zhiyaunzhe' ">
                    <el-form-item class="input" v-if="type!='info'"  label="自愿者姓名" prop="zhiyaunzheName">
                        <el-input v-model="zhiyaunzheForm.zhiyaunzheName"
                                  placeholder="自愿者姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="自愿者姓名" prop="zhiyaunzheName">
                            <el-input v-model="ruleForm.zhiyaunzheName"
                                      placeholder="自愿者姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='zhiyaunzhe' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.zhiyaunzhePhoto" label="头像" prop="zhiyaunzhePhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (zhiyaunzheForm.zhiyaunzhePhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.zhiyaunzhePhoto" label="头像" prop="zhiyaunzhePhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.zhiyaunzhePhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='zhiyaunzhe' ">
                    <el-form-item class="input" v-if="type!='info'"  label="自愿者联系方式" prop="zhiyaunzhePhone">
                        <el-input v-model="zhiyaunzheForm.zhiyaunzhePhone"
                                  placeholder="自愿者联系方式" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="自愿者联系方式" prop="zhiyaunzhePhone">
                            <el-input v-model="ruleForm.zhiyaunzhePhone"
                                      placeholder="自愿者联系方式" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='zhiyaunzhe' ">
                    <el-form-item class="input" v-if="type!='info'"  label="自愿者身份证号" prop="zhiyaunzheIdNumber">
                        <el-input v-model="zhiyaunzheForm.zhiyaunzheIdNumber"
                                  placeholder="自愿者身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="自愿者身份证号" prop="zhiyaunzheIdNumber">
                            <el-input v-model="ruleForm.zhiyaunzheIdNumber"
                                      placeholder="自愿者身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='zhiyaunzhe' ">
                    <el-form-item class="input" v-if="type!='info'"  label="邮箱" prop="zhiyaunzheEmail">
                        <el-input v-model="zhiyaunzheForm.zhiyaunzheEmail"
                                  placeholder="邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="邮箱" prop="zhiyaunzheEmail">
                            <el-input v-model="ruleForm.zhiyaunzheEmail"
                                      placeholder="邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='zhiyaunzhe' ">
                    <el-form-item class="input" v-if="type!='info'"  label="住址" prop="zhiyaunzheAddress">
                        <el-input v-model="zhiyaunzheForm.zhiyaunzheAddress"
                                  placeholder="住址" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="住址" prop="zhiyaunzheAddress">
                            <el-input v-model="ruleForm.zhiyaunzheAddress"
                                      placeholder="住址" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='zhiyaunzhe' ">
                    <el-form-item class="input" v-if="type!='info'"  label="性别" prop="sexValue">
                        <el-input v-model="zhiyaunzheForm.sexValue"
                                  placeholder="性别" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="性别" prop="sexValue">
                            <el-input v-model="ruleForm.sexValue"
                                      placeholder="性别" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="派遣标题" prop="zhiyuanzhepaiqianName">
                       <el-input v-model="ruleForm.zhiyuanzhepaiqianName"
                                 placeholder="派遣标题" clearable  :readonly="ro.zhiyuanzhepaiqianName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="派遣标题" prop="zhiyuanzhepaiqianName">
                           <el-input v-model="ruleForm.zhiyuanzhepaiqianName"
                                     placeholder="派遣标题" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="派遣类型" prop="zhiyuanzhepaiqianTypes">
                        <el-select v-model="ruleForm.zhiyuanzhepaiqianTypes" :disabled="ro.zhiyuanzhepaiqianTypes" placeholder="请选择派遣类型">
                            <el-option
                                v-for="(item,index) in zhiyuanzhepaiqianTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="派遣类型" prop="zhiyuanzhepaiqianValue">
                        <el-input v-model="ruleForm.zhiyuanzhepaiqianValue"
                            placeholder="派遣类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item v-if="type!='info'"  class="input" label="派遣时间" prop="zhiyuanzhepaiqianTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                v-model="ruleForm.zhiyuanzhepaiqianTime"
                                type="datetime"
                                placeholder="派遣时间"
                                :disabled="ro.zhiyuanzhepaiqianTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.zhiyuanzhepaiqianTime" label="派遣时间" prop="zhiyuanzhepaiqianTime">
                            <span v-html="ruleForm.zhiyuanzhepaiqianTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

            <input id="zhiyaunzheId" name="zhiyaunzheId" type="hidden">
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="派遣详情" prop="zhiyuanzhepaiqianContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.zhiyuanzhepaiqianContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.zhiyuanzhepaiqianContent" label="派遣详情" prop="zhiyuanzhepaiqianContent">
                            <span v-html="ruleForm.zhiyuanzhepaiqianContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                zhiyaunzheForm: {},
                ro:{
                    zhiyuanzhepaiqianName: false,
                    zhiyuanzhepaiqianTypes: false,
                    zhiyuanzhepaiqianPhoto: false,
                    zhiyuanzhepaiqianTime: false,
                    zhiyaunzheId: false,
                    zhiyuanzhepaiqianContent: false,
                    insertTime: false,
                },
                ruleForm: {
                    zhiyuanzhepaiqianName: '',
                    zhiyuanzhepaiqianTypes: '',
                    zhiyuanzhepaiqianPhoto: '',
                    zhiyuanzhepaiqianTime: '',
                    zhiyaunzheId: '',
                    zhiyuanzhepaiqianContent: '',
                    insertTime: '',
                },
                zhiyuanzhepaiqianTypesOptions : [],
                zhiyaunzheOptions : [],
                rules: {
                   zhiyuanzhepaiqianName: [
                              { required: true, message: '派遣标题不能为空', trigger: 'blur' },
                          ],
                   zhiyuanzhepaiqianTypes: [
                              { required: true, message: '派遣类型不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   zhiyuanzhepaiqianPhoto: [
                              { required: true, message: '公告图片不能为空', trigger: 'blur' },
                          ],
                   zhiyuanzhepaiqianTime: [
                              { required: true, message: '派遣时间不能为空', trigger: 'blur' },
                          ],
                   zhiyaunzheId: [
                              { required: true, message: '自愿者不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   zhiyuanzhepaiqianContent: [
                              { required: true, message: '派遣详情不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '添加时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=zhiyuanzhepaiqian_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.zhiyuanzhepaiqianTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `zhiyaunzhe/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.zhiyaunzheOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            zhiyaunzheChange(id){
                this.$http({
                    url: `zhiyaunzhe/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.zhiyaunzheForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `zhiyuanzhepaiqian/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.zhiyaunzheChange(data.data.zhiyaunzheId)
                        _this.ruleForm.zhiyuanzhepaiqianContent = _this.ruleForm.zhiyuanzhepaiqianContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.ruleForm.zhiyuanzhepaiqianContent = this.ruleForm.zhiyuanzhepaiqianContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`zhiyuanzhepaiqian/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.zhiyuanzhepaiqianCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.zhiyuanzhepaiqianCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            zhiyuanzhepaiqianPhotoUploadChange(fileUrls){
                this.ruleForm.zhiyuanzhepaiqianPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
    height: 500px;

& /deep/ .ql-container {
      height: 310px;
  }
}
.amap-wrapper {
    width: 100%;
    height: 500px;
}
.search-box {
    position: absolute;
}
.addEdit-block {
    margin: -10px;
}
.detail-form-content {
    padding: 12px;
    background-color: transparent;
}
.btn .el-button {
    padding: 0;
}</style>

