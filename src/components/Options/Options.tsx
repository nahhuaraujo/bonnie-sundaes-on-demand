import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ScoopOption, ToppingOption } from '../';
import { AlertBanner } from '../../components';
import { AppStore } from '../../redux/store';
import * as S from './Options.styled';

interface Props {
  optionType: 'scoops' | 'toppings';
  imageWidth: number;
}

interface Option {
  name: string;
  imagePath: string;
}

const Options = (props: Props) => {
  const summary = useSelector((store: AppStore) => store.summary);
  const [options, setOptions] = useState<Option[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getOptions = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/${props.optionType}`);
        setOptions(response.data);
        setError(undefined);
      } catch (e) {
        setError((e as Error).message);
        setOptions([]);
      }
    };
    getOptions();
  }, [props.optionType]);

  if (error) {
    return <AlertBanner variant='red' message={error} />;
  }

  if (props.optionType === 'scoops') {
    return (
      <div>
        <div>${summary.scoops.price} each</div>
        <div>
          Scoops total: <strong>${summary.scoops.subtotal}</strong>
        </div>
        <S.OptionsContainer>
          {options.map((option, i) => (
            <ScoopOption key={i} name={option.name} imagePath={option.imagePath} imageWidth={props.imageWidth} />
          ))}
        </S.OptionsContainer>
      </div>
    );
  }

  if (props.optionType === 'toppings') {
    return (
      <div>
        <div>${summary.toppings.price} each</div>
        <div>
          Toppings total: <strong>${summary.toppings.subtotal}</strong>
        </div>
        <S.OptionsContainer>
          {options.map((option, i) => (
            <ToppingOption key={i} name={option.name} imagePath={option.imagePath} imageWidth={props.imageWidth} />
          ))}
        </S.OptionsContainer>
      </div>
    );
  }

  return <></>;
};

export default Options;
