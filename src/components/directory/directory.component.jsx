import React from 'react';
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item/menu-item.component';


class Directory extends React.Component{

    constructor(){
        super();
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5
                }
              ]
            };
        }

    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map( ({title, id, imageUrl, size}) =>(
                        <MenuItem  key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} />   
                    ))
                }
            </div>
        )
    }
}



export default Directory;
