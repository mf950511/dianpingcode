const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const bodyParser = require('koa-bodyparser')
const server = require('koa-static')
app.use(bodyParser())
const adList = require('./mock/ad')
router.get('/api/ad', async ctx=>{
  console.log(123)
  ctx.body = adList
})
app.use(server(__dirname+'/public/image'))
router.get('/', async ctx=>{
  ctx.body ='123'
})
app
.use(router.routes())
.use(router.allowedMethods())
app.listen(3001)
