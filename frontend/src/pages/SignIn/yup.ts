import * as Yup from 'yup';
import { GLOBAL_TEXTS } from '../../components/configs';

export const SIGN_IN_SCHEMA = Yup.object({
  username: Yup.string().nullable().required(GLOBAL_TEXTS.FORM.required_field),
  password: Yup.string().required()
});
