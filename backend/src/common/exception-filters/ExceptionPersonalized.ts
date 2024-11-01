import { HttpException, HttpStatus } from '@nestjs/common';

export class ExceptionPersonalized extends HttpException {
  constructor(
    http: HttpStatus,
    message: string | string[],
    errorProperty?: string,
    value?: any,
    endPoint?: string,
  ) {
    super(
      {
        codeStatus: http,
        message: message,
        [errorProperty]: value,
        endPoint: endPoint,
      },
      http,
    );
  }
}
