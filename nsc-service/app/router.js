module.exports=app=>{
    const {router,controller} =app;
    router.get('/getAllEmployee',controller.employee.getAllEmployee)
}