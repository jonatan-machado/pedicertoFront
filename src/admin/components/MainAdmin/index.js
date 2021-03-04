import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function MainAdmin({ children }) {
  return(
      <Container>
          { children }
      </Container>
  );
}

MainAdmin.protoTypes = {
    children: PropTypes.element.isRequered,
};

export default MainAdmin;