import * as actions from '../actions/index';

const initialRepositoryState = [];

export const repositoryReducer = (state=initialRepositoryState, action) => {
    if (action.type === actions.ADD_REPOSITORY) {
        return [...state, {
            owner: action.owner,
            name: action.repository,
            rating: null
        }];
    }
    else if (action.type === actions.RATE_REPOSITORY) {
        const index = state.findIndex(repository =>
            repository.name === action.repository
        );
        if (index === -1) {
            throw new Error('Cannot rate a repo that does not exist');
        }

        const before = state.slice(0, index);
        const after = state.slice(index + 1);
        const newRepository = Object.assign({}, state[index], {rating: action.rating});
        return [...before, newRepository, ...after];
    }
    else if (action.type === actions.FETCH_DESCRIPTION_SUCCESS) {
        //find index of matching repository
        const index = state.findIndex(repository => repository.name === action.repository);

        if (index === -1) {
            throw new Error('Could not find repository');
        }

        const before = state.slice(0, index);
        const after = state.slice(index + 1);
        const newRepository = Object.assign({},state[index], {description: action.description});
        return [...before, newRepository, ...after];
    }
    else if (action.type === actions.FETCH_DESCRIPTION_ERROR) {
        const index = state.findIndex(repository => repository.name === action.repository);

        if (index === -1) {
            throw new Error('Could not find repository');
        }
        const before = state.slice(0, index);
        const after = state.slice(index + 1);
        const newRepository = Object.assign({},state[index], {description: 'N/A'});
        return [...before, newRepository, ...after];

    }

    return state;
};
