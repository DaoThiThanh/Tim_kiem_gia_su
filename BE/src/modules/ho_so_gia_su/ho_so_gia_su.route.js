import { Router } from 'express'
import { getAll, getById, create, update, remove } from './ho_so_gia_su.controller.js'
import { authMiddleware } from '../../middleware/auth.middleware.js'

const router = Router()

/**
 * @swagger
 * tags:
 *   name: HoSoGiaSu
 *   description: Quản lý ho_so_gia_su
 */


/**
 * @swagger
 * /ho_so_gia_su:
 *   get:
 *     tags: [HoSoGiaSu]
 *     summary: Lấy danh sách ho_so_gia_su
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
 *     tags: [HoSoGiaSu]
 *     summary: Tạo ho_so_gia_su mới
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
 *               user_id:
 *                 type: string
 *               gioi_thieu:
 *                 type: string
 *               trinh_do:
 *                 type: string
 *               kinh_nghiem:
 *                 type: string
 *               bang_cap:
 *                 type: string
 *               hoc_phi:
 *                 type: number
 *               hinh_thuc_day:
 *                 type: string
 *               khu_vuc:
 *                 type: string
 *               thoi_gian_day:
 *                 type: string
 *               trang_thai_duyet:
 *                 type: string
 */
router.get('/', authMiddleware, getAll)
router.post('/', authMiddleware, create)

/**
 * @swagger
 * /ho_so_gia_su/{id}:
 *   get:
 *     tags: [HoSoGiaSu]
 *     summary: Lấy ho_so_gia_su theo ID
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
 *     tags: [HoSoGiaSu]
 *     summary: Cập nhật ho_so_gia_su
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
 *               user_id:
 *                 type: string
 *               gioi_thieu:
 *                 type: string
 *               trinh_do:
 *                 type: string
 *               kinh_nghiem:
 *                 type: string
 *               bang_cap:
 *                 type: string
 *               hoc_phi:
 *                 type: number
 *               hinh_thuc_day:
 *                 type: string
 *               khu_vuc:
 *                 type: string
 *               thoi_gian_day:
 *                 type: string
 *               trang_thai_duyet:
 *                 type: string
 *   delete:
 *     tags: [HoSoGiaSu]
 *     summary: Xóa ho_so_gia_su
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
