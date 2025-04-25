import { makeAutoObservable, runInAction } from 'mobx';
import { IExtendedPeriod, IPeriod } from '../interfaces/content';
import getRandomAlphaString from '../utils/getRandomAlphaString';

class BlockStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _blockID: string = getRandomAlphaString(16);

  get blockID() {
    return this._blockID;
  }

  private _content: Array<IExtendedPeriod> = [];

  get periodNumbers() {
    return this._content.map((item) => item.number);
  }

  async getContent() {
    try {
      const content = await import('../content/content.json').then(
        (res) => res.default,
      );
      runInAction(() => {
        this._content = content.map((item: IPeriod, index) => ({
          ...item,
          number: index + 1,
        }));
      });
    } catch (e) {
      runInAction(() => {
        console.error(e);
        this._content = [];
      });
    }
  }

  private _periodNumber: number = 1;

  get period() {
    return this._content[this._periodNumber - 1];
  }

  get maxPeriod() {
    return this._content.length;
  }

  setPeriod(param: { next: boolean } | { number: number }) {
    if ('number' in param) {
      const period = this._content.find((item) => item.number === param.number);
      if (!period) {
        return;
      }
      this._periodNumber = period.number;
    } else {
      if (param.next) {
        if (this._periodNumber === this._content.length) {
          return;
        }
        this._periodNumber += 1;
      } else {
        if (this._periodNumber === 1) {
          return;
        }
        this._periodNumber -= 1;
      }
    }
  }
}

export default BlockStore;
