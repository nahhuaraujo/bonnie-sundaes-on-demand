import * as S from './AlertBanner.styled';

interface Props {
  message?: string;
  variant?: string;
}

const AlertBanner = (props: Props) => {
  return (
    <S.AlertBanner role='alert' variant={props.variant}>
      {props.message || 'An unexpected error occurred. Please try again later.'}
    </S.AlertBanner>
  );
};

export default AlertBanner;
