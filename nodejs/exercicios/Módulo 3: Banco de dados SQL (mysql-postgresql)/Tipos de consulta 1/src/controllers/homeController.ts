import { Request, Response } from "express";
import { User } from "../models/Users";
import { Product } from "../models/Product";
import { Op } from "sequelize";

export const home = async (req: Request, res: Response) => {
  let users = await User.findAll({
    where: {age:[55,90] },
  });

  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render("pages/home", {
    name: "Bonieky",
    lastName: "Lacerda",
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
    users,
  });
};
