const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmgfa28/",
            name: "ssmgfa28",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmgfa28/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "同城交易小程序"
        } 
    }
}
export default base
