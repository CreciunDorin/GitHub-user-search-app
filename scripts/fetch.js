const button_form = document.querySelector('.search-input');
const error_search = document.querySelector('.allert');

button_form.addEventListener('click', () => {
    const input_data = document.querySelector('#input-form');
    const url = `https://api.github.com/users/${input_data.value}`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                error_search.innerText = 'No results';
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            error_search.innerText = '';
            user(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

function user(data) {
    const img_user = document.querySelector('.user_img');
    img_user.src = data.avatar_url;

    const user_name = document.querySelector('.user_login');
    user_name.innerText = data.login;

    const user_data = document.querySelector('.user_time');
    user_data.innerText = `Joined: ${new Date(data.created_at).toLocaleDateString()}`;;

    const user_name_tag = document.querySelector('.user_bio');
    if (data.company === null) {
        user_name_tag.classList.add('display-none');
    } else {
        user_name_tag.innerText = data.company;
    }

    const user_bio = document.querySelector('.user_bio');
    user_bio.innerText = data.bio;

    const user_repos = document.querySelector('.user_repos');
    user_repos.innerText = data.public_repos;

    const user_followers = document.querySelector('.user_followers');
    user_followers.innerText = data.followers;

    const user_following = document.querySelector('.user_following');
    user_following.innerText = data.following;

    const git_location_name = document.querySelector('.user_location');
    if (data.location === null) {
        git_location_name.innerText = 'Not Available';
    } else {
        git_location_name.innerText = data.location;
    }

    const git_link = document.querySelector('.user_blog');
    git_link.href = data.html_url;

    const git_twiter = document.querySelector('.twiter_link');
    const git_twiter_name = document.querySelector('.user_twitter');
    if (data.twitter_username === null) {

    } else {
        git_twiter.src = data.twitter_username;
        git_twiter_name.innerText = data.twitter_username;
    }
}
