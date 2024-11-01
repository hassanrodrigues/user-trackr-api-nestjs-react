import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import { isArray } from 'class-validator';

export function PermissionGuard(permission: any): Type<CanActivate> {
  class PermissionGuardMixin implements CanActivate {
    async canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest<any>();

      const profile = request?.user?.profile;

      if (isArray(permission)) {
        return profile?.some((profile: string) =>
          permission?.includes(profile),
        );
      }

      return profile?.includes(permission);
    }
  }

  return mixin(PermissionGuardMixin);
}
