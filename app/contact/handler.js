import fetch from 'node-fetch';

export async function handler(event, context) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const formData = JSON.parse(event.body);
  console.log("This is formData: " + formData.name)

  try{
      const response = await fetch(`${process.env.URL}/.netlify/functions/emails/sendGridEmail`, {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
      },
      method: "POST",
      body: JSON.stringify({
        from: "placeholder@gmail.com",
        to: "placeholder@gmail.com", //used actual email addresses for testing
        subject: "test Subject",
        parameters: {
          name: formData.name,
          city: formData.city,
          state: formData.state,
          homePhone: formData.homePhone,
          cellPhone: formData.cellPhone,
          email: formData.email,
        },
      }),
    });
    console.log("This is the response: " + response.status)
    if(!response.ok){
      return{
        statusCode: response.status,
        body: JSON.stringify(`Email failed to send: ${await response.text()}`),
      };
    }

    console.log("Email should be sent")
    return {
      statusCode: 200,
      body: JSON.stringify("Email sent!"),
    };
  }
  catch(error){
    console.log("Error: " + error)
    return{
    statusCode: 500,
    body: JSON.stringify(`Server error: ${error}`)
    }
  }
};