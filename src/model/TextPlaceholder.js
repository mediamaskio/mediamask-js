/**
 * Mediamask API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TextPlaceholder model module.
 * @module model/TextPlaceholder
 * @version 0.0.1
 */
class TextPlaceholder {
    /**
     * Constructs a new <code>TextPlaceholder</code>.
     * @alias module:model/TextPlaceholder
     * @param name {String} 
     */
    constructor(name) { 
        
        TextPlaceholder.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TextPlaceholder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TextPlaceholder} obj Optional instance to populate.
     * @return {module:model/TextPlaceholder} The populated <code>TextPlaceholder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TextPlaceholder();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
TextPlaceholder.prototype['name'] = undefined;

/**
 * @member {String} text
 */
TextPlaceholder.prototype['text'] = undefined;






export default TextPlaceholder;

