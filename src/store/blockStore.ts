import { makeAutoObservable, runInAction } from 'mobx';
import { IPeriod } from '../interfaces/content';
import getRandomAlphaString from '../utils/getRandomAlphaString';

class BlockStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _blockID: string = getRandomAlphaString(16);

  get blockID() {
    return this._blockID;
  }

  private _content: Array<IPeriod> = [];

  get content() {
    return this._content;
  }

  async getContent() {
    try {
      const content = await import('../content/content.json').then(
        (res) => res.default,
      );
      runInAction(() => {
        this._content = content;
      });
    } catch (e) {
      runInAction(() => {
        console.error(e);
        this._content = [];
      });
    }
  }
}

export default BlockStore;
