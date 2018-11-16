import React, {Component} from 'react'
import './style.less'
class LoadingMore extends Component {
  render(){
    return (
      <div className="load-more" ref="wrapper">
        {
          this.props.isLoadingMore
          ? <span>加载中...</span>
          : <span onClick={this.loadMoreFn.bind(this)}>加载更多</span>
        }
      </div>
    )
  }
  loadMoreFn(){
    this.props.loadMoreFn()
  }
  componentDidMount(){
    const loadMoreFn = this.props.loadMoreFn
    const wrapper = this.refs.wrapper
    function callback(){
      const windowHeight = window.screen.height
      const top = wrapper.getBoundingClientRect().top
      console.log(top)
      if(top && top < windowHeight) {
        loadMoreFn()
      }
    }
    window.addEventListener('scroll', ()=>{
      if(this.props.isLoadingMore) {
        return
      }
      let timeoutId
      if(timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(callback, 50)

    }, false)

  }
}
export default LoadingMore