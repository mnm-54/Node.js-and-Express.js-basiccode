const Path=require('path')

console.log(Path.sep);

const filepath=Path.join('/content/','subfolder','new.txt')
console.log(filepath);

const basepath= Path.basename(filepath)
console.log(basepath);

const absolutepath=Path.resolve(__dirname,__filename)
console.log(absolutepath);