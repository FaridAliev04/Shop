import React, { Fragment, useState } from 'react'
import { BsPhone } from 'react-icons/bs'
import { FiWatch } from 'react-icons/fi'
import { MdComputer } from 'react-icons/md'
import { LuRefrigerator } from 'react-icons/lu'
import { PiTelevisionSimpleBold } from 'react-icons/pi'
import { SiPhotobucket } from 'react-icons/si'
// import Img1 from '../img/download.jpg'
import Reklam from './Reklam'
// import Img2 from './img/download (1).jpg'
// import Img3 from './img/download (2).jpg'

const ListData = [
  {
    id: 1,
    fullname: 'Smartfon',
    icons: <BsPhone />,
    products: [
      {
        id:10,
        product: 'Samsung Galaxy',
        // img: <img src={<Img1/>} alt="" />
      },
      {
        id:11,
        product: 'Samsung Galaxy S22',
        // img: <img src={Img1} alt="" />
      },
      {
        id:12,
        product: 'Samsung Galaxy S23',
        // img: <img src={Img1} alt="" />
      },
    ],
  },
  {
    id: 2,
    fullname: 'Smart Qadjetler',
    icons: <FiWatch />,
    products: [
      {
        id:21,
        product: 'Rolex',
      },
    ],
  },
  {
    id: 3,
    fullname: 'Notebuklar',
    icons: <MdComputer />,
    products: [
      {
        id:31,
        product: 'Lenova',
      },
    ],
  },
    {

      fullname: 'Metbex ucun meiset texnikalari',
      icons: <LuRefrigerator />,
    },
    {
      fullname: 'Tv',
      icons: <PiTelevisionSimpleBold />,
    },
    {
      fullname: 'Foto texnika',
      icons: <SiPhotobucket />,
    },
]

const List = () => {
  const [hoverData, setHoverData] = useState([])


  const trueFunc = (id) => {
    const none = document.querySelector('.none')
    const filterData = ListData.find((item) => item.id === id)
    console.log(filterData.products)
    setHoverData(filterData.products)
    none.classList.toggle('block')

  }
  return (
    <Fragment>
      <div className="main">
        <div className="list">
          <div className="list_one">
            <ul className="list_ul">
              {ListData.map((item) => (
                <li key={item.id} onClick={() => trueFunc(item.id)} className="list_li">
                  <div className="list_li-div">
                    {item.fullname} {item.icons}
                  </div>{' '}
                  <hr />
                </li>
              ))}
              {/* <li>{ListData.map((e)=>e.icons)}</li> */}
            </ul>
          </div>
          <div className="none">
            {hoverData.map((e) => (
              <div className="phone" key={e.id}>
                {/* <img src={e.img} /> */}
                <p className="phone_name">{e.product}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="right_main">
          <Reklam/>
        </div>
      </div>
    </Fragment>
  )
}

export default List