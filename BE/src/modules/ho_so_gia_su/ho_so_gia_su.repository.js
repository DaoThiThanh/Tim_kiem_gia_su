import { Op } from 'sequelize'
import HoSoGiaSu from './ho_so_gia_su.model.js'

export class HoSoGiaSuRepository {
  async findAll({ limit, offset, sort, order, search }) {
    const where = {}
    if (search) {
      where['trinh_do'] = { [Op.iLike]: `%${search}%` }
    }
    if (search) {
      where['hinh_thuc_day'] = { [Op.iLike]: `%${search}%` }
    }
    if (search) {
      where['trang_thai_duyet'] = { [Op.iLike]: `%${search}%` }
    }

    const sortField = sort || 'id'
    const { count, rows } = await HoSoGiaSu.findAndCountAll({
      where,
      limit,
      offset,
      order: [[sortField, order || 'DESC']],
    })

    return { total: count, data: rows }
  }

  async findById(id) {
    return HoSoGiaSu.findByPk(id)
  }

  async create(data) {
    return HoSoGiaSu.create(data)
  }

  async update(id, data) {
    const [affectedRows] = await HoSoGiaSu.update(data, { where: { id } })
    if (affectedRows === 0) return null
    return this.findById(id)
  }

  async delete(id) {
    return HoSoGiaSu.destroy({ where: { id } })
  }

}
