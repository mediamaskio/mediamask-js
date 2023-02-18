/* tslint:disable */
/* eslint-disable */
/**
 * Mediamask API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface DynamicLayer
 */
export interface DynamicLayer {
    /**
     * The dynamic layer id
     * @type {string}
     * @memberof DynamicLayer
     */
    'id'?: string;
    /**
     * The name of the dynamic layer
     * @type {string}
     * @memberof DynamicLayer
     */
    'name'?: string;
    /**
     * Type of the dynamic layer. Can be \'image\' or \'text\'
     * @type {string}
     * @memberof DynamicLayer
     */
    'type'?: string;
    /**
     * The position of the dynamic layer
     * @type {number}
     * @memberof DynamicLayer
     */
    'index'?: number;
}
/**
 * 
 * @export
 * @interface ImagePlaceholder
 */
export interface ImagePlaceholder {
    /**
     * 
     * @type {string}
     * @memberof ImagePlaceholder
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ImagePlaceholder
     */
    'url'?: string;
}
/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    'message': string;
}
/**
 * 
 * @export
 * @interface NewImage
 */
export interface NewImage {
    /**
     * 
     * @type {string}
     * @memberof NewImage
     */
    'template': string;
    /**
     * 
     * @type {Array<NewImageDynamicLayersInner>}
     * @memberof NewImage
     */
    'dynamic_layers'?: Array<NewImageDynamicLayersInner>;
}
/**
 * @type NewImageDynamicLayersInner
 * @export
 */
export type NewImageDynamicLayersInner = ImagePlaceholder | TextPlaceholder;

/**
 * 
 * @export
 * @interface Template
 */
export interface Template {
    /**
     * The template id
     * @type {string}
     * @memberof Template
     */
    'id'?: string;
    /**
     * The template name
     * @type {string}
     * @memberof Template
     */
    'name'?: string;
    /**
     * The id of the project the template belongs to
     * @type {string}
     * @memberof Template
     */
    'project_id'?: string;
    /**
     * True if the URL API is enabled for the template
     * @type {boolean}
     * @memberof Template
     */
    'url_api'?: boolean;
    /**
     * True if Signed URL API is enabled for the template
     * @type {boolean}
     * @memberof Template
     */
    'signed_url_api'?: boolean;
    /**
     * True if REST API is enabled for the template
     * @type {boolean}
     * @memberof Template
     */
    'rest_api'?: boolean;
    /**
     * Timestamp when the template was created
     * @type {string}
     * @memberof Template
     */
    'created_at'?: string;
    /**
     * Timestamp when the template was last updated
     * @type {string}
     * @memberof Template
     */
    'updated_at'?: string;
    /**
     * 
     * @type {Array<DynamicLayer>}
     * @memberof Template
     */
    'dynamic_layers'?: Array<DynamicLayer>;
}
/**
 * 
 * @export
 * @interface Templates200Response
 */
export interface Templates200Response {
    /**
     * 
     * @type {Array<Template>}
     * @memberof Templates200Response
     */
    'data'?: Array<Template>;
}
/**
 * 
 * @export
 * @interface TextPlaceholder
 */
export interface TextPlaceholder {
    /**
     * 
     * @type {string}
     * @memberof TextPlaceholder
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof TextPlaceholder
     */
    'text'?: string;
}
/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'message': string;
    /**
     * 
     * @type {object}
     * @memberof ValidationError
     */
    'errors': object;
}

/**
 * MediamaskApi - axios parameter creator
 * @export
 */
export const MediamaskApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Render HTML for a template with dynamic layer values
         * @param {NewImage} newImage Provide the template and placeholders values that should be rendered in the image
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        html: async (newImage: NewImage, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newImage' is not null or undefined
            assertParamExists('html', 'newImage', newImage)
            const localVarPath = `/html`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(newImage, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Render a new image
         * @param {NewImage} newImage Provide the template and placeholders values that should be rendered in the image
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renderImage: async (newImage: NewImage, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'newImage' is not null or undefined
            assertParamExists('renderImage', 'newImage', newImage)
            const localVarPath = `/image`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(newImage, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all tempaltes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templates: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/templates`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MediamaskApi - functional programming interface
 * @export
 */
export const MediamaskApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MediamaskApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Render HTML for a template with dynamic layer values
         * @param {NewImage} newImage Provide the template and placeholders values that should be rendered in the image
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async html(newImage: NewImage, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.html(newImage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Render a new image
         * @param {NewImage} newImage Provide the template and placeholders values that should be rendered in the image
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async renderImage(newImage: NewImage, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.renderImage(newImage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all tempaltes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async templates(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Templates200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.templates(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MediamaskApi - factory interface
 * @export
 */
export const MediamaskApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MediamaskApiFp(configuration)
    return {
        /**
         * 
         * @summary Render HTML for a template with dynamic layer values
         * @param {NewImage} newImage Provide the template and placeholders values that should be rendered in the image
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        html(newImage: NewImage, options?: any): AxiosPromise<string> {
            return localVarFp.html(newImage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Render a new image
         * @param {NewImage} newImage Provide the template and placeholders values that should be rendered in the image
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renderImage(newImage: NewImage, options?: any): AxiosPromise<any> {
            return localVarFp.renderImage(newImage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all tempaltes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templates(options?: any): AxiosPromise<Templates200Response> {
            return localVarFp.templates(options).then((request) => request(axios, basePath));
        },
    };
};

interface SignedUrlParameters {
    [name: string]: string
}

/**
 * MediamaskApi - object-oriented interface
 * @export
 * @class MediamaskApi
 * @extends {BaseAPI}
 */
export class MediamaskApi extends BaseAPI {
    /**
     * 
     * @summary Render HTML for a template with dynamic layer values
     * @param {NewImage} newImage Provide the template and placeholders values that should be rendered in the image
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediamaskApi
     */
    public html(newImage: NewImage, options?: AxiosRequestConfig) {
        return MediamaskApiFp(this.configuration).html(newImage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Render a new image
     * @param {NewImage} newImage Provide the template and placeholders values that should be rendered in the image
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediamaskApi
     */
    public renderImage(newImage: NewImage, options?: AxiosRequestConfig) {
        return MediamaskApiFp(this.configuration).renderImage(newImage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all tempaltes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediamaskApi
     */
    public templates(options?: AxiosRequestConfig) {
        return MediamaskApiFp(this.configuration).templates(options).then((request) => request(this.axios, this.basePath));
    }



    public createSignedUrl(templateUid: string, parameters: SignedUrlParameters){
        const crypto = require('crypto');
        const baseUrl = 'https://mediamask.io/image/';

        // Generate URL API Request URL
        const requestUrl = new URL(baseUrl + templateUid);
        const urlParameters = [];

        for(const parameter in parameters){
            urlParameters.push(this.encodeRFC3986URIComponent(parameter) + '=' + this.encodeRFC3986URIComponent(parameters[parameter]));
        }

        requestUrl.search = urlParameters.join('&');

        // Generate Signed URL
        const signature = crypto
            .createHash('sha256')
            .update(requestUrl.toString() + this.configuration.accessToken)
            .digest('hex');
        requestUrl.searchParams.set( 'signature', signature);

        return requestUrl.toString();
    }

    public encodeRFC3986URIComponent(str: string) {
        return encodeURIComponent(str)
            .replace(
                /[!'()*]/g,
                (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`
            );
    }
}




