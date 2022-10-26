import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScoopOption, ToppingOption } from '../';
import { AlertBanner } from '../../components';

interface Props {
  optionType: 'scoops' | 'toppings';
  imageWidth: number;
}

interface Option {
  name: string;
  imagePath: string;
}

const Options = (props: Props) => {
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

  return (
    <div>
      {props.optionType === 'scoops' &&
        options.map((option, i) => <ScoopOption key={i} name={option.name} imagePath={option.imagePath} imageWidth={props.imageWidth} />)}
      {props.optionType === 'toppings' &&
        options.map((option, i) => <ToppingOption key={i} name={option.name} imagePath={option.imagePath} imageWidth={props.imageWidth} />)}
      {error && <AlertBanner variant='red' message={error} />}
    </div>
  );
};

export default Options;
