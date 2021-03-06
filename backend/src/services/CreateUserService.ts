import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../entities/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  name: string;
  email: string;
  password: string;
  is_admin: number;
}

export default class CreateUserService {
  public async execute({
    email,
    name,
    password,
    is_admin,
  }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const existUserByEmail = await usersRepository.findByEmail(email);

    if (existUserByEmail) {
      throw new AppError('This email already used!');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      is_admin,
    });

    await usersRepository.save(user);

    return user;
  }
}
