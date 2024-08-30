export const END_POINT =
  window.location.hostname === "localhost"
    ? `http://${window.location.hostname}:8002`
    : `${window.location.origin}`;
