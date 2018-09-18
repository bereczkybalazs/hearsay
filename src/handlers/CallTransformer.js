export default {
    transformByDate (calls) {
        let response = []
        calls.forEach(call => {
            let transformedCall = this.getCall(call)
            let previousCallByThisNumberIndex = response.findIndex(oldCall => {
                let isSamePhoneNumber = oldCall.phoneNumber == call.phoneNumber
                let isSameDayCalled = this.isSameDay(oldCall.callDate, call.callDate)
                return isSamePhoneNumber && isSameDayCalled
            })
            if (previousCallByThisNumberIndex > -1) {
                response[previousCallByThisNumberIndex].callTimes++
            } else {
                response.push(transformedCall)
            }
        })
        return response
    },
    getCall (call) {
        let response = call
        response.callTimes = 1
        response.callDate = new Date(call.called)
        return response
    },
    isSameDay (expectedDate, actualDate) {
        let isSameYear = expectedDate.getFullYear() === actualDate.getFullYear()
        let isSameMonth = expectedDate.getMonth() === actualDate.getMonth()
        let isSameDay = expectedDate.getDate() === actualDate.getDate()
        return isSameYear && isSameMonth && isSameDay;
    }
}