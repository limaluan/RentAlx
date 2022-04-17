import { container } from "tsyringe";
import CategoriesRepository from "../../modules/cars/repositories/implementations/CategoriesRepository";
import SpecificationsRepository from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import IUsersRepository from "../../modules/account/repositories/IUsersRepository";
import UserRepository from "../../modules/account/repositories/implementations/UsersRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UserRepository,
);
