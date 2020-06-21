import { SchemaObject } from 'openapi3-ts';
import * as Ajv from 'ajv';
export default class CompiledSchema {
    private schemaObject?;
    private validator;
    constructor(schema: SchemaObject, opts?: Ajv.Options, context?: any);
    validate(value: any): void;
}
