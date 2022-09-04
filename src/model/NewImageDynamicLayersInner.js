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
import ImagePlaceholder from './ImagePlaceholder.js';
import TextPlaceholder from './TextPlaceholder.js';

/**
 * The NewImageDynamicLayersInner model module.
 * @module model/NewImageDynamicLayersInner
 * @version 1.0.8
 */
class NewImageDynamicLayersInner {
    /**
     * Constructs a new <code>NewImageDynamicLayersInner</code>.
     * @alias module:model/NewImageDynamicLayersInner
     * @implements module:model/TextPlaceholder
     * @implements module:model/ImagePlaceholder
     * @param name {String} 
     */
    constructor(name) { 
        TextPlaceholder.initialize(this, name);ImagePlaceholder.initialize(this, name);
        NewImageDynamicLayersInner.initialize(this, name);
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
     * Constructs a <code>NewImageDynamicLayersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewImageDynamicLayersInner} obj Optional instance to populate.
     * @return {module:model/NewImageDynamicLayersInner} The populated <code>NewImageDynamicLayersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewImageDynamicLayersInner();
            TextPlaceholder.constructFromObject(data, obj);
            ImagePlaceholder.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
NewImageDynamicLayersInner.prototype['name'] = undefined;

/**
 * @member {String} text
 */
NewImageDynamicLayersInner.prototype['text'] = undefined;

/**
 * @member {String} url
 */
NewImageDynamicLayersInner.prototype['url'] = undefined;


// Implement TextPlaceholder interface:
/**
 * @member {String} name
 */
TextPlaceholder.prototype['name'] = undefined;
/**
 * @member {String} text
 */
TextPlaceholder.prototype['text'] = undefined;
// Implement ImagePlaceholder interface:
/**
 * @member {String} name
 */
ImagePlaceholder.prototype['name'] = undefined;
/**
 * @member {String} url
 */
ImagePlaceholder.prototype['url'] = undefined;




export default NewImageDynamicLayersInner;

