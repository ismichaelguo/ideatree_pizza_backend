import { OperationObject, ParameterObject } from 'openapi3-ts';
import { RequestMeta, ResponseMeta } from '.';
import { ChowOptions } from '..';
export default class CompiledOperation {
    private header;
    private compiledHeader;
    private query;
    private compiledQuery;
    private path;
    private compiledPath;
    private cookie;
    private compiledCookie;
    private body?;
    private operationId?;
    private response;
    constructor(operation: OperationObject, inheritedParameter: ParameterObject[], options: Partial<ChowOptions>);
    getDefinedRequestBodyContentType(): string[];
    validateRequest(request: RequestMeta): RequestMeta;
    validateResponse(response: ResponseMeta): ResponseMeta;
}
