import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ScoopOption, ToppingOption } from '../';
import { AlertBanner } from '../../components';
import { AppStore } from '../../redux/store';
import { sumScoops, sumToppings } from '../../utils/summary.utils';
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

  const scoopPrice = 2;
  const toppingPrice = 1.5;

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
        <div>${scoopPrice} each</div>
        <S.OptionsContainer>
          {options.map((option, i) => (
            <ScoopOption key={i} name={option.name} imagePath={option.imagePath} imageWidth={props.imageWidth} />
          ))}
        </S.OptionsContainer>
        <div>
          Scoops total: <strong>${sumScoops(summary.scoops, scoopPrice)}</strong>
        </div>
      </div>
    );
  }

  if (props.optionType === 'toppings') {
    return (
      <div>
        <div>${toppingPrice} each</div>
        <S.OptionsContainer>
          {options.map((option, i) => (
            <ToppingOption key={i} name={option.name} imagePath={option.imagePath} imageWidth={props.imageWidth} />
          ))}
        </S.OptionsContainer>
        <div>
          Toppings total: <strong>${sumToppings(summary.toppings, toppingPrice)}</strong>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Options;
