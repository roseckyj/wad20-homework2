$(function () {
    registerEventListeners();    
    updateUserInfo();
    updatPostsInfo();
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

function updatPostsInfo() {
    getPosts().then((data) => {
        console.log(data);
        const postData = data.map((row) => {
            let media = ""
            if (row.media) {
                switch (row.media.type) {
                    case "image":
                        media = `<div class="post-image"><img src="${row.media.url}" alt=""></div>`
                        break;

                    case "video":
                        media = `<video controls><source src="${row.media.url}" type="video/mp4"></video>`
                        break;
                }
            }

            return `<div class="post">
                <div class="post-author">
                <span class="post-author-info">
                    <img src="${row.author.avatar}" alt="Post author">
                    <small>${row.author.firstname} ${row.author.lastname}</small>
                </span>
                <small>${row.createTime}</small>
                </div>
                ${media}        
                <div class="post-title">
                <h3>${row.text ? row.text : ""}</h3>
                </div>
                <div class="post-actions">
                <button type="button" name="like" class="like-button">${row.likes}</button>
                </div>
            </div>`
        }).join("")
        $(".main-container").html(postData)
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