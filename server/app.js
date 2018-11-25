const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const bodyParser = require('koa-bodyparser')
const server = require('koa-static')
app.use(bodyParser())
const adList = require('./mock/ad')
const homeList = require('./mock/list')

const detailInfo = require('./mock/detail/info')
const commentList = require('./mock/detail/comment')

const orderList = require('./mock/orderlist/orderList')
// 获取广告列表
router.get('/api/ad', async ctx=>{
  ctx.body = adList
})


// 获取首页商户列表
router.post('/api/homelist', async ctx=>{
  let {cityName, page} = ctx.request.body
  console.log(ctx.request.body)
  if(page >= 5) {
    homeList.hasMore = false
  } else {
    homeList.hasMore = true
  }
  ctx.body = homeList
})
// 获取商户详情
router.get('/api/detailInfo', async ctx=> {
  console.log(ctx.request.query)
  ctx.body = detailInfo
})

// 获取商户评论列表
router.post('/api/commentList', async ctx=>{
  console.log(ctx.request.body)
  let {page} = ctx.request.body
  if(page >= 5) {
    commentList.hasMore = false
  } else {
    commentList.hasMore = true
  }
  ctx.body = commentList
})

// 获取用户订单列表
router.post('/api/orderList', async ctx=>{
  console.log(ctx.request.body)
  ctx.body = orderList
})
// 生成评价
router.post('/api/postComment', async ctx=>{
  console.log(ctx.request.body)
  ctx.body = {
    code: 200
  }
})

// 设置静态
app.use(server(__dirname+'/public/image'))
router.get('/', async ctx=>{
  ctx.body ='123'
})
app
.use(router.routes())
.use(router.allowedMethods())
app.listen(3001)
