import router from '../router/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
    showSpinner: false
})

router.beforeEach((to, _, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})