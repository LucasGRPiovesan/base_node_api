import Profile from "../models/Profile";
import User from "../models/User";

export default class UserService
{
  public static async list(): Promise<User[]> {
    const data = await User.findAll({
      attributes: [
        'uuid',
        'name',
        'mail',
        'password',
        'status',
        'created_at',
        'updated_at',
      ],
      where: {
        deleted_at: null,
      },
      order: [["created_at", "DESC"]],
      include: [
        {
          model: Profile,
          as: "profile",
          attributes: ["uuid", "profile"],
        },
      ]
    });

    return data;
  }
}