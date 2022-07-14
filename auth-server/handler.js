const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");

//  SCOPES allows you to set access levels; this is set to readonly because you don't have access to update the calendar yourself. 
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

// Credentials are those values required to get access to your calendar. If you see “process.env” this means the value is in the “config.json” file. This is a best practice as it keeps your API secrets hidden. Please remember to add “config.json” to your “.gitignore” file.

const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  redirect_uris: ["https://ediesalasmiller.github.io/meet/"],
  javascript_origins: ["https://ediesalasmiller.github.io", "http://localhost:3000"],
};
// why do i need to reclarify the below add
const { client_secret, client_id, redirect_uris, calendar_id } = credentials;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0],
);




module.exports.getAuthURL = async () => {
 const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({
      authUrl: authUrl,
    }),
  }
}


  // // The values used to instantiate the OAuthClient are at the top of the file 
  // const oAuth2Client = new google.auth.OAuth2(
  //   client_id,
  //   client_secret,
  //   redirect_uris[0]
  // );

module.exports.getAccessTokenURL = async (event) => {
    // The values used to instantiate the OAuthClient are at the top of the file 
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Decode authorization code extracted from the URL query
  const code = decodeURIComponent(`${event.pathParamenters.code}`);


  return new Promise((resolve, reject) => {
 
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve (token);
    })
  })
  .then ((token) => {
    //respond w OAuth token
    return {
      statusCode: 200,
      headers: {
      'Access-Control-Allow-Origin': '*',
    },
      body: JSON.stringify(token),
    };
  })
  .catch ((err) => {
    //handle error
    console.error(err);
    return {
      statusCode: 500,
      headers: {
      'Access-Control-Allow-Origin': '*',
    },
      body: JSON.stringify(err),
    };
  });
};


module.exports.getCalendarEventsURL = async (event) =>
{
  // The values used to instantiate the OAuthClient are at the top of the file 
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0],
  );
  // Decode authorization code extracted from the URL query
  const access_token = decodeURIComponent(`${event.pathParamenters.access_token}`);

  
  return new Promise((resolve, reject) => {
    /**
     *  Exchange authorization code for access token with a “callback” after the exchange,
     *  The callback in this case is an arrow function with the results as parameters: “err” and “token.”
     */
    oAuth2Client.getToken(access_token, (error, response) => {
      if (error) {
        return reject(error);
      }
      return resolve (response);
    })
  })
  .then ((results) => {
    //respond w OAuth token
    return {
      statusCode: 200,
     headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
      body: JSON.stringify({ events: results.data.items }),
    };
  })
  .catch ((err) => {
    //handle error
    console.error(err);
    return {
      statusCode: 500,
      headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
      body: JSON.stringify(err),
    };
  });
};