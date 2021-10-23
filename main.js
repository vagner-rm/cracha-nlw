const linksSocialMedia = {
    github: 'vagner-rm',
    youtube: 'UCv3zanEKZeY8qZWL2ph4O6A',
    facebook: 'maykbrito',
    instagram: 'jakeliny.gracielly',
    twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
     const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userGit.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
    })
    

}


getGithubProfileInfos()
