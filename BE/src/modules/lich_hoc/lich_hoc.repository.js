import { Op } from 'sequelize'
import LichHoc from './lich_hoc.model.js'

export class LichHocRepository {
  async findAll({ limit, offset, sort, order, search }) {
    const where = {}
    if (search) {
      where['hinh_thuc_hoc'] = { [Op.iLike]: `%${search}%` }
    }
    if (search) {
      where['trang_thai'] = { [Op.iLike]: `%${search}%` }
    }

    const sortField = sort || 'id'
    const { count, rows } = await LichHoc.findAndCountAll({
      where,
      limit,
      offset,
      order: [[sortField, order || 'DESC']],
    })

    return { total: count, data: rows }
  }

  async findById(id) {
    return LichHoc.findByPk(id)
  }

  async create(data) {
    return LichHoc.create(data)
  }

  async update(id, data) {
    const [affectedRows] = await LichHoc.update(data, { where: { id } })
    if (affectedRows === 0) return null
    return this.findById(id)
  }

  async delete(id) {
    return LichHoc.destroy({ where: { id } })
  }

}
