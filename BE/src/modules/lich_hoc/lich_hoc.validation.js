import Joi from 'joi'

export const createLichHocSchema = Joi.object({
  yeu_cau_id: Joi.string().uuid().required(),
  ngay_hoc: Joi.date().required(),
  gio_bat_dau: Joi.string().required(),
  gio_ket_thuc: Joi.string().required(),
  dia_diem: Joi.string().allow(null, ''),
  hinh_thuc_hoc: Joi.string().allow(null, ''),
  trang_thai: Joi.string().allow(null, ''),
})

export const updateLichHocSchema = Joi.object({
  yeu_cau_id: Joi.string().uuid().allow(null, ''),
  ngay_hoc: Joi.date().allow(null, ''),
  gio_bat_dau: Joi.string().allow(null, ''),
  gio_ket_thuc: Joi.string().allow(null, ''),
  dia_diem: Joi.string().allow(null, ''),
  hinh_thuc_hoc: Joi.string().allow(null, ''),
  trang_thai: Joi.string().allow(null, ''),
}).min(1)

