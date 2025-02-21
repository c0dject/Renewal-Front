import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './ChanelCard';
import './chanelCardList.scss';

function CardList({ filter, URI }) {
  const [data, setData] = useState([]);
  const backPORT = process.env.REACT_APP_BACK_DEFAULT_PORT;
  let param = useParams();
  let params = param.user_id;

  useEffect(() => {
    fetch('http://' + URI + backPORT + '/channel/' + params)
      .then(res => res.json())
      .then(data => {
        setData(data.usersPosts);
      });
  }, []);

  return (
    <div className="chanelcardList">
      {data.map((elem, idx) => {
        return (
          <Card
            key={idx}
            id={elem.id}
            kor_name={elem.kor_name}
            profile_image={elem.profile_image}
            img_url={elem.img_url}
            title={elem.title}
            view_count={elem.view_count}
            created_at={elem.created_at}
            sympathy_cnt={elem.sympathy_cnt}
            comment_cnt={elem.comment_cnt}
          />
        );
      })}
    </div>
  );
}

export default CardList;
