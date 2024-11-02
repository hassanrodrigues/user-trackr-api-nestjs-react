import * as Yup from "yup";

const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;

const TEXT_MIN_MAX_REQUIRED = {
  requiredCorporateReason: "• Mín. 5 Caracteres | • Máx. 150 Caracteres",
  requiredFantasyName: "• Mín. 5 Caracteres | • Máx. 50 Caracteres",
  requiredCNPJ: "• Qtd. insuficiente de números",
  requiredPhone: "• Qtd. insuficiente de números",
  requiredCompanyAddress: "• Mín. 5 Caracteres | • Máx. 150 Caracteres",
  requiredEmail: "E-mail Inválido",
};

const NO_ENDING_SPACES = "• O campo não pode terminar com espaços em branco";

export const YUP_NAME = Yup.string()
  .required(TEXT_MIN_MAX_REQUIRED.requiredFantasyName)
  .min(5, TEXT_MIN_MAX_REQUIRED.requiredCorporateReason)
  .max(40, TEXT_MIN_MAX_REQUIRED.requiredCorporateReason)
  .matches(/^[^\s]+(\s+[^\s]+)*$/, NO_ENDING_SPACES);

export const YUP_SURNAME = Yup.string()
  .required(TEXT_MIN_MAX_REQUIRED.requiredFantasyName)
  .min(3, TEXT_MIN_MAX_REQUIRED.requiredFantasyName)
  .max(10, TEXT_MIN_MAX_REQUIRED.requiredFantasyName)
  .matches(/^[^\s]+(\s+[^\s]+)*$/, NO_ENDING_SPACES);

export const YUP_EMAIL = Yup.string()
  .matches(emailRegex, TEXT_MIN_MAX_REQUIRED.requiredEmail)
  .min(10, TEXT_MIN_MAX_REQUIRED.requiredEmail)
  .max(100, TEXT_MIN_MAX_REQUIRED.requiredEmail);

export const YUP_PROFILE = Yup.string();
