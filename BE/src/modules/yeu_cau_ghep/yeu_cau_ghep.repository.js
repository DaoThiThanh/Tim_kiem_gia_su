import { Op } from 'sequelize'
import YeuCauGhep from './yeu_cau_ghep.model.js'

export class YeuCauGhepRepository {
  async findAll({ limit, offset, sort, order, search }) {
    const where = {}
    if (search) {
      where['trang_thai'] = { [Op.iLike]: `%${search}%` }
    }

    const sortField = sort || 'id'
    const { count, rows } = await YeuCauGhep.findAndCountAll({
      where,
      limit,
      offset,
      order: [[sortField, order || 'DESC']],
    })

    return { total: count, data: rows }
  }

  async findById(id) {
    return YeuCauGhep.findByPk(id)
  }

  async create(data) {
    return YeuCauGhep.create(data)
  }

  async update(id, data) {
    const [affectedRows] = await YeuCauGhep.update(data, { where: { id } })
    if (affectedRows === 0) return null
    return this.findById(id)
  }

  async delete(id) {
    return YeuCauGhep.destroy({ where: { id } })
  }

}
