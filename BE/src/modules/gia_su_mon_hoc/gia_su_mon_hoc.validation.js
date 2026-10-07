import Joi from 'joi'

export const createGiaSuMonHocSchema = Joi.object({
  ho_so_id: Joi.string().uuid().allow(null, ''),
  mon_hoc_id: Joi.number().integer().allow(null, ''),
})

export const updateGiaSuMonHocSchema = Joi.object({
  ho_so_id: Joi.string().uuid().allow(null, ''),
  mon_hoc_id: Joi.number().integer().allow(null, ''),
}).min(1)

