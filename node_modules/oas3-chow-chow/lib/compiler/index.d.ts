import { OpenAPIObject } from "openapi3-ts";
import CompiledPath from "./CompiledPath";
import { ChowOptions } from "..";
import CompiledOperation from "./CompiledOperation";
export interface RequestMeta {
    query?: any;
    header?: any;
    path?: any;
    cookie?: any;
    body?: any;
    operationId?: string;
}
export interface ResponseMeta {
    status: number;
    header?: any;
    body?: any;
}
export default function compile(oas: OpenAPIObject, options: Partial<ChowOptions>): {
    compiledPaths: CompiledPath[];
    compiledOperationById: Map<string, CompiledOperation>;
};
