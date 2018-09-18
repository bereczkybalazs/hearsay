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

describe('CallTransformer', function () {

    describe('transformByDate ', function () {

        it('no multiple calls', function () {
            let calls = []
            calls.push(createCaller(123, 0))
            let response = CallTransformer.transformByDate(calls)
            assert.equal(response[0].callTimes, 1)
        });

    });

    describe('getCall', function () {

        it('has call properties', function () {
            let caller = createCaller(123, 0)
            let call = CallTransformer.getCall(caller)
            assert(call.firstName, caller.firstName)
            assert(call.lastName, caller.lastName)
        })


        it ('has callTimes', function () {
            let call = CallTransformer.getCall(
                createCaller(123, 0)
            )
            assert(call.callTimes, 1)
        })

        it('has date', function () {
            let call = CallTransformer.getCall(
                createCaller(123, 0)
            )
            assert(call.callDate, new Date(0))
        })

    })

});