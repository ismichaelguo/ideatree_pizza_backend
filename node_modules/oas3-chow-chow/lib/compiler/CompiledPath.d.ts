import { PathItemObject } from 'openapi3-ts';
import { OperationRegisterFunc } from './CompiledPathItem';
import { RequestMeta, ResponseMeta } from '.';
import { ChowOptions } from '..';
export default class CompiledPath {
    private path;
    private regex;
    private compiledPathItem;
    private ignoredMatches;
    constructor(path: string, pathItemObject: PathItemObject, options: Partial<ChowOptions & {
        registerCompiledOperationWithId: OperationRegisterFunc;
    }>);
    getDefinedRequestBodyContentType(method: string): string[];
    test(path: string): boolean;
    validateRequest(path: string, method: string, request: RequestMeta): RequestMeta;
    validateResponse(method: string, response: ResponseMeta): ResponseMeta;
    private extractPathParams;
    private matchFilter;
}
