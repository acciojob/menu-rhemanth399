import React from 'react'

let App=()=>{
   let data= [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: 'https://www.justgotochef.com/uploads/1573207281-south%20indi%20breakfast.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: 'https://2.bp.blogspot.com/-eqfViNQwOoI/WQ56JgCBxHI/AAAAAAAAq1Y/5RB9xJgAzegunJrGUSAivImt9HXVzpYZACLcB/s640/mini-tiffin-saravana-bhavan.jpg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: 'https://firstmomsclub.in/wp-content/uploads/2018/02/cheelaneha-1024x686.jpg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/11/Whole30-Lunch-Ideas-7-1.jpg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: 'https://cdn.diabetesselfmanagement.com/2020/01/dsm-packed-lunch-ideas-shutterstock_1382567966-1000x667.jpg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: 'https://th.bing.com/th/id/R.e7fefbdf9ce0182828e8bbe94928098a?rik=I3%2bKlQmo4P1xZg&riu=http%3a%2f%2fwww.insidesources.com%2fwp-content%2fuploads%2f2017%2f01%2fbigstock-Lunch-Tray-5281118.jpg&ehk=QBVFhNufzNWVydxaaRHeLXhdJ8VMN4rCJdMJag9Koas%3d&risl=&pid=ImgRaw&r=0',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: 'https://assets.website-files.com/5c34e0a7ee332945f8c6f728/5c94152c770f51aac08f0fcf_N_ZmcB7Eg5J-8V2P9WsanGJ35NMg_oLXiOfVsutOQ3qwtu1z6L1wDQofSKrLllxQQFv2cDPx6cRN60OFlVKyKr8lOFAPgLrZ5tLoma7dTowua5_DQtqJsk7RCeji3H1mq6npFrOr.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: 'https://www.eatwell101.com/wp-content/uploads/2016/12/busy-weeknight-dinner-ideas.jpg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: 'https://th.bing.com/th/id/OIP.LYURSttg5brqkU4oUhG5AAHaGc?pid=ImgDet&rs=1',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]

    return(
            <div className="Menu">
                {
                    data.map((value,index)=>(
                        <div className="all" key={index}>
                            <div className="image">
                                <img src={value.img} alt="food"/>
                            </div>
                            <div className="details">
                                <div className="title">
                                        
                                        <h2>{value.title}</h2>
                                        <h3>{value.price}</h3>
                                    </div>
                                <div className="description">
                                    <p>{value.desc}</p>
                                    </div>
                            </div>
                            </div>
                    ))
                }
            </div>
    )
}

export default App