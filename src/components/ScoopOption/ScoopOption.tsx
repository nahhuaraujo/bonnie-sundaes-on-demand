import * as S from './ScoopOption.styled';

interface Props {
  name: string;
  imagePath: string;
  imageWidth: number;
}

const ScoopOption = (props: Props) => {
  return (
    <S.ScoopOption>
      <S.ScoopImg
        alt={`${props.name} scoop`}
        title={`${props.name} scoop`}
        src={`http://localhost:3030/${props.imagePath}`}
        width={props.imageWidth}
      />
    </S.ScoopOption>
  );
};

export default ScoopOption;
