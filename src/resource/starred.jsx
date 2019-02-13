import axios from 'axios'

export default function starred() {
    return new Promise((res, rej) => {
        const user = `thayllachristine`
        axios.get(`https://api.github.com/users/${user}/starred`)
            .then((resp) => {
                res(resp)
            })

            .catch((err) => {
                rej(err)
            })
    })
}