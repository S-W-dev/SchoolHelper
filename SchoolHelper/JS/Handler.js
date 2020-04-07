

class Handler {

    handleMessage(message) {
        console.log("Received message: " + message.message);
    }

    handleError(message) {
        console.log("There was an error: " + message.message);
    }

    handleDebug(message) {
        if (Options.isDebugEnabled()) {
            console.log("Received Debug Message: " + message.message);
        }
    }


}