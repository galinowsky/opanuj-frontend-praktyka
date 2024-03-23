/**
 * Rick and Morty API
 * Access information about characters from Rick and Morty.
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
import Character from './Character';
import CharacterListResponseInfo from './CharacterListResponseInfo';

/**
 * The CharacterListResponse model module.
 * @module model/CharacterListResponse
 * @version 1.0.0
 */
class CharacterListResponse {
    /**
     * Constructs a new <code>CharacterListResponse</code>.
     * @alias module:model/CharacterListResponse
     */
    constructor() { 
        
        CharacterListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CharacterListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CharacterListResponse} obj Optional instance to populate.
     * @return {module:model/CharacterListResponse} The populated <code>CharacterListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CharacterListResponse();

            if (data.hasOwnProperty('info')) {
                obj['info'] = CharacterListResponseInfo.constructFromObject(data['info']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Character]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CharacterListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CharacterListResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `info`
        if (data['info']) { // data not null
          CharacterListResponseInfo.validateJSON(data['info']);
        }
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                Character.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/CharacterListResponseInfo} info
 */
CharacterListResponse.prototype['info'] = undefined;

/**
 * @member {Array.<module:model/Character>} results
 */
CharacterListResponse.prototype['results'] = undefined;






export default CharacterListResponse;

