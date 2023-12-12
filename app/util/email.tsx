

const sgMail = require('@sendgrid/mail')
function IsValidEmail(email: string) {
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    if (!email.match(reEmail)) {
        return false;
    }
    return true;
}
const sendGridKey = process.env.SENDGRID_API_KEY
sgMail.setApiKey(sendGridKey)
function validateEmailList(emailList: any) {
    let newEmailList: any = [];
    emailList.forEach((email: any) => {
        if (IsValidEmail(email.email)) {
            newEmailList.push(email);
        }
    });
    return newEmailList;
}
function validateEmailString(email: string) {
    return IsValidEmail(email);
}
function generatePersonalizationObject(toList: Array<{ email: string }>, subject: string) {
    let personalizationArray: Array<{ to: Array<{ email: string }>, subject: string }> = [];
    toList.forEach(element => {
        let personalization = {
            to: [
                {
                    email: element.email
                }
            ],
            subject: subject
        }
        personalizationArray.push(personalization);
    });
    return personalizationArray;
}
/**
 * https://sendgrid.com/docs/for-developers/sending-email/personalizations/
 * to {array}  [{ "email": "recipient1@example.com" }]         
 * templateName {string} 'template-1'
 * replacebleData {object} {}
 */
export default {
    sendEmail: async (to: Array<{ email: string }>, subject: string, templateName: string, replacebleData: any) => {
        // const from: string = functions.config().email.article_emails.from;
        // new Promise<boolean>((resolve, reject) => {
        //     const isProd = functions.config().env.prod === "true" ? true : false;
         
        //     let filteredToList = validateEmailList(to);
        //     let isAllGoodFrom = validateEmailString(from);
        //     if ((!filteredToList.length) || !isAllGoodFrom) {
        //         console.log('Some data is missing in to, from');
        //         console.log('To List', filteredToList);
        //         console.log('form', from);
        //         reject(false);
        //     }
        //     const msg = {
        //         "personalizations": generatePersonalizationObject(filteredToList, subject),
        //         from: from,
        //         templateId: templateName,
        //         dynamicTemplateData: replacebleData,
        //         asm: {
        //             'group_id': 'groupId', /* This is for unsubscription url*/
        //             'groups_to_display': [15913] /* This is for unsubscription preference*/
        //         },
        //         subject: subject
        //     };
        //     console.log(JSON.stringify(msg));
        //     sgMail.send(msg).then((success) => {
        //         resolve(true)
        //     })
        // })
    }
}