import { BadRequestException } from 'src/common/exception-filters/bad-request.exception';

export class FiedlsValidate {
  private static instance: FiedlsValidate;
  public static getInstance(): FiedlsValidate {
    if (!FiedlsValidate.instance) {
      FiedlsValidate.instance = new FiedlsValidate();
    }
    return FiedlsValidate.instance;
  }

  private onlyString = /^[a-zA-Z ]+$/;
  private onlyStringAndnNoSpace = /^[a-zA-Z]+$/;
  private noWhitSpaceConsecutive = /\s +/;
  private onlyPoint = /^[a-zA-Z.]+$/;
  private noSpace = /^\S+$/;
  private email =
    /^[a-zA-Z0-9._%+-]{1,30}@[a-zA-Z0-9.-]{2,10}\.[a-zA-Z]{2,10}(\.[a-zA-Z]{2,10})?$/;
  private passwordUpperCase = /^(?=.*[A-Z]).*$/;
  private passwordLowerCase = /^(?=.*[a-z]).*$/;
  private passwordNumber = /^(?=.*\d).*$/;
  private passwordSpecialCharacter = /^(?=.*[.+\-[\]*~_@#:?]).*$/;
  private passwordNoOtherCharacter = /[^\w\s.+[\]*~_@#:?]/;
  private defaultLogin = /^[a-zA-Z]+[.][a-zA-Z]+$/;
  private onlyNumber = /^\d+$/;
  private onlyHyphen = /^[A-Za-z0-9-]+$/;
  private noHyphenConsecutive = /--/;

  getValidateUserName(name: string): void {
    if (!this.onlyString.test(name)) {
      throw new BadRequestException('Invalid name');
    }

    if (name.length < 2 || name.length > 50) {
      throw new BadRequestException('Name must be between 2 and 50 characters');
    }

    if (this.noWhitSpaceConsecutive.test(name)) {
      throw new BadRequestException('Name must not have consecutive spaces');
    }
  }

  getValidateUserEmail(email: string): void {
    if (!this.email.test(email)) {
      throw new BadRequestException('Invalid email');
    }

    if (email.length > 100) {
      throw new BadRequestException('Email must be less than 100 characters');
    }

    if (email.includes('..')) {
      throw new BadRequestException('Email must not have consecutive points');
    }

    if (email.includes('.@') || email.includes('@.')) {
      throw new BadRequestException('Email must have a point and an @');
    }

    if (email.startsWith('.') || email.endsWith('.')) {
      throw new BadRequestException('Email must not start or end with a point');
    }
  }
}
