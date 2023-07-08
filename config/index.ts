const defaultConfig = {
  apiRoot: 'https://wesokoafrika.com/index.php/wp-json/wp/v2/',
  social: {
    instagram: "https://www.instagram.com/wesokoafrika",
    twitter: {
      username: "@wesokoafrika",
      url: "https://www.twitter.com/wesokoafrika"
    },
    email: "mailto:wesokoafrika@gmail.com"
  }
};


export const defaultBlurImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCeRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAASShgAHAAAAEgAAAISgAQADAAAAAQABAACgAgAEAAAAAQAAAAmgAwAEAAAAAQAAAA0AAAAAQVNDSUkAAABTY3JlZW5zaG90/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAA0ACQMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PDw//2wBDAQICAgQEBAcEBAcQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/3QAEAAH/2gAMAwEAAhEDEQA/APN6KQHIB9aWvqD+uD//2Q=="

export default defaultConfig;

//exports for the menu disclosure and menu dropdown
export const menuItemsContent = [
  { href: "/reviews", menuContent: "Reviews" },
  { href: "/features", menuContent: "Features" },
  { href: "/videos", menuContent: "Videos" },
  { href: "/reviews#new-stuff", menuContent: "PSST! New stuff" }
];
