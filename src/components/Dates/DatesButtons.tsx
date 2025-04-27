import { observer } from 'mobx-react-lite';
import DatesButton from './DatesButton';
import { useStore } from '../../store/StoreProvider';
import Arrow from '../../assets/arrow.svg?react';

const DatesButtons = observer(() => {
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

export default DatesButtons;
