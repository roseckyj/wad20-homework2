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