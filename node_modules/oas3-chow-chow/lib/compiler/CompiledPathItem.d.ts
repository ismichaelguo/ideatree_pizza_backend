import { PathItemObject } from 'openapi3-ts';
import CompiledOperation from './CompiledOperation';
import { RequestMeta, ResponseMeta } from '.';
import { ChowOptions } from '..';
export declare type OperationRegisterFunc = (operationId: string, compiledOperation: CompiledOperation) => void;
export default class CompiledPathItem {
    static readonly SupportedMethod: readonly ["get", "post", "put", "patch", "delete", "head", "options", "trace"];
    private compiledOperationsByMethod;
    private path;
    constructor(pathItemObject: PathItemObject, path: string, options: Partial<ChowOptions & {
        registerCompiledOperationWithId: OperationRegisterFunc;
    }>);
    getDefinedRequestBodyContentType(method: string): string[];
    validateRequest(method: string, request: RequestMeta): RequestMeta;
    validateResponse(method: string, response: ResponseMeta): ResponseMeta;
}
