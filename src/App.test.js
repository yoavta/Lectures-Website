// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('yin5mAABR4tbQ1aIExrR').collection('coursesItems').doc('EUx3tvaYUQvJQb85Oc9J');
firestore.doc('users/yin5mAABR4tbQ1aIExrR/coursesItems/EUx3tvaYUQvJQb85Oc9J');
