import { Router } from 'express'
import { getAll, getById, create, update, remove } from './danh_gia.controller.js'
import { authMiddleware } from '../../middleware/auth.middleware.js'

const router = Router()

/**
 * @swagger
 * tags:
 *   name: DanhGia
 *   description: Quản lý danh_gia
 */


/**
 * @swagger
 * /danh_gia:
 *   get:
 *     tags: [DanhGia]
 *     summary: Lấy danh sách danh_gia
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
 *     tags: [DanhGia]
 *     summary: Tạo danh_gia mới
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
 *               lich_hoc_id:
 *                 type: string
 *               hoc_vien_id:
 *                 type: string
 *               gia_su_id:
 *                 type: string
 *               so_sao:
 *                 type: integer
 *               nhan_xet:
 *                 type: string
 */
router.get('/', authMiddleware, getAll)
router.post('/', authMiddleware, create)

/**
 * @swagger
 * /danh_gia/{id}:
 *   get:
 *     tags: [DanhGia]
 *     summary: Lấy danh_gia theo ID
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
 *     tags: [DanhGia]
 *     summary: Cập nhật danh_gia
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
 *               lich_hoc_id:
 *                 type: string
 *               hoc_vien_id:
 *                 type: string
 *               gia_su_id:
 *                 type: string
 *               so_sao:
 *                 type: integer
 *               nhan_xet:
 *                 type: string
 *   delete:
 *     tags: [DanhGia]
 *     summary: Xóa danh_gia
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
