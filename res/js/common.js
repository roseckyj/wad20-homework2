$(function () {
    registerEventListeners();    
    updateUserInfo();
});

function registerEventListeners() {
    $("#avatar").click(() => {
        $("#menu").toggle();
    })
}

function updateUserInfo() {
    getUserInfo().then((data) => {
        $("#avatar").attr("src", data.avatar);
        $("#name").text(data.firstname + " " + data.lastname);
        $("#email").text(data.email);
    });
}

// ================= API ===================

async function getUserInfo() {
    return await $.get(
        "https://private-anon-2b0cfa86a8-wad20postit.apiary-mock.com/users/1"
    );

    /*
        {
            "firstname": string,
            "lastname": string,
            "email": string,
            "avatar": string
        }
    */
}

async function getPosts() {
    return await $.get(
        "https://private-anon-2b0cfa86a8-wad20postit.apiary-mock.com/posts"
    );

    /*
        {
            "id": number,
            "author": {
                "firstname": string,
                "lastname": string,
                "avatar": string
            },
            "createTime": string,
            "text": null | string,
            "media": null | {
                "type": "image" | "video",
                "url": string
            },
            "likes": string
        }[]
    */
}

async function getProfiles() {
    return await $.get(
        "https://private-anon-2b0cfa86a8-wad20postit.apiary-mock.com/profiles"
    );

    /*
        {
            "firstname": string,
            "lastname": string,
            "avatar": string
        } []
    */
}