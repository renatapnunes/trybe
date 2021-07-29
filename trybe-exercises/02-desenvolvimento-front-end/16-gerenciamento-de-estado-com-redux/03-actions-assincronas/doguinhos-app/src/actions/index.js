const requestDog = () => ({
  type: 'REQUEST_IMAGE',
});

const getImage = (json) => ({
  type: 'GET_IMAGE',
  payload: json.message,
});

const failedRequest = (error) => ({
  type: 'FAILED_REQUEST',
  payload: error,
});

export function fetchDog() {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((r) => r.json()
        .then(
          (json) => dispatch(getImage(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}