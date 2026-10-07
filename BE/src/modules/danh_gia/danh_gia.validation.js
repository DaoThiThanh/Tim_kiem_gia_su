import Joi from 'joi'

export const createDanhGiaSchema = Joi.object({
  lich_hoc_id: Joi.string().uuid().allow(null, ''),
  hoc_vien_id: Joi.string().uuid().required(),
  gia_su_id: Joi.string().uuid().required(),
  so_sao: Joi.number().integer().allow(null, ''),
  nhan_xet: Joi.string().allow(null, ''),
})

export const updateDanhGiaSchema = Joi.object({
  lich_hoc_id: Joi.string().uuid().allow(null, ''),
  hoc_vien_id: Joi.string().uuid().allow(null, ''),
  gia_su_id: Joi.string().uuid().allow(null, ''),
  so_sao: Joi.number().integer().allow(null, ''),
  nhan_xet: Joi.string().allow(null, ''),
}).min(1)

