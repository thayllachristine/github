import axios from 'axios'

export default function user() {
    return new Promise((res, rej) => {
        const user = `thayllachristine`
        axios.get(`https://api.github.com/users/${user}/repos`)
            .then((resp) => {
                res(resp)
            })

            .catch((err) => {
                rej(err)
            })
    })
}