export const ADD_REPOSITORY = 'ADD_REPOSITORY';
export const addRepository = repository => ({
    type: ADD_REPOSITORY,
    repository
});

export const RATE_REPOSITORY = 'RATE_REPOSITORY';
export const rateRepository = (repository, rating) => ({
    type: RATE_REPOSITORY,
    repository,
    rating
});
