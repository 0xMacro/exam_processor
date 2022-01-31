const { expect } = require("chai")

describe("ImprovedProcessor contract", function () {

  const numTestRepetitions = 10;
  const subjects = ["English", "Physics", "Chemistry", "French", "History"]
  const resultData = generateResultData()
  
  beforeEach(async function () {
    improvedProcessorFactory = await ethers.getContractFactory("ImprovedProcessor")
    improvedProcessor = await improvedProcessorFactory.deploy()
    await improvedProcessor.deployed()
  })

  it("should process exam data", async function () {
    for (let i = 0; i < numTestRepetitions; i++) {
      await improvedProcessor.process(resultData)
    }
  })

  function generateResultData() {
    let _resultData = []
    for (let subjectId = 0; subjectId < 5; subjectId++) {
      for (let studentId = 1; studentId < 31; studentId++) {
        _resultData.push({
          studentId, subject: subjects[subjectId], score: Math.floor(Math.random() * 101) 
        });
      }
    }
    return _resultData
  }
})
