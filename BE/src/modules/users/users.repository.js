import { Op } from 'sequelize'
import Users from './users.model.js'

export class UsersRepository {
  async findAll({ limit, offset, sort, order, search }) {
    const where = {}
    if (search) {
      where['ho_ten'] = { [Op.iLike]: `%${search}%` }
    }
    if (search) {
      where['email'] = { [Op.iLike]: `%${search}%` }
    }
    if (search) {
      where['so_dien_thoai'] = { [Op.iLike]: `%${search}%` }
    }
    if (search) {
      where['password'] = { [Op.iLike]: `%${search}%` }
    }
    if (search) {
      where['vai_tro'] = { [Op.iLike]: `%${search}%` }
    }
    if (search) {
      where['trang_thai'] = { [Op.iLike]: `%${search}%` }
    }
    if (search) {
      where['lop_hoc'] = { [Op.iLike]: `%${search}%` }
    }

    const sortField = sort || 'id'
    const { count, rows } = await Users.findAndCountAll({
      where,
      limit,
      offset,
      order: [[sortField, order || 'DESC']],
    })

    return { total: count, data: rows }
  }

  async findById(id) {
    return Users.findByPk(id)
  }

  async create(data) {
    return Users.create(data)
  }

  async update(id, data) {
    const [affectedRows] = await Users.update(data, { where: { id } })
    if (affectedRows === 0) return null
    return this.findById(id)
  }

  async delete(id) {
    return Users.destroy({ where: { id } })
  }

  async findByEmail(email) {
    return Users.findOne({ where: { email } })
  }
}
