var expect = require("chai").expect;
var _ = require("../index");

var invoke = _.invoke;
var takeWhile = _.takeWhile;
var add = _.add;


describe("nodash", function() {
  it("should allow wrapped lodash functions to be called with the first argument moved to the `this` value", function() {
    expect(
      invoke.call(["foo", "bar", "fizz"], "replace", "f", "")
    ).to.deep.equal(["oo", "bar", "izz"]);

    expect(
      add.call(1, 2)
    ).to.be.equal(3);
  });

  it("should allow wrapped lodash functions to be called as regular functions", function() {
    expect(
      invoke(["foo", "bar", "fizz"], "replace", "f", "")
    ).to.deep.equal(["oo", "bar", "izz"]);

    expect(
      add(1, 2)
    ).to.be.equal(3);
  });
});


