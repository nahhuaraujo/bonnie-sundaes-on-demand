import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScoopOption, ToppingOption } from '../';

interface Props {
  optionType: 'scoops' | 'toppings';
}

interface Option {
  name: string;
  imagePath: string;
}

const Options = (props: Props) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const getOptions = async () => {
      const response = await axios.get(`http://localhost:3030/${props.optionType}`);
      setOptions(response.data);
    };
    getOptions();
  }, [props.optionType]);

  return (
    <div>
      {props.optionType === 'scoops' && options.map((option, i) => <ScoopOption key={i} name={option.name} imagePath={option.imagePath} />)}
      {props.optionType === 'toppings' && options.map((option, i) => <ToppingOption key={i} name={option.name} imagePath={option.imagePath} />)}
    </div>
  );
};

export default Options;
