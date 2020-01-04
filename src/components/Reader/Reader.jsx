import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Controls from '../Controls/Controls';
import Progress from '../Progress/Progress';

class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const publications = items[publicationIndex];
    const enabledPrevBtn = publicationIndex <= 0;
    const enabledNextBtn = publicationIndex === items.length - 1;

    return (
      <>
        <Progress
          currentPage={publicationIndex + 1}
          totalPages={items.length}
        />
        <Publication title={publications.title} text={publications.text} />
        <Controls
          onPrevClick={this.handleDecrement}
          onNextClick={this.handleIncrement}
          prevBtnDisabled={enabledPrevBtn}
          nextBtnDisabled={enabledNextBtn}
        />
      </>
    );
  }
}

export default Reader;
