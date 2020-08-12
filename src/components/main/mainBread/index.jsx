import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import './mainBread.less'
const breadcrumbNameMap = {
  '/main': '健康度评估',
  '/main/multiHealth': '多维健康度',
  '/main/communHealth': '小区健康度',
  '/main/netDiagnosis': '网络诊断',
  '/main/netAssessment': '网络自评估',
  '/main/netEvent': '网络事件配置',
  '/main/personalCenter': '用户中心',
  '/main/userCente': '个人中心',
}
class MainBread extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pathSnippets: null,
      extraBreadcrumbItems: null,
    }
  }

  componentDidMount() {
    this.getPath()
    this.props.history.listen(() => {
      this.getPath()
    })
  }
  getPath = () => {
    this.setState(
      () => ({
        pathSnippets: this.props.history.location.pathname
          .split('/')
          .filter((i) => i),
      }),
      () => {
        setTimeout(() => {
          let data = this.state.pathSnippets.map((_, index) => {
            let url = `/${this.state.pathSnippets
              .slice(0, index + 1)
              .join('/')}`
            return (
              <Breadcrumb.Item key={url}>
                {breadcrumbNameMap[url]}
              </Breadcrumb.Item>
            )
          })
          this.setState(() => ({
            extraBreadcrumbItems: data,
          }))
        }, 1000)
      }
    )
  }
  render() {
    return (
      <div className="main-bread">
        <Breadcrumb>{this.state.extraBreadcrumbItems}</Breadcrumb>
      </div>
    )
  }
}

export default withRouter(MainBread)
