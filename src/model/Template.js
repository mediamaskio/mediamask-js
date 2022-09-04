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

import ApiClient from '../ApiClient.js';
import DynamicLayer from './DynamicLayer.js';

/**
 * The Template model module.
 * @module model/Template
 * @version 1.0.8
 */
class Template {
    /**
     * Constructs a new <code>Template</code>.
     * @alias module:model/Template
     */
    constructor() { 
        
        Template.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Template</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Template} obj Optional instance to populate.
     * @return {module:model/Template} The populated <code>Template</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Template();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('url_api')) {
                obj['url_api'] = ApiClient.convertToType(data['url_api'], 'Boolean');
            }
            if (data.hasOwnProperty('signed_url_api')) {
                obj['signed_url_api'] = ApiClient.convertToType(data['signed_url_api'], 'Boolean');
            }
            if (data.hasOwnProperty('rest_api')) {
                obj['rest_api'] = ApiClient.convertToType(data['rest_api'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('dynamic_layers')) {
                obj['dynamic_layers'] = ApiClient.convertToType(data['dynamic_layers'], [DynamicLayer]);
            }
        }
        return obj;
    }


}

/**
 * The template id
 * @member {String} id
 */
Template.prototype['id'] = undefined;

/**
 * The template name
 * @member {String} name
 */
Template.prototype['name'] = undefined;

/**
 * The id of the project the template belongs to
 * @member {String} project_id
 */
Template.prototype['project_id'] = undefined;

/**
 * True if the URL API is enabled for the template
 * @member {Boolean} url_api
 */
Template.prototype['url_api'] = undefined;

/**
 * True if Signed URL API is enabled for the template
 * @member {Boolean} signed_url_api
 */
Template.prototype['signed_url_api'] = undefined;

/**
 * True if REST API is enabled for the template
 * @member {Boolean} rest_api
 */
Template.prototype['rest_api'] = undefined;

/**
 * Timestamp when the template was created
 * @member {Date} created_at
 */
Template.prototype['created_at'] = undefined;

/**
 * Timestamp when the template was last updated
 * @member {Date} updated_at
 */
Template.prototype['updated_at'] = undefined;

/**
 * @member {Array.<module:model/DynamicLayer>} dynamic_layers
 */
Template.prototype['dynamic_layers'] = undefined;






export default Template;

