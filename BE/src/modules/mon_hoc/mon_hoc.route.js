import { Router } from 'express'
import { getAll, getById, create, update, remove } from './mon_hoc.controller.js'
import { authMiddleware } from '../../middleware/auth.middleware.js'

const router = Router()

/**
 * @swagger
 * tags:
 *   name: MonHoc
 *   description: Quản lý mon_hoc
 */


/**
 * @swagger
 * /mon_hoc:
 *   get:
 *     tags: [MonHoc]
 *     summary: Lấy danh sách mon_hoc
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
 *     tags: [MonHoc]
 *     summary: Tạo mon_hoc mới
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
 *               ten_mon:
 *                 type: string
 *               mo_ta:
 *                 type: string
 *               trang_thai:
 *                 type: string
 */
router.get('/', authMiddleware, getAll)
router.post('/', authMiddleware, create)

/**
 * @swagger
 * /mon_hoc/{id}:
 *   get:
 *     tags: [MonHoc]
 *     summary: Lấy mon_hoc theo ID
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
 *     tags: [MonHoc]
 *     summary: Cập nhật mon_hoc
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
 *               ten_mon:
 *                 type: string
 *               mo_ta:
 *                 type: string
 *               trang_thai:
 *                 type: string
 *   delete:
 *     tags: [MonHoc]
 *     summary: Xóa mon_hoc
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
