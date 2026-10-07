import { Router } from 'express'
import { getAll, getById, create, update, remove } from './gia_su_mon_hoc.controller.js'
import { authMiddleware } from '../../middleware/auth.middleware.js'

const router = Router()

/**
 * @swagger
 * tags:
 *   name: GiaSuMonHoc
 *   description: Quản lý gia_su_mon_hoc
 */


/**
 * @swagger
 * /gia_su_mon_hoc:
 *   get:
 *     tags: [GiaSuMonHoc]
 *     summary: Lấy danh sách gia_su_mon_hoc
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
 *     tags: [GiaSuMonHoc]
 *     summary: Tạo gia_su_mon_hoc mới
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
 *               ho_so_id:
 *                 type: string
 *               mon_hoc_id:
 *                 type: integer
 */
router.get('/', authMiddleware, getAll)
router.post('/', authMiddleware, create)

/**
 * @swagger
 * /gia_su_mon_hoc/{id}:
 *   get:
 *     tags: [GiaSuMonHoc]
 *     summary: Lấy gia_su_mon_hoc theo ID
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
 *     tags: [GiaSuMonHoc]
 *     summary: Cập nhật gia_su_mon_hoc
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
 *               ho_so_id:
 *                 type: string
 *               mon_hoc_id:
 *                 type: integer
 *   delete:
 *     tags: [GiaSuMonHoc]
 *     summary: Xóa gia_su_mon_hoc
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
