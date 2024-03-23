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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RickAndMortyApi);
  }
}(this, function(expect, RickAndMortyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RickAndMortyApi.CharacterListResponseInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CharacterListResponseInfo', function() {
    it('should create an instance of CharacterListResponseInfo', function() {
      // uncomment below and update the code to test CharacterListResponseInfo
      //var instance = new RickAndMortyApi.CharacterListResponseInfo();
      //expect(instance).to.be.a(RickAndMortyApi.CharacterListResponseInfo);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new RickAndMortyApi.CharacterListResponseInfo();
      //expect(instance).to.be();
    });

    it('should have the property pages (base name: "pages")', function() {
      // uncomment below and update the code to test the property pages
      //var instance = new RickAndMortyApi.CharacterListResponseInfo();
      //expect(instance).to.be();
    });

    it('should have the property next (base name: "next")', function() {
      // uncomment below and update the code to test the property next
      //var instance = new RickAndMortyApi.CharacterListResponseInfo();
      //expect(instance).to.be();
    });

    it('should have the property prev (base name: "prev")', function() {
      // uncomment below and update the code to test the property prev
      //var instance = new RickAndMortyApi.CharacterListResponseInfo();
      //expect(instance).to.be();
    });

  });

}));