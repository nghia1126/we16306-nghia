import instance from "./config";

export const add = (post) => {
    const url = "/posts";
    return instance.post(url,post);
};
export const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
};
export const getAll = () => {
    const url = "/posts";
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/posts/${post.id}`;
    return instance.put(url,post);
};



export const addCate = (cate) => {
    const url = "/postCates";
    return instance.post(url,cate);
};
export const getCate = (id) => {
    const url = `/postCates/${id}?_embed=posts`;
    return instance.get(url);
};
export const getAllCate = () => {
    const url = "/postCates";
    return instance.get(url);
};
export const removeCate = (id) => {
    const url = `/postCates/${id}`;
    return instance.delete(url);
};
export const updateCate = (post) => {
    const url = `/postCates/${post.id}`;
    return instance.put(url,post);
};