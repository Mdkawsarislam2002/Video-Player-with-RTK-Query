export const letsGetSingleVideo = (id) => ({
  url: `videos/${id}`,
  method: "DELETE",
  body: id,
});
