import { ValueTransformer } from 'typeorm';

export class BitToBooleanTransformer implements ValueTransformer {
  public from(value?: string | null): boolean | undefined {
    return Boolean(Number(value));
  }

  public to(value?: boolean | null): null | number {
    if (!value) {
      return null;
    } else {
      return value ? 1 : 0;
    }
  }
}
