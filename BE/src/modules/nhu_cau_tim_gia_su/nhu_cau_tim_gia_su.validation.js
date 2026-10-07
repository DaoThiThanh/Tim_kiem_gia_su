import Joi from 'joi'

export const createNhuCauTimGiaSuSchema = Joi.object({
  hoc_vien_id: Joi.string().uuid().required(),
  mon_hoc_id: Joi.number().integer().required(),
  lop_trinh_do: Joi.string().allow(null, ''),
  muc_tieu_hoc_tap: Joi.string().allow(null, ''),
  ngan_sach: Joi.number().allow(null, ''),
  thoi_gian_hoc: Joi.string().allow(null, ''),
  so_buoi: Joi.number().integer().allow(null, ''),
  hinh_thuc_hoc: Joi.string().allow(null, ''),
  khu_vuc: Joi.string().allow(null, ''),
  yeu_cau_them: Joi.string().allow(null, ''),
  trang_thai: Joi.string().allow(null, ''),
})

export const updateNhuCauTimGiaSuSchema = Joi.object({
  hoc_vien_id: Joi.string().uuid().allow(null, ''),
  mon_hoc_id: Joi.number().integer().allow(null, ''),
  lop_trinh_do: Joi.string().allow(null, ''),
  muc_tieu_hoc_tap: Joi.string().allow(null, ''),
  ngan_sach: Joi.number().allow(null, ''),
  thoi_gian_hoc: Joi.string().allow(null, ''),
  so_buoi: Joi.number().integer().allow(null, ''),
  hinh_thuc_hoc: Joi.string().allow(null, ''),
  khu_vuc: Joi.string().allow(null, ''),
  yeu_cau_them: Joi.string().allow(null, ''),
  trang_thai: Joi.string().allow(null, ''),
}).min(1)

