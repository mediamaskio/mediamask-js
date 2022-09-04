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

/**
 * The ValidationError model module.
 * @module model/ValidationError
 * @version 1.0.8
 */
class ValidationError {
    /**
     * Constructs a new <code>ValidationError</code>.
     * @alias module:model/ValidationError
     * @param message {String} 
     * @param errors {Object} 
     */
    constructor(message, errors) { 
        
        ValidationError.initialize(this, message, errors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, errors) { 
        obj['message'] = message;
        obj['errors'] = errors;
    }

    /**
     * Constructs a <code>ValidationError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationError} obj Optional instance to populate.
     * @return {module:model/ValidationError} The populated <code>ValidationError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidationError();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} message
 */
ValidationError.prototype['message'] = undefined;

/**
 * @member {Object} errors
 */
ValidationError.prototype['errors'] = undefined;






export default ValidationError;

