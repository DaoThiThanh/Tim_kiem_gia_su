import Joi from 'joi'

export const createUsersSchema = Joi.object({
  ho_ten: Joi.string().required(),
  email: Joi.string().required(),
  so_dien_thoai: Joi.string().required(),
  password: Joi.string().required(),
  vai_tro: Joi.string().required(),
  anh_dai_dien: Joi.string().allow(null, ''),
  trang_thai: Joi.string().allow(null, ''),
  lop_hoc: Joi.string().allow(null, ''),
})

export const updateUsersSchema = Joi.object({
  ho_ten: Joi.string().allow(null, ''),
  email: Joi.string().allow(null, ''),
  so_dien_thoai: Joi.string().allow(null, ''),
  password: Joi.string().allow(null, ''),
  vai_tro: Joi.string().allow(null, ''),
  anh_dai_dien: Joi.string().allow(null, ''),
  trang_thai: Joi.string().allow(null, ''),
  lop_hoc: Joi.string().allow(null, ''),
}).min(1)

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
})
