import { Op } from 'sequelize'
import NhuCauTimGiaSu from './nhu_cau_tim_gia_su.model.js'

export class NhuCauTimGiaSuRepository {
  async findAll({ limit, offset, sort, order, search }) {
    const where = {}
    if (search) {
      where['lop_trinh_do'] = { [Op.iLike]: `%${search}%` }
    }
    if (search) {
      where['hinh_thuc_hoc'] = { [Op.iLike]: `%${search}%` }
    }
    if (search) {
      where['trang_thai'] = { [Op.iLike]: `%${search}%` }
    }

    const sortField = sort || 'id'
    const { count, rows } = await NhuCauTimGiaSu.findAndCountAll({
      where,
      limit,
      offset,
      order: [[sortField, order || 'DESC']],
    })

    return { total: count, data: rows }
  }

  async findById(id) {
    return NhuCauTimGiaSu.findByPk(id)
  }

  async create(data) {
    return NhuCauTimGiaSu.create(data)
  }

  async update(id, data) {
    const [affectedRows] = await NhuCauTimGiaSu.update(data, { where: { id } })
    if (affectedRows === 0) return null
    return this.findById(id)
  }

  async delete(id) {
    return NhuCauTimGiaSu.destroy({ where: { id } })
  }

}
