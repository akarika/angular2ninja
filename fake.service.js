"use strict";
var FakeRaceService = (function () {
    function FakeRaceService() {
    }
    FakeRaceService.prototype.list = function () {
        return [{ name: 'London' }];
    };
    return FakeRaceService;
}());
exports.FakeRaceService = FakeRaceService;
//# sourceMappingURL=fake.service.js.map