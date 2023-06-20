import React from 'react';
import Sneaker from '../Image/sneaker.png';


export const WorkItemSneaker = () => {
    return (
        <div id="work">
            <figure className='text-container col2'>
                <h2 className='sec-title text-container__title'>
                    My Work
                    <span className='sub-sec-title'>My Work</span>
                </h2>
            </figure>
        <div className="work-wrapper">
          <ul>
            <li className="work-item animated-li">
              <figure>
                <a href="">
                  <img src={Sneaker} alt="" />
                  <figcaption>
                    <div className="fig-inner">
                      <h3>動画付きカルーセル</h3>
                      <p>カルーセルグリッドレイアウト</p>
                      <p>制作期間:2日</p>
                    </div>
                  </figcaption>
                </a>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    );
}
