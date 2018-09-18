export default {
    transformByDate (calls) {
        let response = []
        calls.forEach(call => {
            response.push(this.getCall(call))
        })
        return response
    },
    getCall (call) {
        let response = call
        response.callTimes = 1
        response.callDate = new Date(call.called)
        return response
    }
}