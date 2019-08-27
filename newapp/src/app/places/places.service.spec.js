"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var places_service_1 = require("./places.service");
describe('PlacesService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(places_service_1.PlacesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=places.service.spec.js.map