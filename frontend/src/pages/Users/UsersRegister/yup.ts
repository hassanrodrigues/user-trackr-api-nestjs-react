import * as Yup from "yup";

import { YUP_EMAIL, YUP_SURNAME, YUP_NAME, YUP_PROFILE } from "../../../yup/users";

export const USER_SCHEMA = Yup.object().shape({
  user_name: YUP_NAME,
  user_surname: YUP_SURNAME,
  user_email: YUP_EMAIL,
  user_profile: YUP_PROFILE,
});
