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
 *
 */


import ApiClient from './ApiClient.js';
import DynamicLayer from './model/DynamicLayer.js';
import Error from './model/Error.js';
import ImagePlaceholder from './model/ImagePlaceholder.js';
import NewImage from './model/NewImage.js';
import NewImageDynamicLayersInner from './model/NewImageDynamicLayersInner.js';
import Template from './model/Template.js';
import Templates200Response from './model/Templates200Response.js';
import TextPlaceholder from './model/TextPlaceholder.js';
import ValidationError from './model/ValidationError.js';
import MediamaskApi from './api/MediamaskApi.js';


/**
* Mediamask POST API Client for generating images via Javascript.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Mediamask = require('index'); // See note below*.
* var xxxSvc = new Mediamask.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Mediamask.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Mediamask.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Mediamask.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.6
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The DynamicLayer model constructor.
     * @property {module:model/DynamicLayer}
     */
    DynamicLayer,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The ImagePlaceholder model constructor.
     * @property {module:model/ImagePlaceholder}
     */
    ImagePlaceholder,

    /**
     * The NewImage model constructor.
     * @property {module:model/NewImage}
     */
    NewImage,

    /**
     * The NewImageDynamicLayersInner model constructor.
     * @property {module:model/NewImageDynamicLayersInner}
     */
    NewImageDynamicLayersInner,

    /**
     * The Template model constructor.
     * @property {module:model/Template}
     */
    Template,

    /**
     * The Templates200Response model constructor.
     * @property {module:model/Templates200Response}
     */
    Templates200Response,

    /**
     * The TextPlaceholder model constructor.
     * @property {module:model/TextPlaceholder}
     */
    TextPlaceholder,

    /**
     * The ValidationError model constructor.
     * @property {module:model/ValidationError}
     */
    ValidationError,

    /**
    * The MediamaskApi service constructor.
    * @property {module:api/MediamaskApi}
    */
    MediamaskApi
};
