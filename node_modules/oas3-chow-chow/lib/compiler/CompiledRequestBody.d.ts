import { RequestBodyObject } from 'openapi3-ts';
import { ChowOptions } from '..';
export default class CompiledRequestBody {
    private compiledSchemas;
    private required;
    constructor(requestBody: RequestBodyObject, options: Partial<ChowOptions>);
    validate(mediaType: string | undefined, value: any): any;
    getDefinedContentTypes(): string[];
    private findCompiledSchema;
}
