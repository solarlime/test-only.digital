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

  private _period: number = 0;

  get period() {
    return {
      number: this._period,
      ...this._content[this._period],
    };
  }

  get maxPeriod() {
    return this._content.length - 1;
  }

  setPeriod(period: number | 'next' | 'prev') {
    if (typeof period === 'number') {
      if (period < 0 || period > this._content.length - 1) {
        return;
      }
      this._period = period;
    } else {
      if (period === 'next') {
        if (this._period === this._content.length - 1) {
          return;
        }
        this._period += 1;
      } else {
        if (this._period === 0) {
          return;
        }
        this._period -= 1;
      }
    }
  }
}

export default BlockStore;
