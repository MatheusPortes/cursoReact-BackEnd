import { HttpException } from "@nestjs/common";

export class ForbiddenException extends HttpException {
    constructor(message: string, code: number) {
        super(message, code);
    }
}