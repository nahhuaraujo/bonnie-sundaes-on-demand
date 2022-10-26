import * as S from './ToppingOption.styled';

interface Props {
  name: string;
  imagePath: string;
  imageWidth: number;
}

const ToppingOption = (props: Props) => {
  return (
    <S.ToppingOption>
      <S.ToppingImg
        alt={`${props.name} topping`}
        title={`${props.name} topping`}
        src={`http://localhost:3030/${props.imagePath}`}
        width={props.imageWidth}
      />
    </S.ToppingOption>
  );
};

export default ToppingOption;
