const Controller =require('egg').Controller;

class EmployeeController extends Controller {
    async getAllEmployee(){
        this.ctx.body="test"
    }
}

module.exports=EmployeeController;