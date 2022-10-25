import * as S from './ToppingOption.styled';

interface Props {
  name: string;
  imagePath: string;
}

const ToppingOption = (props: Props) => {
  return (
    <S.ToppingOption>
      <S.ToppingImg alt={`${props.name} topping`} src={`http://localhost:3030/${props.imagePath}`} />
    </S.ToppingOption>
  );
};

export default ToppingOption;
