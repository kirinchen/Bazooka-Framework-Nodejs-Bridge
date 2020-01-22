"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
describe("Test Suite 1", () => {
    it("Test A", () => {
        assert.ok(true, "This shouldn't fail");
    });
    it("Test B", () => {
        assert.ok(1 === 1, "This shouldn't fail");
        assert.ok(false, "This should fail");
    });
});
//# sourceMappingURL=TestInfrastructure.js.map