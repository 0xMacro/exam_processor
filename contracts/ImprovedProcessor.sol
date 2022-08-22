// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract ImprovedProcessor {

    struct ResultData {
        uint studentId;
        string subject;
        uint score;
    }
    uint constant passMark = 60;

    ResultData currentResult;
    mapping (uint => mapping (string => bool)) public subjectsPassed;
    mapping (uint => uint) public totalScore;

    function process(ResultData[] memory results) public {
        for (uint i=0; i<results.length; i++) {
            currentResult = results[i];
            processCurrentResult();
        }
    }

    function processCurrentResult() private {
        uint studentId = currentResult.studentId;
        string memory subject = currentResult.subject;
        uint score = currentResult.score;
        subjectsPassed[studentId][subject] = score >= passMark;
        totalScore[studentId] += score;
    }

}
