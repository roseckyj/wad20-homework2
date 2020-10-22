$(function () {
    registerEventListeners();    
    updateUserInfo();
});

function registerEventListeners() {
    $("#avatar").click(() => {
        $("#menu").toggle();
    })

    $("#menu").on("blur", () => {
        $("#menu").hide();
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
}

async function getPosts() {
    return await $.get(
        "https://private-anon-2b0cfa86a8-wad20postit.apiary-mock.com/posts"
    );
}

async function getProfiles() {
    return await $.get(
        "https://private-anon-2b0cfa86a8-wad20postit.apiary-mock.com/profiles"
    );
}