import Joi from 'joi'

export const createYeuCauGhepSchema = Joi.object({
  nhu_cau_id: Joi.string().uuid().required(),
  gia_su_id: Joi.string().uuid().required(),
  ngay_gui: Joi.date().allow(null, ''),
  trang_thai: Joi.string().allow(null, ''),
  phan_hoi: Joi.string().allow(null, ''),
})

export const updateYeuCauGhepSchema = Joi.object({
  nhu_cau_id: Joi.string().uuid().allow(null, ''),
  gia_su_id: Joi.string().uuid().allow(null, ''),
  ngay_gui: Joi.date().allow(null, ''),
  trang_thai: Joi.string().allow(null, ''),
  phan_hoi: Joi.string().allow(null, ''),
}).min(1)

