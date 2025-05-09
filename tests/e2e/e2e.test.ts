import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
} from '@jest/globals';
import puppeteer, { Browser, Page } from 'puppeteer';
import { fork, ChildProcess } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const __dirname = import.meta.dirname;

const contentPath = path.resolve(__dirname, '../../src/content/content.json');
const mockPath = path.resolve(__dirname, '../mocks/mockContent.json');
const backupPath = path.resolve(
  __dirname,
  '../../src/content/content.json.bak',
);

describe('e2e', () => {
  let browser: Browser, page: Page, server: ChildProcess;

  beforeAll(async () => {
    // Jest mocks do not work in e2e tests, so we save the original and temporarily replace it with a mock file
    fs.copyFileSync(contentPath, backupPath);
    fs.copyFileSync(mockPath, contentPath);

    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise<void>((resolve, reject) => {
      server.on('error', () => {
        reject();
      });
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true,
      // slowMo: 50,
      // devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
    server.kill();

    // Restore the original file
    fs.copyFileSync(backupPath, contentPath);
    fs.unlinkSync(backupPath);
  });

  describe('empty content', () => {
    const altMockPath = path.resolve(__dirname, '../mocks/altMockContent.json');

    beforeEach(() => {
      fs.copyFileSync(altMockPath, contentPath);
    });

    afterEach(() => {
      fs.copyFileSync(mockPath, contentPath);
    });

    it('should have no dates', async () => {
      await page.goto('http://localhost:9090');

      const h1Text = await page.$eval('h1', (el) => el.textContent);
      expect(h1Text).toEqual('Исторические даты');

      const info = await page.$('p[data-testid="no-dates"]');
      expect(info).not.toBeNull();
    });
  });

  it('should have dates', async () => {
    await page.goto('http://localhost:9090');

    const h1Text = await page.$eval('h1', (el) => el.textContent);
    expect(h1Text).toEqual('Исторические даты');

    const periodButton = await page.$('[data-testid="period-button-1"]');
    expect(periodButton).not.toBeNull();

    const periodButtonText = await periodButton!.$eval(
      'label',
      (el) => el.textContent,
    );
    expect(periodButtonText).toEqual('1');

    const periodButtonNameText = await periodButton!.$eval(
      'h3',
      (el) => el.textContent,
    );
    expect(periodButtonNameText).toEqual('Test_period_1');
  });
});
