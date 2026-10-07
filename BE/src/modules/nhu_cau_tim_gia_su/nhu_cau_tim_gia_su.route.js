import { Router } from 'express'
import { getAll, getById, create, update, remove } from './nhu_cau_tim_gia_su.controller.js'
import { authMiddleware } from '../../middleware/auth.middleware.js'

const router = Router()

/**
 * @swagger
 * tags:
 *   name: NhuCauTimGiaSu
 *   description: Quản lý nhu_cau_tim_gia_su
 */


/**
 * @swagger
 * /nhu_cau_tim_gia_su:
 *   get:
 *     tags: [NhuCauTimGiaSu]
 *     summary: Lấy danh sách nhu_cau_tim_gia_su
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *     responses:
 *       200:
 *         description: Thành công
 *   post:
 *     tags: [NhuCauTimGiaSu]
 *     summary: Tạo nhu_cau_tim_gia_su mới
 *     responses:
 *       201:
 *         description: Đã tạo thành công
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hoc_vien_id:
 *                 type: string
 *               mon_hoc_id:
 *                 type: integer
 *               lop_trinh_do:
 *                 type: string
 *               muc_tieu_hoc_tap:
 *                 type: string
 *               ngan_sach:
 *                 type: number
 *               thoi_gian_hoc:
 *                 type: string
 *               so_buoi:
 *                 type: integer
 *               hinh_thuc_hoc:
 *                 type: string
 *               khu_vuc:
 *                 type: string
 *               yeu_cau_them:
 *                 type: string
 *               trang_thai:
 *                 type: string
 */
router.get('/', authMiddleware, getAll)
router.post('/', authMiddleware, create)

/**
 * @swagger
 * /nhu_cau_tim_gia_su/{id}:
 *   get:
 *     tags: [NhuCauTimGiaSu]
 *     summary: Lấy nhu_cau_tim_gia_su theo ID
 *     responses:
 *       200:
 *         description: Thành công
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *   put:
 *     tags: [NhuCauTimGiaSu]
 *     summary: Cập nhật nhu_cau_tim_gia_su
 *     responses:
 *       200:
 *         description: Thành công
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hoc_vien_id:
 *                 type: string
 *               mon_hoc_id:
 *                 type: integer
 *               lop_trinh_do:
 *                 type: string
 *               muc_tieu_hoc_tap:
 *                 type: string
 *               ngan_sach:
 *                 type: number
 *               thoi_gian_hoc:
 *                 type: string
 *               so_buoi:
 *                 type: integer
 *               hinh_thuc_hoc:
 *                 type: string
 *               khu_vuc:
 *                 type: string
 *               yeu_cau_them:
 *                 type: string
 *               trang_thai:
 *                 type: string
 *   delete:
 *     tags: [NhuCauTimGiaSu]
 *     summary: Xóa nhu_cau_tim_gia_su
 *     responses:
 *       200:
 *         description: Thành công
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get('/:id', authMiddleware, getById)
router.put('/:id', authMiddleware, update)
router.delete('/:id', authMiddleware, remove)

export default router
