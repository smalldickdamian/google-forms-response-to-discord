const POST_URL = "WEBBHOOK URL";

function onSubmit(e) {
    const options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
        },
        "payload": JSON.stringify({
            "content": "",
            "embeds": [{
                "title": "FORM SUBMISSION",
                "description": "Someone submitted to your form."
            }]
        })
    };

    UrlFetchApp.fetch(POST_URL, options);
};
