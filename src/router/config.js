import Login from '@/pages/login' //登陆
import Main from '@/pages/main' //main
import MultiHealth from '@/pages/health/multiHealth'
import CommunHealth from '@/pages/health/communHealth'
import NetAssessment from '@/pages/health/netAssessment'
import NetDiagnosis from '@/pages/health/netDiagnosis'
import NetEvent from '@/pages/health/netEvent'
import PersonalCenter from '@/pages/system/personalCenter'
import UserCenter from '@/pages/system/userCenter'
const routes = [{
        path: "/",
        component: Login,
        exact: true,
    },
    {
        path: "/main",
        component: Main,
        auth: true,
        routes: [{
                path: "/main/multiHealth",
                component: MultiHealth,
                exact: true,
                auth: true,
            }, //多维健康度
            {
                path: "/main/communHealth",
                component: CommunHealth,
                exact: true,
                auth: true,
            }, //小区健康度
            {
                path: "/main/netAssessment",
                component: NetAssessment,
                exact: true,
                auth: true,
            }, //网络自评估
            {
                path: "/main/netDiagnosis",
                component: NetDiagnosis,
                exact: true,
                auth: true,
            }, //网络诊断
            {
                path: "/main/netEvent",
                component: NetEvent,
                exact: true,
                auth: true,
            }, //网络事件配置
            {
                path: "/main/personalCenter",
                component: PersonalCenter,
                exact: true,
                auth: true,
            }, //个人中心
            {
                path: "/main/userCenter",
                component: UserCenter,
                exact: true,
                auth: true,
            }, //用户中心
        ]
    }
];
export default routes;
//自定义路由组件数据