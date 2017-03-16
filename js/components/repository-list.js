import React from 'react';
import {connect} from 'react-redux';

import Repository from './repository';
import * as actions from '../actions/index';

export class RepositoryList extends React.Component {
  constructor(props) {
    super(props);
    this.addRepository = this.addRepository.bind(this);
  }

  addRepository() {
      const repositoryName = this.repositoryNameInput.value;
      const repositoryOwner = this.repositoryOwnerInput.value;
      this.props.dispatch(actions.addRepository(repositoryOwner, repositoryName));
  }


  render() {
      const repositories = this.props.repositories.map(repository => {
           return <Repository repository={repository} key={repository.name} />
      });
    return (
        <div className="repository-list">
            {repositories}
            <input type="text" ref={ref => this.repositoryOwnerInput = ref} />
            <input type="text" ref={ref => this.repositoryNameInput = ref} />
            <button type="button" onClick={this.addRepository}>
                Add Repository
            </button>
        </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
    repositories: state
});
export default connect(mapStateToProps)(RepositoryList);
