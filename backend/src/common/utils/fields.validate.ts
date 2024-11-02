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
  private noWhitSpaceConsecutive = /\s +/;
  private email =
    /^[a-zA-Z0-9._%+-]{1,30}@[a-zA-Z0-9.-]{2,10}\.[a-zA-Z]{2,10}(\.[a-zA-Z]{2,10})?$/;
  private passwordUpperCase = /^(?=.*[A-Z]).*$/;
  private passwordLowerCase = /^(?=.*[a-z]).*$/;
  private passwordNumber = /^(?=.*\d).*$/;
  private passwordSpecialCharacter = /^(?=.*[.+\-[\]*~_@#:?]).*$/;

  private validate(regex: RegExp, value: string): boolean {
    return regex.test(value);
  }

  getValidateUserName(name: string): void {
    if (!this.onlyString.test(name)) {
      throw new BadRequestException('Nome inválido');
    }

    if (name.length < 2 || name.length > 50) {
      throw new BadRequestException('O nome deve ter entre 2 e 50 caracteres');
    }

    if (this.noWhitSpaceConsecutive.test(name)) {
      throw new BadRequestException(
        'O nome não pode ter espaços em branco consecutivos',
      );
    }
  }

  getValidateUserEmail(email: string): void {
    if (!this.email.test(email)) {
      throw new BadRequestException('Email inválido');
    }

    if (email.length > 100) {
      throw new BadRequestException('Email deve ter no máximo 100 caracteres');
    }

    if (email.includes('..')) {
      throw new BadRequestException('Email não pode ter dois pontos seguidos');
    }

    if (email.includes('.@') || email.includes('@.')) {
      throw new BadRequestException(
        'Email não pode ter ponto antes ou depois do @',
      );
    }

    if (email.startsWith('.') || email.endsWith('.')) {
      throw new BadRequestException('Email não pode começar ou terminar com .');
    }
  }
  getValidPassword(password: string) {
    if (password?.length < 8 || password?.length > 12) {
      throw new BadRequestException('A senha deve ter entre 8 e 12 caracteres');
    }

    if (!this.validate(this.passwordNumber, password)) {
      throw new BadRequestException('A senha deve conter pelo menos um número');
    }
    if (!this.validate(this.passwordUpperCase, password)) {
      throw new BadRequestException(
        'A senha deve conter pelo menos uma letra maiúscula',
      );
    }
    if (!this.validate(this.passwordLowerCase, password)) {
      throw new BadRequestException(
        'A senha deve conter pelo menos uma letra minúscula',
      );
    }

    if (!this.validate(this.passwordSpecialCharacter, password)) {
      throw new BadRequestException(
        'A senha deve conter pelo menos um caractere especial',
      );
    }

    return password;
  }
}
