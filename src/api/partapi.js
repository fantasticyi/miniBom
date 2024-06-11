//部件管理相关api
import request from "./request";

export default {
  //分页查询部件
  queryPart(id, curPage, pageSize) {
    return request({
      url: "/idme/part/query",
      method: "post",
      data: { id, curPage, pageSize },
    });
  },
  //创建部件
  create(partType, source) {
    return request({
      url: "/idme/part/create",
      method: "post",
      data: {},
    });
  },
  //删除部件
  deletePart(masterId, modifier) {
    return request({
      url: "/idme/part/delete",
      method: "post",
      data: {
        masterId,
        modifier,
      },
    });
  },
  //更新部件
  updatePart(id, name, creator, modifier, description, source, partType) {
    return request({
      url: "/idme/part/update",
      method: "post",
      data: { id, name, creator, modifier, description, source, partType },
    });
  },
  //获取部件的所有版本
  allVersion(masterId, version, curPage, pageSize) {
    return request({
      url: "/idme/part/versions",
      method: "post",
      data: { masterId, version, curPage, pageSize },
    });
  },
};
