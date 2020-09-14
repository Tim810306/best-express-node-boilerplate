import { Router } from 'express';
import *  as Joi from 'joi';
import * from 'passport';


const router = Router();

const userSchema = Joi.object().keys({
	username: Joi.string().alphanum().min(3).max(30).optional(),
	password: Joi.string().required(),
	email: Joi.string().email({ minDomainAtoms: 2 }).required(),
	name: Joi.string().alphanum().min(2).max(100).optional(),
	surname: Joi.string().alphanum().min(2).max(100).optional()
});

router.get('/', async (req, res) => {
  const users = await req.context.models.User.findAll();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findByPk(
    req.params.userId,
  );
  return res.send(user);
});


export default router;
