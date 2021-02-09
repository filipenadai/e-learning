import { getCustomRepository } from 'typeorm';

import { ADMIN } from '../config/constants';
import User from '../entities/User';
import UsersRepository from '../repositories/UsersRepository';
import AppError from '../errors/AppError';

interface Request {
  user_id: string;
}

export default class TransformUserToAdminService {
  public async execute({ user_id }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ where: { id: user_id } });

    if (!user) {
      throw new AppError('User not exists');
    }

    if (user.is_admin) {
      throw new AppError('User is already admin');
    }

    user.is_admin = ADMIN;

    await usersRepository.save(user);

    return user;
  }
}
