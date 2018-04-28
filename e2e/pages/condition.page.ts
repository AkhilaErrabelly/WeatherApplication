import { element, browser, by, Key } from 'protractor';

export class conditionPage {
	getPage() {
		return browser.get('/');
    }
}