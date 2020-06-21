import { ParameterObject } from 'openapi3-ts';
import { ChowOptions } from '..';
export default class CompiledParameterHeader {
    private compiledSchema;
    private headerSchema;
    /**
     * If in is "header" and the name field is "Accept", "Content-Type" or "Authorization",
     * the parameter definition SHALL be ignored.
     */
    private ignoreHeaders;
    constructor(parameters: ParameterObject[], options: Partial<ChowOptions>);
    /**
     * If there is no header passed in, we make it an empty object
     */
    validate(value?: any): any;
}
