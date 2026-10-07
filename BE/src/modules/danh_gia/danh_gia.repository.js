import { Op } from 'sequelize'
import DanhGia from './danh_gia.model.js'

export class DanhGiaRepository {
  async findAll({ limit, offset, sort, order, search }) {
    const where = {}

    const sortField = sort || 'id'
    const { count, rows } = await DanhGia.findAndCountAll({
      where,
      limit,
      offset,
      order: [[sortField, order || 'DESC']],
    })

    return { total: count, data: rows }
  }

  async findById(id) {
    return DanhGia.findByPk(id)
  }

  async create(data) {
    return DanhGia.create(data)
  }

  async update(id, data) {
    const [affectedRows] = await DanhGia.update(data, { where: { id } })
    if (affectedRows === 0) return null
    return this.findById(id)
  }

  async delete(id) {
    return DanhGia.destroy({ where: { id } })
  }

}
