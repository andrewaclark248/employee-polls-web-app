import {describe, expect, test} from '@jest/globals'

import { _saveQuestion, _saveQuestionAnswer, _getUsers } from './DATA.js'

import { questionAnsweredMethod, sortQuestions } from './utils/util.js'

describe('Test methods in Util.js and DATA.js', () => {
   /** test('_saveQuestion() success', async () => {

        var newQuestion = {
            optionOneText: "Candy",
            optionTwoText: "Meat",
            author: "tylermcginnis"
        }

        var formattedQuestion = {
            author: 'tylermcginnis',
            optionOne: { votes: [], text: 'Candy' },
            optionTwo: { votes: [], text: 'Meat' }
          }
        var result = await _saveQuestion(newQuestion);
        delete result.id
        delete result.timestamp
        console.log("result ", result)
        expect(result).toEqual(formattedQuestion);
    }); 

    test('_saveQuestion() failure', async () => {

        var newQuestion = {
            optionOneText: null,
            optionTwoText: "Meat",
            author: "tylermcginnis"
        }
        try {
            var result = await _saveQuestion(newQuestion);

        } catch(e) {
            var error = e
        }
        expect(error).toEqual("Please provide optionOneText, optionTwoText, and author")
    });


    test('_saveQuestionAnswer() success', async () => {

        var newQuestion = {
            optionOneText: "Candy",
            optionTwoText: "Meat",
            author: "tylermcginnis"
        }
        var saveQuestionResult = await _saveQuestion(newQuestion);
        var saveQuestionAnswer = await _saveQuestionAnswer({authedUser: "tylermcginnis", qid: saveQuestionResult.id, answer: "optionOne"});

        expect(saveQuestionAnswer).toEqual(true)
    });  

    test('_saveQuestionAnswer() failure', async () => {
        try {
            var saveQuestionAnswer = await _saveQuestionAnswer({authedUser: null, qid: null, answer: null});
        }
        catch(e) {
            var error = e;
        }

        expect(error).toEqual("Please provide authedUser, qid, and answer")
    });


    test('questionAnsweredMethod() success - verify questions answered', () => {
        var formattedQuestion = {
            author: 'tylermcginnis',
            optionOne: { votes: ['tylermcginnis'], text: 'Candy' },
            optionTwo: { votes: [], text: 'Meat' }
          }
        var result = questionAnsweredMethod(formattedQuestion, 'tylermcginnis');

        expect(result).toEqual(true)
    });


    test('questionAnsweredMethod() failure - with invalid parameters', () => {
        var formattedQuestion = {
            author: 'tylermcginnis',
            optionOne: { votes: ['tylermcginnis'], text: 'Candy' },
            optionTwo: { votes: [], text: 'Meat' }
          }
        var result = questionAnsweredMethod(formattedQuestion);
        
        expect(result).toEqual(false)
    }); 

    test('questionAnsweredMethod() success - verify option Two', () => {
        var formattedQuestion = {
            author: 'tylermcginnis',
            optionOne: { votes: [], text: 'Candy' },
            optionTwo: { votes: ['tylermcginnis'], text: 'Meat' }
          }
        var result = questionAnsweredMethod(formattedQuestion, 'tylermcginnis');
        
        expect(result).toEqual(true)
    }); 

    test('questionAnsweredMethod() success - verify question not answered', () => {
        var formattedQuestion = {
            author: 'tylermcginnis',
            optionOne: { votes: [], text: 'Candy' },
            optionTwo: { votes: [], text: 'Meat' }
          }
        var result = questionAnsweredMethod(formattedQuestion, 'tylermcginnis');
        
        expect(result).toEqual(false)
    }); 

    test('sortQuestions() success', () => {
        var questions = [
            { timestamp: 9 },
            { timestamp: 7 },
            { timestamp: 2 },
            { timestamp: 3 }
        ]
        var expectedResult = [
            { timestamp: 9 },
            { timestamp: 7 },
            { timestamp: 3 },
            { timestamp: 2 }
          ]
        var result = sortQuestions(questions);

        expect(result).toEqual(expectedResult)
    });

    test('sortQuestions() failure - with invalid params', () => {
        try {
            var result = sortQuestions(null);
        } catch (e) {
            var error = e.toString();
        }
        console.log("error", error.toString())
        expect(error).toEqual("TypeError: Cannot read properties of null (reading 'sort')")
    }); */

});