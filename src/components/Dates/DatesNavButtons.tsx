import DatesButton from './DatesButton';
import Arrow from '../../assets/arrow.svg?react';
import { useStore } from '../../store/StoreProvider';
import { observer } from 'mobx-react-lite';

const DatesNavButtons = observer(() => {
  const { blockStore } = useStore();

  return (
    <>
      <DatesButton type="button" name="left" data-id={blockStore.blockID}>
        <Arrow />
      </DatesButton>
      <DatesButton type="button" name="right" data-id={blockStore.blockID}>
        <Arrow />
      </DatesButton>
    </>
  );
});

export default DatesNavButtons;
