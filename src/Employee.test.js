import {describe, expect, test} from '@jest/globals'

import { _saveQuestion, _saveQuestionAnswer, _getUsers } from './DATA.js'

import { questionAnsweredMethod } from './utils/util.js'

describe('something', () => {
    /**
    test('_saveQuestion() success', async () => {

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


    test('questionAnsweredMethod() success', () => {
        var formattedQuestion = {
            author: 'tylermcginnis',
            optionOne: { votes: ['tylermcginnis'], text: 'Candy' },
            optionTwo: { votes: [], text: 'Meat' }
          }
        var result = questionAnsweredMethod(formattedQuestion, 'tylermcginnis');

        expect(result).toEqual(true)
    });*/


    test('questionAnsweredMethod() failure - with invalid parameters', () => {
        var formattedQuestion = {
            author: 'tylermcginnis',
            optionOne: { votes: ['tylermcginnis'], text: 'Candy' },
            optionTwo: { votes: [], text: 'Meat' }
          }
        var result = questionAnsweredMethod(formattedQuestion);
        
        expect(result).toEqual(false)
    });

});