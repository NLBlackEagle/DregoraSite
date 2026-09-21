const destination = "https://dregora.com/";

export default {
  fetch() {
    return Response.redirect(destination, 301);
  },
};
