import { Router } from 'express'
import { getAll, getById, create, update, remove } from './lich_hoc.controller.js'
import { authMiddleware } from '../../middleware/auth.middleware.js'

const router = Router()

/**
 * @swagger
 * tags:
 *   name: LichHoc
 *   description: Quản lý lich_hoc
 */


/**
 * @swagger
 * /lich_hoc:
 *   get:
 *     tags: [LichHoc]
 *     summary: Lấy danh sách lich_hoc
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
 *     tags: [LichHoc]
 *     summary: Tạo lich_hoc mới
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
 *               yeu_cau_id:
 *                 type: string
 *               ngay_hoc:
 *                 type: string
 *               gio_bat_dau:
 *                 type: string
 *               gio_ket_thuc:
 *                 type: string
 *               dia_diem:
 *                 type: string
 *               hinh_thuc_hoc:
 *                 type: string
 *               trang_thai:
 *                 type: string
 */
router.get('/', authMiddleware, getAll)
router.post('/', authMiddleware, create)

/**
 * @swagger
 * /lich_hoc/{id}:
 *   get:
 *     tags: [LichHoc]
 *     summary: Lấy lich_hoc theo ID
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
 *     tags: [LichHoc]
 *     summary: Cập nhật lich_hoc
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
 *               yeu_cau_id:
 *                 type: string
 *               ngay_hoc:
 *                 type: string
 *               gio_bat_dau:
 *                 type: string
 *               gio_ket_thuc:
 *                 type: string
 *               dia_diem:
 *                 type: string
 *               hinh_thuc_hoc:
 *                 type: string
 *               trang_thai:
 *                 type: string
 *   delete:
 *     tags: [LichHoc]
 *     summary: Xóa lich_hoc
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
