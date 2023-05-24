const OAuthClient = require('intuit-oauth');
var oauthClient: any
var oauth2_token_json:any


export function authorizeUri(body: any) {

    console.log("body",body)
    oauthClient = new OAuthClient({
        clientId: body.clientId,
        clientSecret: body.clientSecret,
        environment: body.environment,
        redirectUri: body.redirectUri,
    });

    // console.log("thisisautclient",oauthClient)
    const authUri = oauthClient.authorizeUri({
        scope: [OAuthClient.scopes.Accounting],
        state: 'intuit-test',
    });
    return authUri
}
export function refreshToken() {
    console.log(oauthClient)
    oauthClient.refresh()
    .then(function (authResponse:any) {
      console.log(`The Refresh Token is  ${JSON.stringify(authResponse.getJson())}`);
      oauth2_token_json = JSON.stringify(authResponse.getJson(), null, 2);
      
    })
    .catch((e:any)=> {
      console.error(e);
    });
}
export function callback(req:any) {
    console.log(req)
    console.log(req)
    oauthClient
    .createToken(req)
    .then(function (authResponse: any) {
      oauth2_token_json = JSON.stringify(authResponse.getJson(), null, 2);
      console.log(oauth2_token_json)
    })
    .catch(function (e: any) {
      console.error(e);
    });

}

