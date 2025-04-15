import Profile from "../models/Profile";

export default class ProfileService
{
  public static async list(): Promise<Profile[]> {
    const data = await Profile.findAll({
      attributes: [
        'uuid',
        'profile',
        'description',
        'created_at',
        'updated_at',
      ],
      where: {
        deleted_at: null,
      },
      order: [["created_at", "DESC"]],
    });

    return data;
  }
}