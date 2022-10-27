import * as S from './ToppingOption.styled';

interface Props {
  name: string;
  imagePath: string;
  imageWidth: number;
}

const ToppingOption = (props: Props) => {
  return (
    <S.ToppingOption>
      <img alt={`${props.name} topping`} title={`${props.name} topping`} src={`http://localhost:3030/${props.imagePath}`} width={props.imageWidth} />
      <div>
        <input id='topping' type='checkbox' />
        <label htmlFor='topping'>{props.name}</label>
      </div>
    </S.ToppingOption>
  );
};

export default ToppingOption;
