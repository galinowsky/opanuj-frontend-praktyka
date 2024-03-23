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
    instance = new RickAndMortyApi.Character();
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

  describe('Character', function() {
    it('should create an instance of Character', function() {
      // uncomment below and update the code to test Character
      //var instance = new RickAndMortyApi.Character();
      //expect(instance).to.be.a(RickAndMortyApi.Character);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new RickAndMortyApi.Character();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new RickAndMortyApi.Character();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new RickAndMortyApi.Character();
      //expect(instance).to.be();
    });

    it('should have the property species (base name: "species")', function() {
      // uncomment below and update the code to test the property species
      //var instance = new RickAndMortyApi.Character();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new RickAndMortyApi.Character();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instance = new RickAndMortyApi.Character();
      //expect(instance).to.be();
    });

    it('should have the property origin (base name: "origin")', function() {
      // uncomment below and update the code to test the property origin
      //var instance = new RickAndMortyApi.Character();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instance = new RickAndMortyApi.Character();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new RickAndMortyApi.Character();
      //expect(instance).to.be();
    });

    it('should have the property episode (base name: "episode")', function() {
      // uncomment below and update the code to test the property episode
      //var instance = new RickAndMortyApi.Character();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new RickAndMortyApi.Character();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new RickAndMortyApi.Character();
      //expect(instance).to.be();
    });

  });

}));
