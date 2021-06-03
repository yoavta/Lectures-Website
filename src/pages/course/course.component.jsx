import React from 'react';

import COURSE_DATA from './course.data';

import LecturePreview from '../../components/lecture-preview/lecture-preview.jsx';

class CoursePage extends React.Component {
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
        {collections.map(({ id, ...otherCollectionProps }) => (
          <LecturePreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default CoursePage;