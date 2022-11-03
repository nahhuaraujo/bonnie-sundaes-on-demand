import * as S from './ToppingOption.styled';
import { useSummaryActions } from '../../hooks';

interface Props {
  name: string;
  imagePath: string;
  imageWidth: number;
}

const ToppingOption = (props: Props) => {
  const { changeTopping } = useSummaryActions();

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeTopping({ toppingName: props.name });
  };

  return (
    <S.ToppingOption>
      <img alt={`${props.name} topping`} title={`${props.name} topping`} src={`http://localhost:3030/${props.imagePath}`} width={props.imageWidth} />
      <div>
        <input id={`${props.name}-topping`} type='checkbox' onChange={checkHandler} />
        <label htmlFor={`${props.name}-topping`}>{props.name}</label>
      </div>
    </S.ToppingOption>
  );
};

export default ToppingOption;
