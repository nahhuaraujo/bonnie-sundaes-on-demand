import * as S from './ScoopOption.styled';

interface Props {
  name: string;
  imagePath: string;
}

const ScoopOption = (props: Props) => {
  return (
    <S.ScoopOption>
      <S.ScoopImg alt={`${props.name} scoop`} src={`http://localhost:3030/${props.imagePath}`} />
    </S.ScoopOption>
  );
};

export default ScoopOption;
