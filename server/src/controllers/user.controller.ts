import { NOT_FOUND, OK } from "../constant/http";
import UserModel from "../models/user.models";
import appAssert from "../utils/appAssert";
import { catchErrors } from "../utils/catchErrors";

const getUserHandler = catchErrors(async (req, res) => {
  const user = await UserModel.findById(req.userId);
  appAssert(user, NOT_FOUND, "User not found");
  return res.status(OK).json(user.omitPassword());
});

export { getUserHandler };
