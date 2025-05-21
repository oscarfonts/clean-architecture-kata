import { User } from "../domain/entities/User.ts";
import type { CreateUser } from "../domain/use-cases/createUser.ts";
import type { GetUsers } from "../domain/use-cases/getUsers.ts";
import { ServiceLocator } from "../serviceLocator.ts";
import type { ViewInterface } from "./viewInterface.ts";

export const init = async ({ view }: { view: ViewInterface }) => {
	view.hello();
	view.renderUsersList([]);
	const newUser = await view.renderUserForm();
	const createUserUseCase = ServiceLocator.getInstance().getService(
		"createUserUseCase",
	) as CreateUser;
	const user = User.create(newUser);
	createUserUseCase(user);
	const getUsersUseCase = ServiceLocator.getInstance().getService(
		"getUsersUseCase",
	) as GetUsers;
	const getUsers = getUsersUseCase();
	view.renderUsersList(getUsers);
	view.renderUserForm();
};
