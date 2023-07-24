// Write your tests here!

const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
   it("should return the correct decoded message", () => {
     const actual = polybiusModule.polybius("thinkful"); 
     const expected = "4432423352125413";
    expect(actual).to.eql(expected);
   });
  
  it("should leave the spaces as is", () => {
     const actual = polybiusModule.polybius("hello world"); 
     const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });

it("ignores capital letters", () => {
     const actual = polybiusModule.polybius("HELLO WORLD"); 
     const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });
  it("should decode a message by translating each pair of numbers into a letter", () => {
    const actual = polybiusModule.polybius('23513434112251', false);
    const expected = "message";
        expect(actual).to.equal(expected);
  });
  it("should leave the spaces as is when decoding", () => {
     const actual = polybiusModule.polybius("3251131343 2543241341", false); 
     const expected = "hello world";
    expect(actual).to.equal(expected);
  });

  it("should translate 42 to i/j when decoding", () => {
     const actual = polybiusModule.polybius("3242", false); 
     const expected = "h(i/j)";
    expect(actual).to.equal(expected);
  });

  it("should translate i and j to 42 when encoding", () => {
     const actual = polybiusModule.polybius("hi"); 
     const expected = "3242";
    expect(actual).to.equal(expected);
  });
  
  it("should return false if the number of characters in the string sans spaces is not even", () => {
    const actual = polybiusModule.polybius("44324233521254134", false);
    expect(actual).to.be.false;
  });
});
