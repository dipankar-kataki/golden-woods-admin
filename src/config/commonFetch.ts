import API from "./config";

const commonFetch = async (url:any, bodyData:any = null) => {
  return await API.get(url, bodyData ? bodyData : null)
    .then((respone:any) => {
      return respone;
    })
    .catch((error:any) => {
      return error;
    });
};
const commonPost = async (url:any, bodyData:any = null) => {
  return await API.post(url, bodyData ? bodyData : null)
    .then((respone:any) => {
      return respone;
    })
    .catch((error:any) => {
      return error?.response;
    });
};
const commonPut = async (url:any, bodyData:any = null) => {
  return await API.put(url, bodyData )
    .then((respone:any) => {
      return respone;
    })
    .catch((error:any) => {
      return error?.response;
    });
};

const commonDelete = async (url:any, bodyData:any = null) => {
  return await API.delete(url, bodyData)
    .then((respone:any) => {
      return respone;
    })
    .catch((error:any) => {
      return error?.response;
    });
};

export const Service = {
  commonFetch,
  commonPost,
  commonPut,
  commonDelete,
};
