import { Request, Response } from "express";
import ProfileService from "../services/ProfileService";

export default class ProfileController 
{
  public static async list(req: Request, res: Response): Promise<void> {

    try {

      const data = await ProfileService.list();
      res.status(200).json(data);

    } catch (error: any) {

      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }
}