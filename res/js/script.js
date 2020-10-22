$(function () {
    updateUserInfo();
});

function updateUserInfo() {
    getUserInfo().then((data) => {
        console.log(data);
        $(".avatar-container .avatar").attr("src", data.avatar);

        // TODO: update also the menu
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