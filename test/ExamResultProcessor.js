const { expect } = require("chai")

describe("ExamResultProcessor contract", function () {

  const subjects = ["English", "Physics", "Chemistry", "French", "History"]
  const resultData = generateResultData()
  
  beforeEach(async function () {
    examResultProcessorFactory = await ethers.getContractFactory("ExamResultProcessor")
    examResultProcessor = await examResultProcessorFactory.deploy()
    await examResultProcessor.deployed()
  })

  it("should process exam data", async function () {
    await examResultProcessor.process(resultData)
    await examResultProcessor.process(resultData)
    await examResultProcessor.process(resultData)
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
