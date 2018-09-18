import assert from 'assert'
import CallTransformer from '../src/handlers/CallTransformer'

const createCaller = (phoneNumber, callDate) => {
    return {
        firstName: "John",
        lastName: "Smith",
        phoneNumber: phoneNumber,
        called: callDate
    }
}

const dateOne = 1534287424815
const dateTwo = 1532287424815

const phoneOne = '202-555-0144'

describe('CallTransformer', function () {

    describe('transformByDate ', function () {

        it('no multiple calls', function () {
            let calls = []
            calls.push(createCaller(phoneOne, dateOne))
            let response = CallTransformer.transformByDate(calls)
            assert.equal(response[0].callTimes, 1)
        });


        it('increase call time on same day', function () {
            let calls = []
            calls.push(createCaller(phoneOne, dateOne))
            calls.push(createCaller(phoneOne, dateOne))
            let response = CallTransformer.transformByDate(calls)
            assert.equal(response[0].callTimes, 2)
        });

        it('do not increase call time on different day', function () {
            let calls = []
            calls.push(createCaller(phoneOne, dateOne))
            calls.push(createCaller(phoneOne, dateTwo))
            let response = CallTransformer.transformByDate(calls)
            assert.equal(response[0].callTimes, 1)
        });
    });

    describe('getCall', function () {

        it('has call properties', function () {
            let caller = createCaller(phoneOne, dateOne)
            let call = CallTransformer.getCall(caller)
            assert(call.firstName, caller.firstName)
            assert(call.lastName, caller.lastName)
        })


        it ('has callTimes', function () {
            let call = CallTransformer.getCall(
                createCaller(phoneOne, dateOne)
            )
            assert(call.callTimes, 1)
        })

        it('has date', function () {
            let call = CallTransformer.getCall(
                createCaller(phoneOne, dateOne)
            )
            assert(call.callDate, new Date(0))
        })

    })

    describe('isSameDay', function () {

        it('same day', function () {
            let isSameDay = CallTransformer.isSameDay(
                new Date(dateOne),
                new Date(dateOne)
            )
            assert.equal(isSameDay, true)
        })

        it('different day', function () {
            let isSameDay = CallTransformer.isSameDay(
                new Date(dateOne),
                new Date(dateTwo)
            )
            assert.equal(isSameDay, false)
        })
    })

});