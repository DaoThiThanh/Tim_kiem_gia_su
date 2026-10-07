import Joi from 'joi'

export const createHoSoGiaSuSchema = Joi.object({
  user_id: Joi.string().uuid().required(),
  gioi_thieu: Joi.string().allow(null, ''),
  trinh_do: Joi.string().allow(null, ''),
  kinh_nghiem: Joi.string().allow(null, ''),
  bang_cap: Joi.string().allow(null, ''),
  hoc_phi: Joi.number().allow(null, ''),
  hinh_thuc_day: Joi.string().allow(null, ''),
  khu_vuc: Joi.string().allow(null, ''),
  thoi_gian_day: Joi.string().allow(null, ''),
  trang_thai_duyet: Joi.string().allow(null, ''),
})

export const updateHoSoGiaSuSchema = Joi.object({
  user_id: Joi.string().uuid().allow(null, ''),
  gioi_thieu: Joi.string().allow(null, ''),
  trinh_do: Joi.string().allow(null, ''),
  kinh_nghiem: Joi.string().allow(null, ''),
  bang_cap: Joi.string().allow(null, ''),
  hoc_phi: Joi.number().allow(null, ''),
  hinh_thuc_day: Joi.string().allow(null, ''),
  khu_vuc: Joi.string().allow(null, ''),
  thoi_gian_day: Joi.string().allow(null, ''),
  trang_thai_duyet: Joi.string().allow(null, ''),
}).min(1)

