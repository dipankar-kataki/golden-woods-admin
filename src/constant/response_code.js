const SORTINGORDER = {
    ASC: "asc",
    DESC: "desc",
  };
  
  const NETWORK_STATUS_CODE = {
    SUCCESS: 200,
    CREATED_SUCCESSFULLY: 201,
    PAGE_NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
    UNAUTHORIZED_ACCESS: 401,
    BAD_REQUEST: 400,
    NETWORK_ERROR: "ERR_NETWORK",
  };
  const SERVER_STATUS_CODE = {
    SUCCESS: 1,
    FAILED: 0,
  };
  const INTERNET_CONNECTION_MESSAGE = "Internet Connection Problem";
  const DELETE_MESSAGE_DESCRIPTION =
    "You are about to delete one record, this procedure is irreversible.Do you want to proceed?";
  export {
    SORTINGORDER,
    NETWORK_STATUS_CODE,
    SERVER_STATUS_CODE,
    DELETE_MESSAGE_DESCRIPTION,
    INTERNET_CONNECTION_MESSAGE,
  };
  