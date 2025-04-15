import { Request, Response } from "express";
import UserService from "../services/UserService";

export default class UserController 
{
  public static async list(req: Request, res: Response): Promise<void> {

    try {

      const data = await UserService.list();
      res.status(200).json(data);

    } catch (error: any) {

      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }
}