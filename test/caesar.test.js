// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
  it("should return the correct decoded message based on inputted shift value", () => {
        const actual = caesarModule.caesar("hello world!", 5);
    const expected = "mjqqt btwqi!";
    expect(actual).to.equal(expected);
  });

    it("should return the correct decoded message based on inputted shift value", () => {
        const actual = caesarModule.caesar("mjqqt btwqi!", 5, false);
    const expected = "hello world!"; 
        expect(actual).to.equal(expected);
  });

it("should return false if the shift is greater than 25", () => {
        const actual = caesarModule.caesar("hello world!", 26);
        expect(actual).to.be.false; 
    });

    it("should return false if the shift is less than -25", () => {
        const actual = caesarModule.caesar("hello world!", -26);
        expect(actual).to.be.false; 
    });

    it("should return false if the shift is 0", () => {
        const actual = caesarModule.caesar("hello world", 0);
        expect(actual).to.be.false; 
    });

    it("should leaves spaces where they originally were", () => {
        const actual = caesarModule.caesar("hello world!", 5);
        const expected = " "
        expect(actual.charAt(5)).to.equal(expected);
    });

    it("should leave special characters in message", () => {
        const actual = caesarModule.caesar("hello world!", 8);
        const expected = "!"
        expect(actual.charAt(11)).to.equal(expected);
    });
  });


