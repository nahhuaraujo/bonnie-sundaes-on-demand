import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScoopOption } from '../';

interface Props {
  optionType: string;
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

  if (props.optionType === 'scoops') {
    return (
      <div>
        {options.map((option, i) => (
          <ScoopOption key={i} name={option.name} imagePath={option.imagePath} />
        ))}
      </div>
    );
  }

  return (
    <div>
      {options.map((option, i) => (
        <img key={i} alt={`${option.name} topping`} src={option.imagePath} />
      ))}
    </div>
  );
};

export default Options;
