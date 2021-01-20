const Koa=require("koa");
const Router = require('koa-router'); // 路由文件
const bodyParser = require('koa-bodyparser'); // 解决获取post参数
const cors = require('koa2-cors');   // 跨域文件
const DB = require('./connt_mysql'); // 链接数据库 文件
const app=new Koa();
const router = new Router();
app.use(cors()); // 解决跨域问题
app.use(bodyParser()); // 获取post请求参数
app.use(router.routes());
app.use(router.allowedMethods());

// api 接口 

// 获取列表接口
router.get('/list', async (ctx, next) => {
    const result = await DB.query('select * from list'); //查询数据库
    ctx.body={arr:result} 
})
// 添加内容 
router.post('/add', async (ctx) => {
    // 请求参数
    let data = ctx.request.body
    const result = await DB.query(`INSERT INTO list(conent_text) VALUES('${data.conent_text}')`); // 插入数据库
    ctx.body = {
        code: 200,
        status: 1,
        message: 'success',
    };
});


app.listen(8000);