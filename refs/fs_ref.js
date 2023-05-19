const fs = require('fs')
const path = require('path')

// File system
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw err

//     console.log('Папка создана')
// })

fs.writeFile(path.join(__dirname, 'notes', 'myNotes.txt'), 'Hello world' , err => {
    if (err) throw err
    console.log('Файл создан')

})
fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'),'  Propoloskaem Gorlo ZZZ VVV', err => {
    if (err) throw err
    console.log('Файл изменен')
})
fs.readFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'utf-8',
    (err, data) => {
        if (err) throw err
        console.log(data)
        console.log('Файл ещё и прочитан')
    }
    )

// fs.rename(
//     path.join(__dirname, 'notes' , 'mynotes.txt'),
//     path.join(__dirname, 'notes' , 'notes.txt'),
//     err =>{
//         if (err) throw err

//         console.log('File is rename')
//     }
// )
