const expect = require("chai").expect;
var addHello = require("../app");
describe("App test runing using EXPECT:", function() {
    describe("Check addHello funcion" , function() {
        it("Check return value:",function() {
            result = addHello.addHello("hello");
            expect(result).to.equal("hello hello")
        })
    })
})

