import styled from "styled-components";

const Photo = styled("img")(({ height, width, src }) => ({
  borderRadius: "50%",
  width: width || 90,
  height: height || 90,
  backgroundColor: "#ccc",
  overflow: "hidden",
  src
}));

export default Photo;
