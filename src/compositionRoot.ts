import { UserRepository } from "./domain/repositories/UserRepository.ts";
import { createUser } from "./domain/use-cases/createUser.ts";
import { getUsers } from "./domain/use-cases/getUsers.ts";
import { InMemoryUserRepository } from "./infrastructure/InMemoryUserRepository.ts";
import { ServiceLocator } from "./serviceLocator.ts";

export const initDI = () => {
  const di = ServiceLocator.getInstance();
  di.registerService("userRepository", new InMemoryUserRepository());
  di.registerService(
    "createUserUseCase",
    createUser({ repository: di.getService("userRepository") }),
  );
  di.registerService(
    "getUsersUseCase",
    getUsers({ repository: di.getService("userRepository") }),
  );
};
