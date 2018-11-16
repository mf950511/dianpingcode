const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const bodyParser = require('koa-bodyparser')
const server = require('koa-static')
app.use(bodyParser())
const adList = require('./mock/ad')
const homeList = require('./mock/list')
router.get('/api/ad', async ctx=>{
  ctx.body = adList
})

router.post('/api/homelist', async ctx=>{
  let {cityName, page} = ctx.request.body
  if(page >= 5) {
    homeList.hasMore = false
  } else {
    homeList.hasMore = true
  }
  ctx.body = homeList
})
app.use(server(__dirname+'/public/image'))
router.get('/', async ctx=>{
  ctx.body ='123'
})
app
.use(router.routes())
.use(router.allowedMethods())
app.listen(3001)
