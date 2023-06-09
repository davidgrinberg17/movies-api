const API = "https://api.themoviedb.org/3"

export const get = (path) => {
    return fetch (API+path, {
        headers:{
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGNkZDgyNmY2MjBkODFlZjA3ODFhMjBlM2QzYjQ4OCIsInN1YiI6IjY0MmQ1ODcxNjQ3NjU0MDExMWQ0ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GHjSWbioUkbu45QQa6DYB4_FVSrniumOA6MNv_pad7Q",
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then((results) => results.json())
}