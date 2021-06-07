import { memo, useState } from 'react';

const ListElementBody =  memo(({id, title, url}) =>
  <>
    <img src={url} alt={id}/>
    {title}
  </>
);

const List = ({ data }) => {
  const [selected, setSelected] = useState(null);

  return (
    <ul>
      {data.map(({id, title, url}) => {
        const handleClick = () => setSelected(id);

        return (
          <li key={id} className={`list-element ${selected === id ? 'selected' : ''}`} onClick={handleClick}>
            <ListElementBody id={id} title={title} url={url} />
          </li>
          );
        }
      )}
    </ul>
  )
};

export default memo(List);
