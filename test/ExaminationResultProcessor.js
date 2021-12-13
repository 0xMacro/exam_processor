const { expect } = require("chai")

describe("ExaminationResultProcessor contract", function () {

  let deployer
  
  beforeEach(async function () {
    ;[deployer] = await ethers.getSigners()
    examinationResultProcessorFactory = await ethers.getContractFactory("ExaminationResultProcessor")
    examinationResultProcessor = await examinationResultProcessorFactory.deploy()
    await examinationResultProcessor.deployed()
  })

  it("should be able to process data", async function () {

    const resultData = [
      {
        studentId: ethers.BigNumber.from(1),
        subject: "history",
        score: ethers.BigNumber.from(87)
      },
      {
        studentId: ethers.BigNumber.from(3),
        subject: "geography",
        score: ethers.BigNumber.from(69)
      }]

    const tx = await examinationResultProcessor.process(resultData)
    // const provider = ethers.providers.getDefaultProvider()
    // const txReceipt = await provider.waitForTransaction(tx.hash)

  })
})
