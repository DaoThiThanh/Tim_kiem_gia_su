import Joi from 'joi'

export const createMonHocSchema = Joi.object({
  ten_mon: Joi.string().required(),
  mo_ta: Joi.string().allow(null, ''),
  trang_thai: Joi.string().allow(null, ''),
})

export const updateMonHocSchema = Joi.object({
  ten_mon: Joi.string().allow(null, ''),
  mo_ta: Joi.string().allow(null, ''),
  trang_thai: Joi.string().allow(null, ''),
}).min(1)

