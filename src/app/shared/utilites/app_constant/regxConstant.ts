export class FormConstant {
  static readonly EMAIL_REGX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/;
  static readonly NAME_REGX = /^[a-zA-Z .]+/;
  static readonly PHONE_REGX = /[0-9]{3}[0-9]{3}[0-9]{4}/;
}
