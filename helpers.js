function successfullMessage(msg) {
    return "β *ABU*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *ABU*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *ABU*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
