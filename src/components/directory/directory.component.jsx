import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                lecture: 'לינארית 1',
                lecturer:'עדי בן צבי',
                imageUrl: 'https://www.w3resource.com/w3r_images/linear-algebra-image.svg',
                id:1,
                linkUrl: 'linear1'
            },{
                lecture: 'לינארית 2',
                lecturer:'עדי בן צבי',
                imageUrl: 'http://media5.datahacker.rs/2020/03/Picture13-2-913x1024.jpg',
                id:2,
                linkUrl: 'linear2'
            },{
                lecture: 'אינפי 1',
                lecturer:'ארז שיינר',
                imageUrl: 'https://www.dictionary.com/e/wp-content/uploads/2019/10/slideshow-Large-numbers_8_1000x700-790x310.jpg',
                id:3,
                linkUrl: 'infi1'
            },{
                lecture: 'אינפי 2',
                lecturer:'אלעד עטיא',
                imageUrl: 'https://www.youcubed.org/wp-content/uploads/2017/03/beautiful-math-1.jpg',
                id:4,
                linkUrl: 'infi2'
            },{
                lecture: 'מודלים חישוביים',
                lecturer:'יהונתן אומן',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Turing_Machine_Model_Davey_2012.jpg/1200px-Turing_Machine_Model_Davey_2012.jpg',
                id:5,
                linkUrl: 'computation'
            },
            
            ]
        }
    }

render(){
  return (
    <div className="directory-menu">
      {this.state.sections.map(({ lecture, lecturer, id,imageUrl, linkUrl }) => (
        <MenuItem
          key={id}
          lecture={lecture}
          lecturer={lecturer}
          imageUrl={imageUrl}
          linkUrl={linkUrl}

        />
      ))}
    </div>
  );
}
}

export default Directory;