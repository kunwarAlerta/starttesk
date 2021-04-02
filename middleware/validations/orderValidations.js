const joi = require("joi");
const { ValidationError } = require("../errors/errors");

const validateCreateOrder = async (req, res, next) => {
  try {
    let schema = joi.object().keys({
      email: joi.string().required(),
      password: joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      throw new ValidationError(error.details ? error.details[0].message : "");
    }
    next();
  } catch (error) {
    next(error);
  }
};

const validateImportOrder = async (req, res, next) => {
    try {
      let schema = joi.object().keys({
        email: joi.string().required(),
        password: joi.string().required(),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        throw new ValidationError(error.details ? error.details[0].message : "");
      }
      next();
    } catch (error) {
      next(error);
    }
  };


module.exports = {
    validateCreateOrder,
    validateImportOrder
};
