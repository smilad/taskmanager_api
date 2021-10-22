"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const common_1 = require("@nestjs/common");
exports.user = common_1.createParamDecorator((_data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
});
//# sourceMappingURL=user.decorator.js.map