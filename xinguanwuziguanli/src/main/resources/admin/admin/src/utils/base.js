const base = {
    get() {
        return {
            url : "http://localhost:8080/xinguanwuziguanli/",
            name: "xinguanwuziguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xinguanwuziguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "新冠物资管理系统"
        } 
    }
}
export default base
