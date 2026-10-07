import { Op } from 'sequelize'
import MonHoc from './mon_hoc.model.js'

export class MonHocRepository {
  async findAll({ limit, offset, sort, order, search }) {
    const where = {}
    if (search) {
      where['ten_mon'] = { [Op.iLike]: `%${search}%` }
    }
    if (search) {
      where['trang_thai'] = { [Op.iLike]: `%${search}%` }
    }

    const sortField = sort || 'id'
    const { count, rows } = await MonHoc.findAndCountAll({
      where,
      limit,
      offset,
      order: [[sortField, order || 'DESC']],
    })

    return { total: count, data: rows }
  }

  async findById(id) {
    return MonHoc.findByPk(id)
  }

  async create(data) {
    return MonHoc.create(data)
  }

  async update(id, data) {
    const [affectedRows] = await MonHoc.update(data, { where: { id } })
    if (affectedRows === 0) return null
    return this.findById(id)
  }

  async delete(id) {
    return MonHoc.destroy({ where: { id } })
  }

}
