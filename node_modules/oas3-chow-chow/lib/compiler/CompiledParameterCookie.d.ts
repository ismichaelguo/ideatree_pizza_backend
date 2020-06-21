import { ParameterObject } from 'openapi3-ts';
import { ChowOptions } from '..';
export default class CompiledParameterCookie {
    private compiledSchema;
    private cookieSchema;
    constructor(parameters: ParameterObject[], options: Partial<ChowOptions>);
    /**
     * If there is no query passed in, we make it an empty object
     */
    validate(value?: any): any;
}
