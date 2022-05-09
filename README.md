# exam_processor

To use:

1. `git clone https://github.com/0xMacro/exam_processor.git`
2. `cd exam_processor`
3. `npm install`
4. `npx hardhat test`

At this stage `ExamResultProcessor` and `ImprovedProcessor` should have similar gas consumption as they are identical. 
Modify `contracts/ImprovedProcessor.sol` to reduce its gas counsumption.
Keep `ExamResultProcessor` unchanged as a reference.
