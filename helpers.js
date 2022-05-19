function successfullMessage(msg) {
    return "✅ *ABU*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *ABU*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *ABU*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
