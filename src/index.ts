import { add } from './lib'

function main() {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded:', add(23, 67))
    })
}

main()