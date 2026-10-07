import { Op } from 'sequelize'
import GiaSuMonHoc from './gia_su_mon_hoc.model.js'

export class GiaSuMonHocRepository {
  async findAll({ limit, offset, sort, order, search }) {
    const where = {}

    const sortField = sort || 'id'
    const { count, rows } = await GiaSuMonHoc.findAndCountAll({
      where,
      limit,
      offset,
      order: [[sortField, order || 'DESC']],
    })

    return { total: count, data: rows }
  }

  async findById(id) {
    return GiaSuMonHoc.findByPk(id)
  }

  async create(data) {
    return GiaSuMonHoc.create(data)
  }

  async update(id, data) {
    const [affectedRows] = await GiaSuMonHoc.update(data, { where: { id } })
    if (affectedRows === 0) return null
    return this.findById(id)
  }

  async delete(id) {
    return GiaSuMonHoc.destroy({ where: { id } })
  }

}
