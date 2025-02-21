import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Card from './Card';
import './cardList.scss';

function CardList({ filter, URI, testState }) {
  const [data, setData] = useState([]);
  const backPORT = process.env.REACT_APP_BACK_DEFAULT_PORT;

  let param = useParams();
  let params = param.user_id;
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/works' && location.search === '') {
      fetch('http://' + URI + backPORT + '/works')
        .then(res => res.json())
        .then(data => {
          setData(data.worksFeedList);
        });
      return;
    } else if (location.search === '?sort=recommendpoint') {
      fetch('http://' + URI + backPORT + '/works?sort=recommendpoint', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          setData(data.worksFeedList);
        });
      return;
    } else if (location.search === '?sort=sympathycnt') {
      fetch('http://' + URI + backPORT + '/works?sort=sympathycnt', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          setData(data.worksFeedList);
        });
      return;
    } else if (location.pathname === '/feeds') {
      fetch('http://' + URI + backPORT + '/feeds/list', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then(res => res.json())
        .then(data => {
          setData(data.feedsList);
        });
      return;
    } else if (location.pathname === '/searchlist') {
      // let params = new URLSearchParams(location.search);
      let params = window.location.search;
      fetch('http://' + URI + backPORT + '/searchlist' + params)
        .then(res => res.json())
        .then(data => {
          setData(data.searchResult);
        });
      return;
    } else if (location.pathname === '/category/fashion') {
      fetch('http://' + URI + backPORT + '/category/fashion')
        .then(res => res.json())
        .then(data => {
          setData(data);
        });
      return;
    } else if (location.pathname === '/category/travel') {
      fetch('http://' + URI + backPORT + '/category/travel')
        .then(res => res.json())
        .then(data => {
          setData(data);
        });
      return;
    } else if (location.pathname === '/category/pattern') {
      fetch('http://' + URI + backPORT + '/category/pattern')
        .then(res => res.json())
        .then(data => {
          setData(data);
        });
      return;
    } else if (location.pathname === '/category/animal') {
      fetch('http://' + URI + backPORT + '/category/animal')
        .then(res => res.json())
        .then(data => {
          setData(data);
        });
      return;
    } else if (location.pathname === '/category/searchlist') {
      // let params = new URLSearchParams(location.search);
      let params = window.location.search;
      fetch('http://' + URI + backPORT + '/works/' + params)
        .then(res => res.json())
        .then(data => {
          setData(data.searchResult);
        });
      return;
    } else if (location.pathname === '/category/searchlist') {
      // let params = new URLSearchParams(location.search);
      let params = window.location.search;
      fetch('http://' + URI + backPORT + '/works/' + params)
        .then(res => res.json())
        .then(data => {
          setData(data.searchResult);
        });
      return;
    }
  }, [window.location.href]);

  return (
    <div className="cardList">
      {data &&
        data.map((elem, idx) => {
          return (
            <Card
              key={elem.id}
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
