import {v4 as uuidv4} from 'uuid'

let levels = {
    small: 'Small',
    medium: 'Medium',
    high: 'High'
}
let data = {
    tasks: [
        {
            id: uuidv4(),
            content: 'Học xong khóa học HTML/CSS từ Zero đến Hero',
            level: levels.medium
        },
        {
            id: uuidv4(),
            content: 'Học xong khóa học Javascript cơ bản tại F8',
            level: levels.small
        },
        {
            id: uuidv4(),
            content: 'Học xong khóa học ReactJS tại ZendVN',
            level: levels.high
        },
        {
            id: uuidv4(),
            content: 'Học xong khóa học ASP.NET tại TeduVN',
            level: levels.high
        }
    ]
}
export default data