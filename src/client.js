import * as sapper from '@sapper/app';
import "../static/base.css"
import './utils/i18n'

sapper.start({
	target: document.querySelector('#sapper')
});
