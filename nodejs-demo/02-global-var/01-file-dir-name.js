#!/user/bin/node
console.log('filename:',__filename);
console.log('dirname:',__dirname);

var fileName=__dirname+'views/view.html';

swicth(process.platform){
	case 'linux':
		fileName=__dirname+'views/view.html';
		break;

	case 'win32':
		fileName=__dirname+'\\views/view.html';
		break;

        default:
		fileName='something wrong';
}

console.log('fileName:',fileName);
