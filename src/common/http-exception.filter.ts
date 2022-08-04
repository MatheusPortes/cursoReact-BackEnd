import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common'
import { Request, Response } from 'express'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    console.log(exception)
    const status = exception.getStatus()
    const constructor = exception.name
    const message = exception.message
    const error: any = exception.getResponse()

    let custom_message = {}
    custom_message = { constructor_name: constructor }

    if (constructor === 'NotFoundException') {
      custom_message = {
        ...custom_message,
        message: error.error,
        error: message,
      }
    }

    if (constructor === 'BadRequestException') {
      custom_message = {
        ...custom_message,
        message: message,
        error: error.error,
      }
    }

    if (constructor === 'ForbiddenException') {
      custom_message = {
        ...custom_message,
        message: message,
      }
    }

    response.status(status).json({
      statusCode: status,
      ...custom_message,
      timestamp: new Date().toISOString(),
      path: request.url,
    })
  }
}
