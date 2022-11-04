import { useSummaryActions } from '../../hooks';
import * as S from './ScoopOption.styled';

interface Props {
  name: string;
  imagePath: string;
  imageWidth: number;
}

const ScoopOption = (props: Props) => {
  const { changeScoop } = useSummaryActions();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeScoop({ scoopName: props.name, scoopQnty: parseInt(e.target.value) });
  };

  return (
    <S.ScoopOption>
      <img alt={`${props.name} scoop`} title={`${props.name} scoop`} src={`http://localhost:3030/${props.imagePath}`} width={props.imageWidth} />
      <div>
        <label htmlFor={`${props.name}-scoop-qnty`}>{props.name}</label>
        <input id={`${props.name}-scoop-qnty`} type='number' defaultValue={0} min={0} max={3} onChange={changeHandler} />
      </div>
    </S.ScoopOption>
  );
};

export default ScoopOption;
