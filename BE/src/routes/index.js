import { Router } from 'express'
import danhGiaRouter from '../modules/danh_gia/danh_gia.route.js'
import giaSuMonHocRouter from '../modules/gia_su_mon_hoc/gia_su_mon_hoc.route.js'
import hoSoGiaSuRouter from '../modules/ho_so_gia_su/ho_so_gia_su.route.js'
import lichHocRouter from '../modules/lich_hoc/lich_hoc.route.js'
import monHocRouter from '../modules/mon_hoc/mon_hoc.route.js'
import nhuCauTimGiaSuRouter from '../modules/nhu_cau_tim_gia_su/nhu_cau_tim_gia_su.route.js'
import usersRouter from '../modules/users/users.route.js'
import yeuCauGhepRouter from '../modules/yeu_cau_ghep/yeu_cau_ghep.route.js'

const router = Router()

router.use('/danh_gia', danhGiaRouter)
router.use('/gia_su_mon_hoc', giaSuMonHocRouter)
router.use('/ho_so_gia_su', hoSoGiaSuRouter)
router.use('/lich_hoc', lichHocRouter)
router.use('/mon_hoc', monHocRouter)
router.use('/nhu_cau_tim_gia_su', nhuCauTimGiaSuRouter)
router.use('/users', usersRouter)
router.use('/yeu_cau_ghep', yeuCauGhepRouter)

export default router
