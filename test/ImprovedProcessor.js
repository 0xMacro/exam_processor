const { expect } = require("chai")
const examResults = require("../test/examResults.json")

describe("ImprovedProcessor contract", function () {

  const numTestRepetitions = 10;
  
  beforeEach(async function () {
    improvedProcessorFactory = await ethers.getContractFactory("ImprovedProcessor")
    improvedProcessor = await improvedProcessorFactory.deploy()
    await improvedProcessor.deployed()
  })

  it("should process exam data", async function () {
    for (let i = 0; i < numTestRepetitions; i++) {
      await improvedProcessor.process(examResults)
    }
    expect(await improvedProcessor.totalScore(1)).to.equal(2540);
    expect(await improvedProcessor.totalScore(17)).to.equal(1560);
    expect(await improvedProcessor.subjectsPassed(1, "Physics")).to.equal(true);
    expect(await improvedProcessor.subjectsPassed(30, "Chemistry")).to.equal(false);
  })
})
