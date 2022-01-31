// SPDX-License-Identifier: MIT

pragma solidity 0.8.2;

contract ExamResultProcessor {

    // smaller ints, enum for subject?
    struct ResultData {
        uint studentId;
        string subject;
        uint score;
    }
    uint constant passMark = 60;

    // pass as param or inline the method
    ResultData currentResult;
    // string key is not good
    mapping (uint => mapping (string => bool)) public subjectsPassed;
    mapping (uint => uint) public totalScore;

    // unbounded array loop, calldata not memory, external not public
    function process(ResultData[] memory results) public {
        for (uint i=0; i<results.length; i++) {
            currentResult = results[i];
            processCurrentResult();
        }
    }

    // probably inline this, certainly pass data as params rather than using storage
    function processCurrentResult() private {
        uint studentId = currentResult.studentId;
        string memory subject = currentResult.subject;
        uint score = currentResult.score;
        subjectsPassed[studentId][subject] = score >= passMark;
        // multiple unnecessary sotrage writes here, just work out the new score and update once
        totalScore[studentId] += score;
    }

}
