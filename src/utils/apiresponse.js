class apiResponse {
    constructor(statuscode,data,message = "success"){
        this.statusCode = statuscode
        this.data = null
        this.message= message
        this.success = statuscode < 400

    }
}