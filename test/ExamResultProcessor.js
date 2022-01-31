const { expect } = require("chai")
const examResults = require("../test/examResults.json")

describe("ExamResultProcessor contract", function () {

  const numTestRepetitions = 10;
  
  beforeEach(async function () {
    examResultProcessorFactory = await ethers.getContractFactory("ExamResultProcessor")
    examResultProcessor = await examResultProcessorFactory.deploy()
    await examResultProcessor.deployed()
  })

  it("should process exam data", async function () {
    for (let i = 0; i < numTestRepetitions; i++) {
      await examResultProcessor.process(examResults)
    }
    expect(await examResultProcessor.totalScore(1)).to.equal(2540);
    expect(await examResultProcessor.totalScore(17)).to.equal(1560);
    expect(await examResultProcessor.subjectsPassed(1, "Physics")).to.equal(true);
    expect(await examResultProcessor.subjectsPassed(30, "Chemistry")).to.equal(false);
  })
})
