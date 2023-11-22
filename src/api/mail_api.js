import * as requester from './requester'

const BaseUrl = 'https://dschinni.pythonanywhere.com/rest'



export const sentEmail = async (data) => requester.post(`${BaseUrl}/sent-email/`, data)