import { step, TestSettings, Until, By, Device, Key } from '@flood/element'
import * as assert from 'assert'

export const settings: TestSettings = {
	clearCache: false,
	disableCache: false,
	clearCookies: false,
	loopCount: -1,
	duration: '-1',
	actionDelay: '2s',
	stepDelay: '2s',
	waitTimeout: '60s',
	screenshotOnFailure: true,
	DOMSnapshotOnFailure: true,
}

/**
 * Author: Antonio Jimenez : antonio@flood.io
 * The internet - heroku App
 * @version 1.1
 */

const URL = 'https://the-internet.herokuapp.com'

export default () => {
	step('Test: 01 - Homepage', async (browser) => {
		await browser.visit(URL)
		await browser.wait(Until.elementIsVisible(By.css('#content > h1')))
		const pageTextVerify = By.visibleText('Welcome to the-internet')
		await browser.wait(Until.elementIsVisible(pageTextVerify))
	})

	step('Test: 02 - Secure File Download', async (browser) => {
		await browser.visit('http://admin:admin@the-internet.herokuapp.com/download_secure')
		const pageTextVerify = By.visibleText('Secure File Downloader')
		await browser.wait(Until.elementIsVisible(pageTextVerify))
	})

	step('Test: 03 - Secure File Downloader', async (browser) => {
		const File = await browser.findElement(By.css('#content > div > a'))
		await File.click()
	})
}
