$(function () {
    updatProfileInfo();
});

function updatProfileInfo() {
    getProfiles().then((data) => {
        const profileData = data.map((row) => {

            return `<div class="profile">
                <img src="${row.avatar}" alt="profile picture"  class = "profile-picture">
                <h3>${row.firstname} ${row.lastname}</h3>
                <button name="follow" class = "follow-button">Follow</button>
            </div>`
        }).join("")

        $(".profile-container").html(profileData)

        $(".follow-button").click(function() {
            var el = $(this);
            el.text() == "Follow" 
                ? el.text("Followed") 
                : el.text("Follow");
            el.toggleClass("followed")
        })
    });
}