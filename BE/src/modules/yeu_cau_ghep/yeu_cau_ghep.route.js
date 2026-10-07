import { Router } from 'express'
import { getAll, getById, create, update, remove } from './yeu_cau_ghep.controller.js'
import { authMiddleware } from '../../middleware/auth.middleware.js'

const router = Router()

/**
 * @swagger
 * tags:
 *   name: YeuCauGhep
 *   description: Quản lý yeu_cau_ghep
 */


/**
 * @swagger
 * /yeu_cau_ghep:
 *   get:
 *     tags: [YeuCauGhep]
 *     summary: Lấy danh sách yeu_cau_ghep
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
 *     tags: [YeuCauGhep]
 *     summary: Tạo yeu_cau_ghep mới
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
 *               nhu_cau_id:
 *                 type: string
 *               gia_su_id:
 *                 type: string
 *               ngay_gui:
 *                 type: string
 *               trang_thai:
 *                 type: string
 *               phan_hoi:
 *                 type: string
 */
router.get('/', authMiddleware, getAll)
router.post('/', authMiddleware, create)

/**
 * @swagger
 * /yeu_cau_ghep/{id}:
 *   get:
 *     tags: [YeuCauGhep]
 *     summary: Lấy yeu_cau_ghep theo ID
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
 *     tags: [YeuCauGhep]
 *     summary: Cập nhật yeu_cau_ghep
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
 *               nhu_cau_id:
 *                 type: string
 *               gia_su_id:
 *                 type: string
 *               ngay_gui:
 *                 type: string
 *               trang_thai:
 *                 type: string
 *               phan_hoi:
 *                 type: string
 *   delete:
 *     tags: [YeuCauGhep]
 *     summary: Xóa yeu_cau_ghep
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
