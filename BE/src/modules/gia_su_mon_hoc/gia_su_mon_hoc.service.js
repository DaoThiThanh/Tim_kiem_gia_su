import { GiaSuMonHocRepository } from './gia_su_mon_hoc.repository.js'

const repo = new GiaSuMonHocRepository()

export class GiaSuMonHocService {
  async getAll(query) {
    return repo.findAll(query)
  }

  async getById(id) {
    const item = await repo.findById(id)
    if (!item) {
      const err = new Error('Không tìm thấy gia_su_mon_hoc')
      err.status = 404
      throw err
    }
    return item
  }

  async create(data) {
    return repo.create(data)
  }

  async update(id, data) {
    await this.getById(id) // throws 404 if not found
    return repo.update(id, data)
  }

  async delete(id) {
    await this.getById(id)
    return repo.delete(id)
  }

}
