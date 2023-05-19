// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract ExamResultProcessor {
    struct ResultData {
        uint256 studentId;
        string subject;
        uint256 score;
    }
    uint256 constant passMark = 60;

    ResultData currentResult;
    mapping(uint256 => mapping(string => bool)) public subjectsPassed;
    mapping(uint256 => uint256) public totalScore;

    function process(ResultData[] memory results) public {
        for (uint256 i = 0; i < results.length; i++) {
            currentResult = results[i];
            processCurrentResult();
        }
    }

    function processCurrentResult() private {
        uint256 studentId = currentResult.studentId;
        string memory subject = currentResult.subject;
        uint256 score = currentResult.score;
        subjectsPassed[studentId][subject] = score >= passMark;
        totalScore[studentId] += score;
    }
}
