import React from "react";

import COURSE_DATA from '../course/course.data';

import ElementCollection from '../../components/element-collection/element-collection.component';
class LecturePage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          collections: COURSE_DATA
        };
      }


      render() {
        const { collections } = this.state;
        return (
          <div className='course-page'>
          {/* sending only 1 ↨->should make it prettier */}
            {collections.filter((item, id) => id < 1).map(({ id, ...otherCollectionProps }) => (
              <ElementCollection key={id} {...otherCollectionProps} />
            ))}
          </div>
        );
      }
    }
    

export default LecturePage;
