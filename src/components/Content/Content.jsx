import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <div>
        <p>
          <b>Хоббі</b>:
        </p>
        <ul title="Хоббі">
          <li>Шахи</li>
          <li>Футбол</li>
          <li>Гра на гітарі</li>
          <li>Настільний теніс</li>
        </ul>
        <p>
          <b>Улюблені фільми</b>:
        </p>
        <ol title="Улюблені фільми">
          <li>"Початок" (англ. "Inception")</li>
          <li>"Час" (англ. "In time")</li>
          <li>"1+1" або "Недоторканні" (фр. "Intouchables")</li>
        </ol>
        <p title="Улюблене місто, де я бував">
          <b>Париж</b> <i>(фр. Paris)</i> — столиця Франції, адміністративний
          центр регіону Іль-де-Франс. Окремий департамент Франції. Розташований
          на річці Сена. Населення — 2 175 601 особа (на 01.01.2021), міська
          агломерація — 10 млн, у 2015 році населення міста становило 2 206 488
          осіб, агломерації — 12 405 426. Штаб-квартири низки міжнародних
          організацій: ЮНЕСКО, Організація економічного співробітництва та
          розвитку, Міжнародна торгівельна палата та інші. Центр світової
          торгівлі (автомобілі, літаки, канцелярські товари й туристичне
          спорядження); головний національний промисловий округ (засоби
          транспорту, енергетичне обладнання, електроніка, одяг, косметика),
          фінансово-банківська столиця; великий транспортний вузол (2 міжнародні
          аеропорти).
        </p>
      </div>
    );
  }
}

export default Content;
